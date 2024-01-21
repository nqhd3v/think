"use client";
import HealthCard from "@/components/health";
import PageContent from "@/components/page-content";
import ThinkCard from "@/components/think";
import { useThink } from "@/context/think";
import { useRequestData } from "@/hooks/use-request";
import { TThink } from "@/types/think";
import { title } from "@/utils/mapping-data";
import $http from "@/utils/request";

export default function RunPage() {
  const { setData, thinkIds } = useThink();
  const { loading } = useRequestData<TThink[]>(
    (lastItem?: string) =>
      $http.get("think", {
        params: { lastItem, category: "health" },
      }),
    {
      onData(data) {
        setData({ cmd: "think", payload: { data, category: "health" } });
      },
      onError({ error, root }) {
        console.log({ error, root });
      },
    }
  );

  return (
    <>
      <title>{title("health", loading)}</title>
      <PageContent>
        <HealthCard className="mb-5" />
        <div className="flex flex-col gap-5">
          {loading ? (
            <>
              <ThinkCard.PreviewLoading />
              <ThinkCard.PreviewLoading />
              <ThinkCard.PreviewLoading />
            </>
          ) : (
            thinkIds.health.map((id) => (
              <ThinkCard.Preview thinkId={id} key={id} />
            ))
          )}
        </div>
      </PageContent>
    </>
  );
}
