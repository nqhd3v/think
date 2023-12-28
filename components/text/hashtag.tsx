import { twMerge } from "tailwind-merge";
import { ITextHashtagProps } from "./text.types";

const InternalHashtag: React.FC<ITextHashtagProps> = ({
  content,
  className,
  prefix,
  block,
  onClick,
}) => {
  return (
    <span
      className={twMerge("hashtag", block && "hashtag__block", className)}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {prefix && <span className="hashtag--prefix">{prefix}&nbsp;</span>}
      <span className="hashtag--content">{content}</span>
    </span>
  );
};

export default InternalHashtag;
