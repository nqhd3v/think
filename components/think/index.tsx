import InternalPreviewThinkCard from "./preview";
import InternalPreviewLoadingThinkCard from "./preview-loading";
import InternalLoadingThinkCard from "./loading";
import InternalThinkCard from "./default";
import InternalPrivateVerifyThinkCard from "./private-verify";

const ThinkCard = InternalThinkCard as typeof InternalThinkCard & {
  Loading: typeof InternalLoadingThinkCard;
  Preview: typeof InternalPreviewThinkCard;
  PreviewLoading: typeof InternalPreviewLoadingThinkCard;
  PrivateVerify: typeof InternalPrivateVerifyThinkCard;
};
ThinkCard.Loading = InternalLoadingThinkCard;
ThinkCard.Preview = InternalPreviewThinkCard;
ThinkCard.PreviewLoading = InternalPreviewLoadingThinkCard;
ThinkCard.PrivateVerify = InternalPrivateVerifyThinkCard;

export default ThinkCard;
