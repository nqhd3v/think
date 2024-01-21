import $http from "@/utils/request";
import InternalHeartRateChart from "./heart-rate";
import { useRequestData } from "@/hooks/use-request";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import { useDateSession } from "@/hooks/use-date-session";
import { TGarminActivity } from "@/types/garmin";
import { garminActivityTypeMap, mToKm, sToHm } from "@/utils/mapping-data";

const HealthCard: React.FC<{ className?: string }> = ({ className }) => {
  const session = useDateSession();
  const { data, loading } = useRequestData(() =>
    $http.get("garmin/load", {
      params: {
        date: dayjs().format("YYYY-MM-DD"),
      },
    })
  );

  return (
    <div
      className={twMerge(
        "relative w-full h-[160px] sm:h-[200px] overflow-hidden",
        className
      )}
    >
      <InternalHeartRateChart
        className="h-full absolute -bottom-8 left-0 w-full right-0"
        data={data?.heartRate.heartRateValues}
        loading={loading}
      />
      <span className="text-[68px] leading-[68px] font-ubuntu font-bold pointer-events-none absolute top-0 left-0">
        {session},
      </span>
      {data && (
        <span className="text-base font-ubuntu pointer-events-none absolute top-[68px] left-0 text-dark-100/60">
          you walked{" "}
          <span className="text-dark-100 font-bold">{data.steps || 0}</span>{" "}
          steps
          <br />
          slept within{" "}
          <span className="text-dark-100 font-bold">
            {data.sleepDuration.hours
              ? `${data.sleepDuration.hours}:${data.sleepDuration.minutes}h`
              : `${data.sleepDuration.minutes}m`}
          </span>
          <br />
          {Array.isArray(data.activities) && data.activities.length > 0 ? (
            data.activities.map((a: TGarminActivity) => (
              <span key={a.activityId}>
                {garminActivityTypeMap[a.activityType.typeKey] ||
                  a.activityType.typeKey}{" "}
                <span className="font-bold text-dark-100">
                  {mToKm(a.distance)}km
                </span>{" "}
                in{" "}
                <span className="font-bold text-dark-100">
                  {sToHm(a.duration)}
                </span>
              </span>
            ))
          ) : (
            <span>no activities today</span>
          )}
        </span>
      )}
      <span className="absolute bottom-0 left-0 font-ubuntu text-sm text-dark-100/60">
        {data ? (
          <>
            last synced with{" "}
            <span className="font-bold text-dark-100/60">Garmin</span> at{" "}
            <span className="font-bold text-love-400">
              {dayjs(new Date(data.heartRate.endTimestampGMT))
                .add(7, "hours")
                .format("HH:mm:ss")}
            </span>
          </>
        ) : (
          <>
            no data for health today, open{" "}
            <span className="font-bold text-dark-100/60">Garmin Connect</span>{" "}
            to sync the latest data
          </>
        )}
      </span>
    </div>
  );
};

export default HealthCard;
