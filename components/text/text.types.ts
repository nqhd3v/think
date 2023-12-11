export interface ITextProps {
  content: string;
  className?: string;
}

export interface ITextHashtagProps extends ITextProps {
  prefix?: string;
  block?: boolean;
  onClick?: () => void;
}

export interface ITextDescriptionProps extends ITextProps {}

export interface ITextLinkProps extends ITextProps {
  href: string;
  newTab?: boolean;
}
