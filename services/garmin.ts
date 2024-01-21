import { GarminConnect } from "garmin-connect";
import { saveOAuthToken } from "./firebase/garmin";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import {
  TGarminActivity,
  TGarminDailyReport,
  TGarminSleepData,
} from "@/types/garmin";
import { ISocialProfile } from "garmin-connect/dist/garmin/types";

dayjs.extend(utc);
dayjs.extend(timezone);

export const initialGarminClient = async () => {
  try {
    // const defaultOAuthTokens = await loadOAuthToken();
    // if (defaultOAuthTokens) {
    //   const defaultGCClient = new GarminConnect();
    //   defaultGCClient.loadToken(...defaultOAuthTokens);
    //   await garminUserData(defaultGCClient)
    //     .user()
    //     .catch(() => null);

    //   return defaultGCClient;
    // }

    const GCClient = new GarminConnect({
      username: process.env.GARMIN_USERNAME || "",
      password: process.env.GARMIN_PASSWORD || "",
    });
    // Uses credentials from garmin.config.json or uses supplied params
    await GCClient.login();
    // save token
    const oauth1 = GCClient.client.oauth1Token;
    const oauth2 = GCClient.client.oauth2Token;
    await saveOAuthToken([oauth1, oauth2]);

    return GCClient;
  } catch (err: any) {
    throw err;
  }
};

export const garminUserData = (client: GarminConnect) => ({
  user: async () => client.getUserProfile(),
  heartRate: async (date: string) => {
    try {
      return client.getHeartRate(new Date(date));
    } catch (err) {
      return null;
    }
  },
  steps: async (date: string) => {
    try {
      return client.getSteps(new Date(date)).catch((e) => {
        console.error("Retrieve Garmin step Error:", e.message);
        return Promise.resolve(null);
      });
    } catch (err) {
      return 0;
    }
  },
  sleepDuration: async (date: string) => {
    try {
      return client.getSleepDuration(new Date(date));
    } catch (err) {
      return null;
    }
  },
  sleepData: async (date: string): Promise<TGarminSleepData | null> => {
    try {
      const data = await client.getSleepData(new Date(date));
      return data as unknown as TGarminSleepData;
    } catch (err) {
      return null;
    }
  },
  activities: async (date: string): Promise<TGarminActivity[]> => {
    try {
      const data = await client.getActivities(undefined, 10);
      if (data.length === 0) return [];
      return data.filter(
        (act) =>
          dayjs
            .utc(act.startTimeGMT)
            .tz("Asia/Ho_Chi_Minh")
            .format("YYYY-MM-DD") === date
      ) as unknown as TGarminActivity[];
    } catch (err: any) {
      console.error("error when retrieve activity from garmin", err.message);
      return [];
    }
  },
});

export const getGarminDailyData = async (
  date?: string
): Promise<{
  date: string;
  user: ISocialProfile;
  data: TGarminDailyReport;
}> => {
  const today =
    date || dayjs.tz(dayjs(), "Asia/Ho_Chi_Minh").format("YYYY-MM-DD");
  console.log({ date, today });
  const client = await initialGarminClient();
  const req = garminUserData(client);

  const user = await req.user();
  const steps = await req.steps(today);
  const heartRate = await req.heartRate(today);
  const sleepDuration = await req.sleepDuration(today);
  const sleepData = await req.sleepData(today);
  const activities = await req.activities(today);

  return {
    date: today,
    user,
    data: {
      steps,
      heartRate,
      sleepDuration,
      sleepData,
      activities,
    },
  };
};
