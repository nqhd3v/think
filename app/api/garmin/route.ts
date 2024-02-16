import { saveDailyData } from "@/services/firebase/garmin";
import { getGarminDailyData } from "@/services/garmin";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const source = searchParams.get("source");
  const dateInput = searchParams.get("date") as string;
  // const source = req.query.source;

  if (source !== "GAS")
    return Response.json({ errors: ["Unknown Source App"] });
  const { date, user, data } = await getGarminDailyData(dateInput);
  const isSaved = await saveDailyData(date, data);

  return Response.json({ date, data, user, isSaved });
}
