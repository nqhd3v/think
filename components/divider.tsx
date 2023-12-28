export interface IDividerProps {
  content: string;
}

const Divider: React.FC<IDividerProps> = ({ content }) => {
  return <div className="divider">{content}</div>;
};

export default Divider;
