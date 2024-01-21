export type TGarminDailyReport = {
  steps: number | null;
  heartRate: TGarminHeartRate;
  sleepDuration: {
    hours: number;
    minutes: number;
  } | null;
  sleepData: TGarminSleepData | null;
  activities: TGarminActivity[];
};
export type TGarminDailyReportFs = Omit<TGarminDailyReport, "heartRate"> & {
  heartRate: TGarminHeartRateFs;
};

export type TGarminHeartRate = {
  calendarDate: string; // YYYY-MM-DD
  startTimestampGMT: string;
  endTimestampGMT: string;
  startTimestampLocal: string;
  endTimestampLocal: string;
  maxHeartRate: number;
  minHeartRate: number;
  restingHeartRate: number;
  lastSevenDaysAvgRestingHeartRate: number;
  lowAbnormalHrThresholdValue: number;
  abnormalHRValuesArray: [number, number][];
  heartRateValues: [number, number][];
  heartRateValueDescriptors: { key: string; index: number }[];
};
export type TGarminHeartRateFs = Omit<
  TGarminHeartRate,
  "abnormalHRValuesArray" | "heartRateValues" | "heartRateValueDescriptors"
> & {
  abnormalHRValuesArray: Record<string, number>[];
  heartRateValues: Record<string, number>[];
};

export type TGarminSleepData = {
  dailySleepDTO: TDailySleepDTO;
  sleepMovement: TSleepMovement[];
  remSleepData: true;
  sleepLevels: TSleepLevel[];
  wellnessEpochSPO2DataDTOList: TWellnessEpochSPO2[];
  wellnessEpochRespirationDataDTOList: TWellnessEpochRespiration[];
  sleepHeartRate: TSleepTimeValue[];
  sleepStress: TSleepTimeValue[];
  sleepBodyBattery: TSleepTimeValue[];
  bodyBatteryChange: number;
  restingHeartRate: number;
};
export type TSleepMovement = {
  startGMT: string;
  endGMT: string;
  activityLevel: number;
};
export type TSleepLevel = {
  startGMT: string;
  endGMT: string;
  activityLevel: number;
};
export type TWellnessEpochSPO2 = {
  userProfilePK: number;
  epochTimestamp: string;
  deviceId: number;
  calendarDate: string; // 2024-01-30T00:00:00.0
  epochDuration: number;
  spo2Reading: number;
  readingConfidence: number;
};
export type TWellnessEpochRespiration = {
  startTimeGMT: number; // 1706633700000
  respirationValue: number;
};
export type TSleepTimeValue = {
  value: number;
  startGMT: number; // 1706633640000
};
export type TDailySleepDTO = {
  id: number;
  userProfilePK: number;
  calendarDate: string; // 2024-01-31
  sleepTimeSeconds: number;
  napTimeSeconds: number;
  sleepWindowConfirmed: boolean;
  sleepWindowConfirmationType: string;
  sleepStartTimestampGMT: number;
  sleepEndTimestampGMT: number;
  sleepStartTimestampLocal: number;
  sleepEndTimestampLocal: number;
  autoSleepStartTimestampGMT: number;
  autoSleepEndTimestampGMT: number;
  unmeasurableSleepSeconds: number;
  deepSleepSeconds: number;
  lightSleepSeconds: number;
  remSleepSeconds: number;
  awakeSleepSeconds: number;
  deviceRemCapable: boolean;
  retro: boolean;
  averageSpO2Value: number;
  lowestSpO2Value: number;
  highestSpO2Value: number;
  averageSpO2HRSleep: number;
  averageRespirationValue: number;
  lowestRespirationValue: number;
  highestRespirationValue: number;
  sleepQualityTypePK: number | null;
  sleepResultTypePK: number | null;
};

export type TGarminActivity = {
  activityId: number;
  activityName: string;
  startTimeGMT: string;
  activityType: {
    typeId: number;
    typeKey: "running";
  };
  distance: number; // meter
  duration: number; // sec
  averageSpeed: number;
  calories: 799;
  bmrCalories: 121;
  averageHR: 166;
  timeZoneId: 134;
  vO2MaxValue: 42;
  locationName: "Huyện Triệu Phong";
};
