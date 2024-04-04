import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/styles";
import Image from "next/image";

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
        `group relative  h-40 cursor-pointer  overflow-hidden  lg:w-60`,
        { "lg:border-r": index < 3 || (index > 3 && index < 7) },
        { "lg:border-b": index < 4 }
      )}
    >
      <motion.div
        initial={{ y: "60%" }}
        animate={{ y: isHovered ? "0%" : "60%" }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden z-40 h-full flex justify-end items-center flex-col"
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={80}
          height={80}
          className="w-20 h-20 rounded-lg"
        />

        <p className=" text-white text-center h-2/3 p-2">{textContent}</p>
      </motion.div>
    </div>
  );
};

export default AnimatedHoverLogo;
