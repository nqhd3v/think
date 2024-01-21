import { twMerge } from "tailwind-merge";

const PageContent: React.FC<{
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "w-[calc(100%-40px)] md:max-w-[800px] m-auto py-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageContent;
