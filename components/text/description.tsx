import { twMerge } from "tailwind-merge";
import { ITextDescriptionProps } from "./text.types";

const InternalTextDescription: React.FC<ITextDescriptionProps> = ({
  content,
  className,
}) => {
  return <div className={twMerge("description", className)}>{content}</div>;
};

export default InternalTextDescription;
