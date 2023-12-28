import { useMemo, useRef } from "react";
import { ITextProps } from "./text.types";
import { motion, useAnimate, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

const InternalTextAnimate: React.FC<ITextProps> = ({ content, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const charsByWords = useMemo(
    () =>
      content.split(" ").map((word, i) => {
        const chars = word.split("").map((char, j) => (
          <span
            className="relative block overflow-hidden w-5 h-10"
            key={`char--${i}--${j}__${char}`}
          >
            <motion.span
              className="absolute"
              variants={{
                initial: { y: "100%" },
                animate: { y: 0 },
              }}
            >
              {char}
            </motion.span>
          </span>
        ));
        return (
          <>
            <span key={`word--${i}`} className="flex no-wrap">
              {chars}
            </span>
            <span className="block w-5 h-10" key={`word--${i}__space`} />
          </>
        );
      }),
    [content]
  );
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      variants={{
        initial: { opacity: 0.8 },
        animate: {
          opacity: 1,
          transition: { duration: 0.8, staggerChildren: 0.1 },
        },
      }}
      animate={isInView ? "animate" : "initial"}
      className={twMerge("flex flex-wrap font-writer", className)}
    >
      {charsByWords}
    </motion.div>
  );
};

export default InternalTextAnimate;
