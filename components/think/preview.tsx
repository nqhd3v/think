import { useThink } from "@/context/think";
import { TThink } from "@/types/think";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React from "react";

const InternalPreviewThinkCard: React.FC<{ thinkId: TThink["id"] }> = ({
  thinkId,
}) => {
  const {
    dictionary: { think },
  } = useThink();
  const router = useRouter();
  const data = think[thinkId];
  return (
    <div
      className="w-full px-5 border border-gray-200 bg-white shadow-sm hover:shadow-md duration-300 cursor-pointer"
      onClick={() => router.push(`r/${thinkId}`)}
    >
      <div className="font-writer text-xl py-5 border border-x-0 border-t-0 border-gray-200 select-none">
        {data.title}
      </div>
      <div className="text-sm text-dark-100/50 flex items-baseline gap-2 font-ubuntu py-3">
        <span className="select-none">
          {dayjs(dayjs.unix(data.ts)).format("DD/MM/YYYY")}
        </span>
        {"·"}
        <div className="flex items-center">
          {data.category.map((c) => (
            <span key={`think-${thinkId}-cat-${c}`} className="group">
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/${c}`);
                }}
                className="duration-300 hover:text-dark-100/80 select-none"
              >
                {c}
              </span>
              <span className="group-last:hidden">,&nbsp;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternalPreviewThinkCard;
