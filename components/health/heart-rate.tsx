import { TGarminHeartRateFs } from "@/types/garmin";
import dayjs from "dayjs";
import { XAxis, ResponsiveContainer, AreaChart, Tooltip, Area } from "recharts";
import { twMerge } from "tailwind-merge";

const InternalHeartRateChart: React.FC<{
  data?: TGarminHeartRateFs["heartRateValues"];
  loading?: boolean;
  className?: string;
}> = ({ data, loading, className }) => {
  if (loading || !Array.isArray(data) || data.length === 0) return null;

  // Extract heartRateValues array from data
  const heartRates = data.map((d) => ({
    // time: dayjs(new Date(d.timestamp)).format("HH:mm"),
    time: d.timestamp,
    rate: d.heartrate,
  }));

  return (
    <div className={twMerge("relative w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={200}
          data={heartRates}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="time" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            connectNulls={false}
            type="monotone"
            dataKey="rate"
            stroke="#ff4d4d"
            fill="url(#color_heartRate)"
          />
          <defs>
            <linearGradient id="color_heartRate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff4d4d" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff4d4d" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomXAxisTick: React.FC<{ x?: any; y?: any; payload?: any }> = ({
  x,
  y,
  payload,
}) => {
  // const time = dayjs(new Date(payload.value)).format("HH:mm");

  return null;
  // return (
  //   <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
  //     {time}
  //   </text>
  // );
};

const CustomTooltip: React.FC<{ active?: any; payload?: any; label?: any }> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const hr = payload[0].value;
    return (
      <div className="bg-white p-2 rounded-md shadow-md">
        <span className="font-bold text-gray-400">
          {dayjs(label, "HH:mm").format("H[h]m")}
          {" · "}
          <span className="text-red-400">{hr}</span>
        </span>
      </div>
    );
  }

  return null;
};

export default InternalHeartRateChart;
