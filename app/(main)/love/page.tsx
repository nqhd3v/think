"use client";
import PageContent from "@/components/page-content";
import ThinkCard from "@/components/think";
import { useThink } from "@/context/think";
import { useRequestData } from "@/hooks/use-request";
import { TThink } from "@/types/think";
import { title } from "@/utils/mapping-data";
import $http from "@/utils/request";

export default function LovePage() {
  const { setData, thinkIds } = useThink();
  const { loading } = useRequestData<TThink[]>(
    (lastItem?: string) =>
      $http.get("think", {
        params: { lastItem, category: "love" },
      }),
    {
      onData(data) {
        setData({ cmd: "think", payload: { data, category: "love" } });
      },
      onError({ error, root }) {
        console.log({ error, root });
      },
    }
  );

  return (
    <>
      <title>{title("love", loading)}</title>
      <PageContent>
        <div className="flex flex-col gap-5">
          <div className="font-writer w-full text-justify">
            <div className="text-[52px] leading-[52px] sm:text-[68px] sm:leading-[68px] font-ubuntu font-bold pointer-events-none text-left text-love-400">
              are u okay today?
            </div>
            <p className="">
              caption to be updated when I fall in love :) but not now :&gt;
            </p>
          </div>
          {loading ? (
            <>
              <ThinkCard.PreviewLoading />
              <ThinkCard.PreviewLoading />
              <ThinkCard.PreviewLoading />
            </>
          ) : (
            thinkIds.love.map((id) => (
              <ThinkCard.Preview thinkId={id} key={id} />
            ))
          )}
        </div>
      </PageContent>
    </>
  );
}
