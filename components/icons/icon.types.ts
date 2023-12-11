export interface IIconProps {
  className?: string;
  width?: number;
  height?: number;
  size?: number;
}

export interface IAnimateIconProps {
  active?: boolean;
  side?: TIconSide;
}

export type TIconSide = "top" | "left" | "right" | "bottom";
export const ICON_SIDES: TIconSide[] = [
  "top",
  "right",
  "bottom",
  "left",
  "top",
  "right",
  "bottom",
  "left",
];
