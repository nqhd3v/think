import Avatar from "@/components/avatar";
import Beginning from "@/components/beginning";
import ArrowRightIcon from "@/components/icons/arrow";
import Text from "@/components/text";
import Head from "next/head";

const ThinkIntroPage = () => {
  return (
    <>
      <Head>
        <title>Thinking · nqhuy</title>
      </Head>

      {/* <Beginning /> */}

      <section className="relative w-full h-screen flex items-center justify-center">
        <div className="relative w-full max-w-[600px] md:max-w-[700px] flex flex-col md:flex-row-reverse md:items-center md:justify-between">
          <div className="h-[200px] sm:h-[300px] mb-5 md:mb-0">
            <Avatar
              path="/profile.jpg"
              className="m-auto md:m-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
              round
              wrap
            />
          </div>
          <div className="flex items-center md:items-start flex-col md:w-[600px] md:absolute md:z-[2] md:left-0 md:top-1/2 md:-translate-y-1/2">
            <div className="text-2xl font-writer mb-2 ">
              Hi, I am <b>Huy Nguyen</b>
            </div>
            <div className="md:pl-[128px] h-8">
              <Text.Typing
                className="text-xl font-writer"
                content={[
                  "a Web Developer 👨‍💻",
                  "a Runner Pace 8 🏃",
                  "an Animal Lover 🐱",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="font-writer fond-bold">scroll down</div>

          <ArrowRightIcon.Animate active side="bottom" />
        </div>
      </section>

      <section className="w-full min-h-screen">
        <div className="think-page--content">
          <div className="flex items-center">
            <div>
              <Text.Animate
                className="text-4xl"
                content="Something to display as an animation"
              />
            </div>
            <div className=""></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThinkIntroPage;
