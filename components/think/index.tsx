import InternalPreviewThinkCard from "./preview";
import InternalPreviewLoadingThinkCard from "./preview-loading";
import InternalLoadingThinkCard from "./loading";
import InternalThinkCard from "./default";

const ThinkCard = InternalThinkCard as typeof InternalThinkCard & {
  Loading: typeof InternalLoadingThinkCard;
  Preview: typeof InternalPreviewThinkCard;
  PreviewLoading: typeof InternalPreviewLoadingThinkCard;
};
ThinkCard.Loading = InternalLoadingThinkCard;
ThinkCard.Preview = InternalPreviewThinkCard;
ThinkCard.PreviewLoading = InternalPreviewLoadingThinkCard;

export default ThinkCard;
