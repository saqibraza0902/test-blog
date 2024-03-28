"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface IProp {
  text?: string;
}
const AnimatedButton = ({ text = "HEllo" }: IProp) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="bg-black border-black h-12 min-w-40  flex items-center justify-center rounded-xl relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="!w-2/6">
        <motion.p
          className="absolute text-white top-0 left-0 right-0 bottom-0 m-auto"
          initial={{ y: "25%", x: "-10%" }} // Initially, text is visible
          animate={{ y: isHovered ? "-100%" : "25%", x: "-10%" }} // Move text up when hovered
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.p>
        <motion.p
          className="absolute text-white  top-0 left-0 right-0 bottom-0 m-auto"
          initial={{ y: isHovered ? "25%" : "100%", x: "-10%" }}
          animate={{ y: isHovered ? "25%" : "100%", x: "-10%" }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.p>
      </div>
      <div className="h-5 w-5 rounded-full bg-slate-400 absolute right-3"></div>
      {/* <Image
        src="/edit.gif"
        alt=""
        height={10}
        width={10}
        className="absolute right-1"
      /> */}
    </button>
  );
};

export default AnimatedButton;
