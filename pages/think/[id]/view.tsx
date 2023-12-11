import Card from "@/components/card";
import Text from "@/components/text";
import Head from "next/head";

const ViewYourThinkPage = () => {
  return (
    <section>
      <Head>
        <title>My Think</title>
      </Head>
      <div className="think-page--content">
        <div className="think--paragraph">
          <h1>Think Title</h1>
          <div className="think-page--content--info">
            <Text.Hashtag content="08/12/2023" block className="text-sm" />
          </div>

          <div className="think-page--content--sections">
            <div className="think-page--content--sections--section"></div>
          </div>
        </div>
        <Card.Content
          title="tell me your think"
          className="max-w-[400px] m-auto"
          center
        >
          <div className="w-full h-28 rounded bg-gray-400" />
        </Card.Content>
      </div>
    </section>
  );
};

export default ViewYourThinkPage;
