import InternalInputLine from "./line";
import InternalInputParagraph from "./paragraph";

const Input = InternalInputLine as typeof InternalInputLine & {
  Paragraph: typeof InternalInputParagraph;
};
Input.Paragraph = InternalInputParagraph;

export default Input;
