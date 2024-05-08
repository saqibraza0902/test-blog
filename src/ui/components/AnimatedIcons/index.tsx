"use client";
import { cn } from "@/utils/styles";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";

interface IProp {
  className?: any;
  Icon: any;
  IconAlt: any;
  color: string;
}

export const ShareIcon = ({ className, Icon, IconAlt, color }: IProp) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        ` border-black h-10 w-min cursor-pointer flex-nowrap text-nowrap  flex items-center justify-center relative overflow-hidden ${className}`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-10 h-full p-2 flex justify-center transition-all duration-300 items-center  rounded-full ${
          isHovered ? `${color}` : "bg-white border"
        }`}
      >
        <motion.p
          className=""
          initial={{ x: "50%" }}
          animate={{ x: isHovered ? "250%" : "50%" }}
          transition={{ duration: 0.2 }}
        >
          {Icon}
        </motion.p>
        <motion.p
          className=" "
          initial={{ x: "-250%" }}
          animate={{ x: isHovered ? "-50%" : "-250%" }}
          transition={{ duration: 0.2 }}
        >
          {IconAlt}
        </motion.p>
      </div>
    </div>
  );
};
