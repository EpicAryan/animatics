"use client";

import { cn } from "@/lib/utils";
import useMousePosition from "@/hooks/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./MaskCursor.module.scss";

const MaskCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered?300:40
  return (
    <main className={cn("h-[100vh] relative", styles.main)}>
      <motion.div
        className={cn(
          "w-full h-full absolute flex items-center justify-center text-neutral-900 text-xl md:text-4xl lg:text-6xl leading-6 md:leading-10 lg:leading-[60px] cursor-default bg-[#ec4e39]",
          styles.mask
        )}
        animate={{
          WebkitMaskPosition: `${x!-size*2}px ${y!-size/2-40}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5,
        }}
      >
        <p 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full md:w-4/5 p-10"
          >
          A visual designer - with skills that haven&apos;t been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      <div className="flex justify-center items-center text-[#afa18f] text-xl md:text-4xl lg:text-6xl leading-6 md:leading-10 lg:leading-[60px] cursor-default w-full h-full">
        <p className="w-full md:w-4/5 p-10">
          I&apos;m a <span className="text-[#ec4e39]">selectively skilled</span>{" "}
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </main>
  );
};

export default MaskCursor;
