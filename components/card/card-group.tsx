import { twMerge } from "tailwind-merge";
import { ICardGroupProps } from "./card.types";
import { useMemo } from "react";
import { motion } from "framer-motion";

const InternalCardGroup: React.FC<ICardGroupProps> = ({ items, className }) => {
  const animateItems = useMemo(() => {
    return items.map((item) => (
      <motion.div
        initial={{ top: 20, opacity: 0.2 }}
        key={item.title}
      ></motion.div>
    ));
  });

  return <div className={twMerge("flex", className)}></div>;
};

export default InternalCardGroup;
