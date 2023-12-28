import InternalTextAnimate from "./animate";
import InternalTextDescription from "./description";
import InternalHashtag from "./hashtag";
import InternalLink from "./link";
import InternalTextTyping from "./typing";

const InternalText: React.FC = () => <div />;

type TInternalText = typeof InternalText & {
  Link: typeof InternalLink;
  Hashtag: typeof InternalHashtag;
  Description: typeof InternalTextDescription;
  Typing: typeof InternalTextTyping;
  Animate: typeof InternalTextAnimate;
};

const Text = InternalText as TInternalText;
Text.Hashtag = InternalHashtag;
Text.Description = InternalTextDescription;
Text.Link = InternalLink;
Text.Typing = InternalTextTyping;
Text.Animate = InternalTextAnimate;

export default Text;
