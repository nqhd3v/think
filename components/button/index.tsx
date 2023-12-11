import { twMerge } from "tailwind-merge";
import { IButtonProps } from "./button.types";

const InternalButton: React.FC<IButtonProps> = ({
  children,
  className,
  block,
  dashed,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        "btn",
        block && "btn__block",
        dashed && "btn__dashed",
        className
      )}
      onClick={() => onClick?.()}
    >
      <span className="btn--content">{children}</span>
    </button>
  );
};

const Button = InternalButton as typeof InternalButton;

export default Button;
