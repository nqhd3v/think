"use client";
import PageContent from "@/components/page-content";
import ThinkCard from "@/components/think";
import { useThink } from "@/context/think";
import { useRequestData } from "@/hooks/use-request";
import { TThink } from "@/types/think";
import { title } from "@/utils/mapping-data";
import $http from "@/utils/request";

export default function HomePage() {
  const { setData, thinkIds } = useThink();
  const { loading } = useRequestData<TThink[]>(
    (lastItem?: string) =>
      $http.get("think", {
        params: { lastItem },
      }),
    {
      onData(data) {
        setData({ cmd: "think", payload: { data } });
      },
      onError({ error, root }) {
        console.error({ error, root });
      },
    }
  );

  return (
    <>
      <title>{title("", loading)}</title>
      <PageContent>
        <div className="flex flex-col gap-5">
          {loading ? (
            <>
              <ThinkCard.PreviewLoading />
              <ThinkCard.PreviewLoading />
              <ThinkCard.PreviewLoading />
            </>
          ) : (
            thinkIds["~"].map((id) => (
              <ThinkCard.Preview thinkId={id} key={id} />
            ))
          )}
        </div>
      </PageContent>
    </>
  );
}
