import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const transformHeartRateValues = (
  heartRateValues: { heartrate: number; timestamp: number }[],
  lastSync: string
) => {
  const lastSyncDate = dayjs.utc(lastSync).tz("Asia/Ho_Chi_Minh");
  const lastSyncUnix = lastSyncDate.unix() * 1000;
  console.log(lastSyncUnix);
  const clone: { heartrate: number | null; timestamp: number }[] = [
    ...heartRateValues,
  ];
  let index = heartRateValues[0].timestamp;
  while (index <= lastSyncUnix) {
    if (heartRateValues.find(({ timestamp }) => timestamp === index)) {
      index += 120000;
    } else {
      clone.push({ timestamp: index, heartrate: null });
      index += 120000;
    }
  }

  const res = clone.sort(({ timestamp: t1 }, { timestamp: t2 }) => t1 - t2);
  console.log(res);
  return res;
};
