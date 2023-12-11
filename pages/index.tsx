import Avatar from "@/components/avatar";
import Button from "@/components/button";
import ArrowRightIcon from "@/components/icons/arrow";
import Text from "@/components/text";
import Head from "next/head";
import { useRouter } from "next/router";

const ThinkIntroPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Thinking · nqhuy</title>
      </Head>
      <section className="relative w-full h-screen flex items-center flex-col justify-center">
        <div className="w-full max-w-[400px]">
          <div className="h-[200px] mb-10">
            <Avatar
              path="/profile.jpg"
              className="m-auto w-[200px] h-[200px]"
              round
              wrap
            />
          </div>
          <h2 className="think--title text-center mb-5">Tớ là Huy Nguyễn!</h2>
          <Text.Description
            content="một đứa trẻ kỳ lạ :>"
            className="text-center"
          />
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="font-writer fond-bold">scroll down</div>

          <ArrowRightIcon.Animate active side="bottom" />
        </div>
      </section>

      <section className="w-full min-h-screen">
        <div className="think-page--content">
          <div className="think--paragraph mb-3">hi mai fen!</div>
          <div className="think--paragraph text-justify mb-3">
            tớ là một đứa dễ bị overthinking. đôi lúc đầu tớ lộn xộn đến mức chả
            nghĩ được gì. những lúc như vậy, tớ muốn tìm một nơi thoáng đãng,
            trống vắng, nơi mà tớ có thể thoải mái ngồi một mình, nhìn mọi thứ
            rồi từ từ suy nghĩ về từng thứ đang chạy trong đầu mình.
          </div>
          <div className="think--paragraph text-justify mb-3">
            và rồi lúc mà tớ vào{" "}
            <Text.Link href="https://geekup.vn" content="GEEK Up" newTab />, ở
            đây, tớ có vài người anh đã truyền cho mình thứ cảm hứng, thay vì
            kiếm một nơi vắng vẻ và tự hiểu nó, thì mình nên có những hoạt động,
            để tự chữa lành, tự thấu hiểu những vấn đề của cá nhân.
          </div>

          <div className="think--paragraph text-justify mb-3">
            viết - viết hết những thứ mình suy nghĩ, có thể nó không giúp mình
            giải quyết vấn đề ngay lập tức, nhưng nó giúp mình sắp xếp mớ hỗn
            độn trong đầu mình, nó giúp mình clear từng vấn đề mà mình gặp phải,
            và nó cũng giúp mình hiểu chính bản thân mình đang muốn gì.
          </div>

          <div className="think--paragraph text-justify mb-3">
            và rồi đó là lúc trang nhật ký của một đứa trẻ như mình ra đời. mình
            không dám nhận mình đã trải qua mọi thứ cảm xúc, nhưng mình nghĩ
            rằng, một ai đó ngoài kia có thể sẽ gặp những câu chuyện mà mình
            từng gặp trong hành trình trưởng thành của mình, và không phải ai
            cũng may mắn để có người bạn đồng hành để hướng dẫn cách tự chữa
            lành chính mình.
          </div>

          <div className="think--paragraph mb-5">
            và sau tất cả, <b>chào bạn đến với trang nhật ký của mình :&gt;</b>
          </div>

          <div className="w-full h-36 flex justify-center items-center">
            <Button
              dashed
              className="font-bold"
              onClick={() => router.push("/think")}
            >
              what I am thinking...
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThinkIntroPage;
