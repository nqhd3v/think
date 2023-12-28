import { useEffect } from "react";
import useStates from "./use-states";

interface IKeyboardTypingStates {
  contentRendering: string;
}

const useKeyboardTyping = (items: string[], period = 2000) => {
  const [{ contentRendering }, setStates] = useStates<IKeyboardTypingStates>({
    contentRendering: "",
  });
  let loopNum = 0;
  let isDeleting = false;
  let contentRendered = "";

  const typing = () => {
    const itemIndex = loopNum % items.length;
    const item = items[itemIndex];
    const newContentRendered = isDeleting
      ? item.substring(0, contentRendered.length - 1)
      : item.substring(0, contentRendered.length + 1);

    setStates({ contentRendering: newContentRendered });
    let delta = isDeleting
      ? 100 - Math.random() * 50
      : 200 - Math.random() * 100;
    if (!isDeleting && newContentRendered === item) {
      delta = period;
      isDeleting = true;
    } else if (isDeleting && newContentRendered === "") {
      isDeleting = false;
      loopNum += 1;
      delta = 500;
    }
    return setTimeout(() => {
      contentRendered = newContentRendered;
      typing();
    }, delta);
  };

  useEffect(() => {
    const timer = typing();
    return () => clearTimeout(timer);
  }, []);

  return [contentRendering];
};

export default useKeyboardTyping;
