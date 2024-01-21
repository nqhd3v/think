"use client";
import Command from "@/components/command";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function IntroducePage() {
  const router = useRouter();

  return (
    <div className="w-[calc(100%-40px)] md:max-w-[800px] m-auto pt-20">
      <Command cmd="intro" />
      <div className="font-writer text-gray-500 text-justify mb-5">
        <p className="mb-3">
          đôi lúc, đối với mình, điều tồi tệ nhất là lúc mà mọi thứ trong đầu
          mình hỗn loạn, trộn lẫn với nhau. Và mình chọn viết ra hết thảy những
          suy nghĩ đó, nó không giúp mình giải quyết vấn đề ngay lập tức, nhưng
          đâu đó giúp mình clear vấn đề, giúp mình hiểu rõ mình muốn gì và cần
          gì.
        </p>

        <p>
          đến với trang này, nó là suy nghĩ, là cách nhìn nhận cuộc sống của bản
          thân mình. đâu đó bạn sẽ thấy nó thật kỳ lạ. nhưng kệ đi ha, ai cũng
          có một hành trình trưởng thành riêng của bản thân, phần nào đó nó
          khiến góc nhìn mỗi người khác nhau, mình chỉ đơn giản là muốn ghi lại
          cách mà mình suy nghĩ qua từng giai đoạn mà thôi.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-3 mb-5">
        <div
          className="rounded-lg px-3 py-2 border-2 text-light-500 hover:text-dark-100 border-light-500 hover:border-dark-100 duration-300 cursor-pointer font-ubuntu text-sm"
          onClick={() => router.push("/")}
        >
          read my stories
        </div>
        <div
          className="relative py-2 border-2 border-transparent cursor-pointer flex items-center justify-start pr-5 group text-light-500 hover:text-dark-100 duration-300"
          onClick={() => router.push("/")}
        >
          <span className="font-ubuntu text-sm">tell me about your story</span>
          <ArrowRightOutlined className="absolute top-1/2 -translate-y-1/2 right-0 text-sm group-hover:-right-3 duration-300 text-light-500 group-hover:text-dark-100" />
        </div>
      </div>

      <div className="font-writer text-gray-500 text-justify">
        <p className="mb-3">
          kể mình nghe về câu chuyện nào đó của bạn, hoặc chỉ đơn giản là share
          góc nhìn của bạn về mình, mình thật sự cảm thấy biết ơn khi có một ai
          đó muốn giúp mình tốt hơn...
        </p>
      </div>
    </div>
  );
}
