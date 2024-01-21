"use client";
import Github from "@/components/icons/github";
import LinkedIn from "@/components/icons/linkedin";
import Mail from "@/components/icons/mail";
import PageContent from "@/components/page-content";
import ThinkCard from "@/components/think";
import { useThink } from "@/context/think";
import { useRequestData } from "@/hooks/use-request";
import { TThink } from "@/types/think";
import { title } from "@/utils/mapping-data";
import $http from "@/utils/request";

export default function WorkPage() {
  const { setData, thinkIds } = useThink();
  const { run, loading } = useRequestData<TThink[]>(
    (lastItem?: string) =>
      $http.get("think", {
        params: { lastItem, category: "work" },
      }),
    {
      onData(data) {
        setData({ cmd: "think", payload: { data, category: "work" } });
      },
      onError({ error, root }) {
        console.log({ error, root });
      },
    }
  );

  return (
    <>
      <title>{title("work", loading)}</title>
      <PageContent>
        <div className="font-writer text-gray-500 text-justify mb-5 select-none">
          <p className="mb-3">
            ở trong scope của trang này, mình chỉ đơn giản là sharing về công
            việc, cũng như cách handle công việc của bản thân. còn nếu bạn muốn
            xem về một số dự án cá nhân của mình
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center border border-[#24292f] bg-transparent hover:bg-[#24292f] group duration-300 cursor-pointer"
              onClick={() => window.open("https://github.com/nqhd3v", "_blank")}
            >
              <Github
                size={20}
                className="group-hover:fill-white duration-300"
              />
            </div>
            <div className="w-10 sm:w-20 relative h-8 after:absolute after:content-[''] after:w-full after:h-px after:top-1/2 after:left-0 after:-translate-y-1/2 after:bg-dark-100" />
            <span className="text-sm">hoặc gửi tin nhắn </span>
            <span className="hidden sm:block text-sm">cho mình</span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center border border-light-700 hover:bg-light-700 group duration-300 cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/nqhd3v", "_blank")
              }
            >
              <LinkedIn
                size={20}
                className="fill-light-700 group-hover:fill-white"
              />
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center border border-love-500 hover:bg-love-500 group duration-300 cursor-pointer"
              onClick={() => window.open("mailto:nqh.d3v@gmail.com", "_blank")}
            >
              <Mail
                size={20}
                className="fill-love-500 group-hover:fill-white"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {loading ? (
            <>
              <ThinkCard.PreviewLoading />
              <ThinkCard.PreviewLoading />
              <ThinkCard.PreviewLoading />
            </>
          ) : (
            thinkIds.work.map((id) => (
              <ThinkCard.Preview thinkId={id} key={id} />
            ))
          )}
        </div>
      </PageContent>
    </>
  );
}
