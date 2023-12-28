import Header from "@/components/header";
import Text from "@/components/text";

const ThinkViewPage = () => {
  return (
    <>
      <Header.Think />
      <div className="think-page--content think-page--content__top think-page--content__flex">
        <div className="think--paragraph text-justify mb-3">
          viết - viết hết những thứ mình suy nghĩ, có thể nó không giúp mình
          giải quyết vấn đề ngay lập tức, nhưng nó giúp mình sắp xếp mớ hỗn độn
          trong đầu mình, nó giúp mình clear từng vấn đề mà mình gặp phải, và nó
          cũng giúp mình hiểu chính bản thân mình đang muốn gì.
        </div>
        <div className="w-full flex flex-wrap gap-5">
          <div className="relative p-5 w-full sm:w-[calc(50%-10px)] h-32 rounded-md shadow-sm hover:shadow-md shadow-light-400 dark:shadow-dark-940 bg-light-200 dark:bg-dark-100 duration-300">
            <h3 className="think--title">Just a title for my thinking</h3>
            <div className="absolute bottom-5 left-5 flex items-center gap-2">
              <Text.Hashtag content="16/12/2023" block />
              <Text.Hashtag prefix="#" content="love" block />
            </div>
          </div>
          <div className="w-full sm:w-[calc(50%-10px)] h-32 rounded-md shadow-sm hover:shadow-md shadow-light-400 dark:shadow-dark-940 bg-light-200 dark:bg-dark-100 duration-300"></div>
          <div className="w-full sm:w-[calc(50%-10px)] h-32 rounded-md shadow-sm hover:shadow-md shadow-light-400 dark:shadow-dark-940 bg-light-200 dark:bg-dark-100 duration-300"></div>
          <div className="w-full sm:w-[calc(50%-10px)] h-32 rounded-md shadow-sm hover:shadow-md shadow-light-400 dark:shadow-dark-940 bg-light-200 dark:bg-dark-100 duration-300"></div>
        </div>
      </div>
    </>
  );
};

export default ThinkViewPage;
