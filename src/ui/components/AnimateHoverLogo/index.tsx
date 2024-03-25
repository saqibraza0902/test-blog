import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/styles";

interface IProp {
  imageSrc: string;
  altText?: string;
  textContent: string;
  index?: number;
}
const AnimatedHoverLogo = ({
  imageSrc,
  altText = "",
  textContent,
  index = 0,
}: IProp) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        `group relative  h-40 cursor-pointer  overflow-hidden w-60`,
        { "border-r": index < 3 || (index > 3 && index < 7) },
        { "border-b": index < 4 }
      )}
    >
      <motion.div
        initial={{ y: "58%" }}
        animate={{ y: isHovered ? "0%" : "58%" }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden z-40 h-full flex justify-end items-center flex-col"
      >
        <img src={imageSrc} alt={altText} className="w-20 h-20 rounded-lg" />

        <p className=" text-white text-center h-2/3">{textContent}</p>
      </motion.div>
    </div>
  );
};

export default AnimatedHoverLogo;
