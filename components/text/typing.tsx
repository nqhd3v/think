import useKeyboardTyping from "@/hooks/keyboard-typing";
import { twMerge } from "tailwind-merge";
import { ITextTypingProps } from "./text.types";

const InternalTextTyping: React.FC<ITextTypingProps> = ({
  content,
  className,
}) => {
  const [contentRender] = useKeyboardTyping(content);

  return (
    <div className={twMerge("flex", className)}>
      <span>{contentRender}</span>
      <i className="relative block h-7 after:absolute after:content-[''] after:w-2 after:h-1 after:bottom-0 after:ml-1 after:bg-dark-100 dark:after:bg-white" />
    </div>
  );
};

export default InternalTextTyping;
