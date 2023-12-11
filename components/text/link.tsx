import Link from "next/link";
import { ITextLinkProps } from "./text.types";

const InternalLink: React.FC<ITextLinkProps> = ({ href, content, newTab }) => {
  return (
    <Link className="link" href={href} target={newTab ? "_blank" : "_self"}>
      {content}
    </Link>
  );
};

export default InternalLink;
