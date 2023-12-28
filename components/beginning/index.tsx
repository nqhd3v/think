import { useEffect, useState } from "react";
import begin from "./beginning.module.scss";
import { motion, useAnimation } from "framer-motion";

const Beginning: React.FC<{ onExit?: () => void }> = ({ onExit }) => {
  const [isAnimated, setAnimated] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({
        opacity: 0,
        scale: 2,
        filter: "blur(8px)",
        transition: { duration: 0.5 },
      });
    }, 7000);
    return () => clearTimeout(timeout);
  }, [controls]);

  if (isAnimated) return null;
  const handleExit = () => {
    onExit?.();
    setAnimated(true);
  };

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 1 }}
      className={begin.beginning}
      onAnimationComplete={handleExit}
    >
      <div className="beginning--box">
        <div className="beginning--box--title">
          <span className="beginning--box--title--block"></span>
          <h1>
            HUY NGUYEN
            <span />
          </h1>
        </div>

        <div className="beginning--box--role">
          <div className="beginning--box--role--block" />
          <p>Web Developer</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Beginning;
