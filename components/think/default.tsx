import { useThink } from "@/context/think";
import { TThink } from "@/types/think";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import Command from "../command";
import Image from "next/image";
import React from "react";

const InternalThinkCard: React.FC<{ thinkId: TThink["id"] }> = ({
  thinkId,
}) => {
  const {
    dictionary: { think },
  } = useThink();

  if (!think[thinkId])
    return (
      <div className="w-full h-[200px] flex items-center justify-center">
        this think is out of brain...
      </div>
    );
  const data = think[thinkId];
  return (
    <div className="w-full">
      <Command
        cmd="read"
        params={[
          {
            key: "think-id-param",
            content: (
              <>
                <span className="text-dark-100/60">-id</span>
                <span className="text-yellow-600/60">
                  &quot;{data.id}&quot;
                </span>
              </>
            ),
          },
        ]}
      />
      <div className="font-bold font-writer text-2xl md:text-3xl text-justify">
        {data.title}
      </div>
      <div className="text-sm font-ubuntu flex gap-2 mb-10">
        <span className="text-dark-400/60">wrote at</span>
        <span className="text-love-500/60 font-bold">
          &quot;{dayjs(dayjs.unix(data.ts)).format("DD/MM/YYYY - HH:mm")}&quot;
        </span>
        {" · "}
        <span className="text-dark-400/60">in</span>
        <span
          className={`text-dark-100/60 before:content-['"'] after:content-['"']`}
        >
          {data.category.map((c) => (
            <span key={`cat-${c}`} className="group">
              <span className="text-green-600 font-bold">{c}</span>
              <span className="group-last:hidden">,&nbsp;</span>
            </span>
          ))}
        </span>
      </div>
      <div className="text-base font-writer flex flex-col gap-3">
        {data.content?.map((content) => (
          <ThinkContentParagraph content={content} key={content} />
        ))}
      </div>
    </div>
  );
};

const ThinkContentParagraph: React.FC<{ content: string }> = ({ content }) => {
  if (content.startsWith("img:")) {
    const url = content.replace("img:", "");
    return (
      <div className="w-full h-[240px] md:h-[400px] rounded-md relative overflow-hidden border border-gray-400/40">
        <Image
          src={url}
          alt="think-image"
          fill
          objectFit="contain"
          className="!top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2"
        />
      </div>
    );
  }
  return <div className="text-justify">{content}</div>;
};

export default InternalThinkCard;
