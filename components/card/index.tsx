import InternalCardContent from "./card-content";

const InternalCard: React.FC = () => {
  return <></>;
};

type TInternalCard = typeof InternalCard & {
  Content: typeof InternalCardContent;
};

const Card = InternalCard as TInternalCard;
Card.Content = InternalCardContent;

export default Card;
