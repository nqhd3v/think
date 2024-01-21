import { TGarminActivity } from "@/types/garmin";

export const garminActivityTypeMap: Record<
  TGarminActivity["activityType"]["typeKey"],
  string
> = {
  running: "ran",
};

export const sToHm = (secs: number) => {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs - h * 3600) / 60);

  return `${[h, m].filter((t) => t).join(":")}h`;
};

export const mToKm = (meter: number) => Math.floor(meter) / 1000;
export const title = (name: string, loading?: boolean) =>
  `${loading ? "thinking" : "thought"} · ${name || "nqhuy"}`;
