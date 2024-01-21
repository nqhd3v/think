"use client";
import PageContent from "@/components/page-content";
import ThinkCard from "@/components/think";
import { useThink } from "@/context/think";
import { useRequestData } from "@/hooks/use-request";
import { TThinkFs } from "@/types/think";
import $http from "@/utils/request";
import { useParams } from "next/navigation";

export default function ReadThinkPage() {
  const { thinkId } = useParams();
  const {
    setDic,
    dictionary: { think },
  } = useThink();
  const { loading } = useRequestData(
    () => $http.get<TThinkFs>(`think/${thinkId}`),
    {
      onData(data) {
        setDic({ cmd: "think", payload: { [data.id]: data } });
      },
    }
  );

  return (
    <>
      <title>
        {loading ? "Loading" : think[thinkId as string]?.title || "notfound"}
      </title>
      <PageContent>
        {loading ? (
          <ThinkCard.Loading />
        ) : (
          <ThinkCard thinkId={thinkId as string} />
        )}
      </PageContent>
    </>
  );
}
