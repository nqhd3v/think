import {
  TGarminDailyReport,
  TGarminDailyReportFs,
  TGarminHeartRate,
  TGarminHeartRateFs,
} from "@/types/garmin";
import firebase from ".";
import { IOauth1Token, IOauth2Token } from "garmin-connect/dist/garmin/types";
import dayjs from "dayjs";

export const saveOAuthToken = async (
  tokens: [IOauth1Token | undefined, IOauth2Token | undefined]
) => {
  try {
    await firebase
      .firestore()
      .collection("garmin")
      .doc("__config")
      .set(
        {
          tokens: JSON.stringify(tokens),
        },
        { merge: true }
      );

    return true;
  } catch (err: any) {
    console.error("Error when save GARMIN OAuth Token:", err.message);
    return false;
  }
};

export const loadOAuthToken = async (): Promise<
  [IOauth1Token, IOauth2Token] | null
> => {
  try {
    const res = await firebase
      .firestore()
      .collection("garmin")
      .doc("__config")
      .get();
    if (res.exists) {
      const data = res.data() as { tokens: string };
      return data.tokens ? JSON.parse(data.tokens) : null;
    }
    return null;
  } catch (err: any) {
    console.error("Error when load GARMIN OAuth Token from Fs:", err.message);
    return null;
  }
};

export const saveDailyData = async (date: string, data: TGarminDailyReport) => {
  try {
    await firebase
      .firestore()
      .collection("garmin")
      .doc(date)
      .set(
        {
          heartRate: transformHeartRate(data.heartRate),
          steps: data.steps,
          sleepData: data.sleepData,
          sleepDuration: data.sleepDuration,
          activities: data.activities,
          ts: dayjs().unix(),
        },
        { merge: true }
      );
    return true;
  } catch (err: any) {
    console.error("Error when save GARMIN user Daily data to Fs:", err.message);
    return null;
  }
};

export const loadDailyData = async (
  date: string
): Promise<TGarminDailyReportFs | null> => {
  try {
    const doc = await firebase.firestore().collection("garmin").doc(date).get();

    if (!doc.exists) return null;
    return doc.data() as TGarminDailyReportFs;
  } catch (err: any) {
    console.error("Error when save GARMIN user Daily data to Fs:", err.message);
    return null;
  }
};

export const transformHeartRate = ({
  heartRateValueDescriptors,
  heartRateValues,
  abnormalHRValuesArray,
  ...original
}: TGarminHeartRate): TGarminHeartRateFs => {
  const fieldMapping: string[] = [];
  heartRateValueDescriptors.forEach(
    ({ key, index }) => (fieldMapping[index] = key)
  );
  const hrValues = heartRateValues.map((v) => {
    const hrValue: Record<string, number> = {};
    v.forEach((vi, vii) => (hrValue[fieldMapping[vii]] = vi));
    return hrValue;
  });
  const abHrValues =
    abnormalHRValuesArray?.map((v) => {
      const hrValue: Record<string, number> = {};
      v.forEach((vi, vii) => (hrValue[fieldMapping[vii]] = vi));
      return hrValue;
    }) || null;

  return {
    ...original,
    heartRateValues: hrValues,
    abnormalHRValuesArray: abHrValues,
  };
};
