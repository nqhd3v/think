import InternalTextDescription from "./description";
import InternalHashtag from "./hashtag";
import InternalLink from "./link";

const InternalText: React.FC = () => <div />;

type TInternalText = typeof InternalText & {
  Link: typeof InternalLink;
  Hashtag: typeof InternalHashtag;
  Description: typeof InternalTextDescription;
};

const Text = InternalText as TInternalText;
Text.Hashtag = InternalHashtag;
Text.Description = InternalTextDescription;
Text.Link = InternalLink;

export default Text;
