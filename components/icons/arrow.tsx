import { twMerge } from "tailwind-merge";
import {
  IAnimateIconProps,
  ICON_SIDES,
  IIconProps,
  TIconSide,
} from "./icon.types";
import { useMemo } from "react";

const InternalArrowRightIcon: React.FC<IIconProps> = ({
  width,
  height,
  size,
  className,
}) => {
  return (
    <svg
      width={size || width || 512}
      height={size || height || 512}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M388.177 217c20.2 20.2 19.9 53.2-.6 73.7s-53.5 20.8-73.7.6l-190-190c-20.1-20.2-19.8-53.2.7-73.7s53.5-20.8 73.6-.6l190 190Z"
        className="fill-dark-900 dark:fill-light-100"
      />
      <path
        d="M388.264 290.5c20.2-20.2 19.9-53.2-.6-73.7s-53.5-20.8-73.7-.6l-190 190c-20.2 20.2-19.9 53.2.6 73.7s53.5 20.8 73.7.6l190-190Z"
        className="fill-dark-900 dark:fill-light-100"
      />
    </svg>
  );
};

const getDegreeBySide = (
  side: TIconSide,
  defaultSide: TIconSide = "right"
): number => {
  const defaultSideIndex = ICON_SIDES.indexOf(defaultSide);

  const sideToCalc = ICON_SIDES.slice(defaultSideIndex, defaultSideIndex + 4);
  const sideIndex = sideToCalc.indexOf(side);

  return 90 * sideIndex;
};

const InternalArrowRightAnimate: React.FC<IAnimateIconProps> = ({
  active,
  side = "right",
}) => {
  const rotateDeg = useMemo(() => getDegreeBySide(side), [side]);

  return (
    <div
      className={twMerge(
        "arrow-animate",
        `arrow-animate__${side}`,
        active && "arrow-animate__active"
      )}
    >
      <div
        className="arrow-animate--wrapper"
        style={{ transform: `rotate(${rotateDeg}deg)` }}
      >
        <ArrowRightIcon className="arrow-animate--wrapper--item" size={12} />
        <ArrowRightIcon className="arrow-animate--wrapper--item" size={12} />
      </div>
    </div>
  );
};

const ArrowRightIcon =
  InternalArrowRightIcon as typeof InternalArrowRightIcon & {
    Animate: typeof InternalArrowRightAnimate;
  };
ArrowRightIcon.Animate = InternalArrowRightAnimate;

export default ArrowRightIcon;
