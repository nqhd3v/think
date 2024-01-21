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
  const { run, loading } = useRequestData<TThink[]>(
    (lastItem?: string) =>
      $http.get("think", {
        params: { lastItem, category: "life" },
      }),
    {
      onData(data) {
        setData({ cmd: "think", payload: { data, category: "life" } });
      },
      onError({ error, root }) {
        console.log({ error, root });
      },
    }
  );

  return (
    <>
      <title>{title("life", loading)}</title>
      <PageContent>
        <div className="font-writer text-gray-500 text-justify mb-5">
          <p className="mb-3">
            lúc ngồi build trang này mình khá cân nhắc xem có cần trang này hay
            không, đâu đó định hướng của mình là sharing về cuộc sống, work-life
            balance. nhưng sau một hồi suy đi nghĩ lại thì không cần thiết.
          </p>
          <p className="mb-3">
            vì đâu đó, đối với bản thân mình, cuộc sống là mọi thứ, là công
            việc, tình cảm, và sức khoẻ. nói đơn giản, mình nghĩ rằng, công
            việc, tình cảm hay sức khoẻ là những khía cạnh, mảnh ghép của cuộc
            sống, bạn không thể nói rằng ban ngày bạn làm việc và sau khi bạn
            làm việc xong bạn mới sống. đó là lý do tại sao mình khá cân nhắc
            lúc build trang này.
          </p>
          <p>
            thôi thì nó là vậy, ở một góc độ nào đó, nó cũng như trang home,
            trộn lẫn mọi thứ còn lại, thỉnh thoảng có những lúc mình xàm, mình
            không biết để nó vào đâu thì bỏ nó vào mục này :)
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {loading ? (
            <>
              <ThinkCard.PreviewLoading />
              <ThinkCard.PreviewLoading />
              <ThinkCard.PreviewLoading />
            </>
          ) : (
            thinkIds.life.map((id) => (
              <ThinkCard.Preview thinkId={id} key={id} />
            ))
          )}
        </div>
      </PageContent>
    </>
  );
}
