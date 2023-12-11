import { twMerge } from "tailwind-merge";
import { ICardContentProps } from "./card.types";

const InternalCardContent: React.FC<ICardContentProps> = ({
  title,
  children,
  className,
  center,
}) => {
  return (
    <div
      className={twMerge(
        "card card__content",
        center && "card__center",
        className
      )}
    >
      <h3 className="think--title mb-2">{title}</h3>
      {children}
    </div>
  );
};

export default InternalCardContent;
