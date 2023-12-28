import TextArea from "rc-textarea";
import { ITextAreaProps } from "./input.types";

const InternalInputParagraph: React.FC<ITextAreaProps> = (props) => {
  return <TextArea {...props} />;
};

export default InternalInputParagraph;
