import Theme from "@/hooks/theme";
import BulbIcon from "../icons/bulb";
import { useRouter } from "next/router";

export interface IHeaderThinkProps {
  thinkTitle?: string;
}

const InternalThinkHeader: React.FC<IHeaderThinkProps> = ({ thinkTitle }) => {
  const { toggleTheme, theme } = Theme.useTheme();
  const router = useRouter();

  return (
    <div className="fixed top-4 left-1/2 flex items-center justify-between -translate-x-1/2 h-14 w-[calc(100%-24px)] sm:w-[calc(100%-40px)] md:w-[720px] lg:w-[960px]">
      <div className="">
        {thinkTitle ? (
          <div className="text-2xl font-bold">{thinkTitle}</div>
        ) : (
          <div className="text-2xl font-bold font-writer cursor-pointer">
            <span
              className="text-love-600 dark:text-love-400"
              onClick={() => router.push("/")}
            >
              ~
            </span>
            <span className="" onClick={() => router.push("/think")}>
              /think
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <BulbIcon
          on={theme === "light"}
          onToggle={() => toggleTheme()}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default InternalThinkHeader;
