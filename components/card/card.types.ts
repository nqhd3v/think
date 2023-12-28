import { ReactNode } from "react";

export interface ICardContentProps {
  title: string;
  children: React.ReactElement[] | React.ReactElement;
  className?: string;
  center?: boolean;
}

export interface ICardGroupProps {
  items: {
    title: ReactNode;
    description?: string;
    children: ReactNode | ReactNode[];
  }[];
  className?: string;
}
