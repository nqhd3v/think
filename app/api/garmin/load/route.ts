import { transformHeartRateValues } from "@/helpers/transform-heart-rate-values";
import { loadDailyData } from "@/services/firebase/garmin";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date))
    return Response.json(null, { status: 400 });
  const data = await loadDailyData(date);
  if (!data) return Response.json(null);
  const heartRateValues = transformHeartRateValues(
    data.heartRate.heartRateValues as {
      heartrate: number;
      timestamp: number;
    }[],
    data.heartRate.endTimestampGMT
  );
  return Response.json({
    ...data,
    heartRate: {
      ...data.heartRate,
      heartRateValues,
    },
  });
}
