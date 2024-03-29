"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/styles";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

interface IProp {
  text?: string;
  href?: string;
  className?: React.LinkHTMLAttributes<HTMLUListElement> | string;
  showIcon?: boolean;
}
interface ILinkProp {
  text?: string;
  href?: string;
  className?: React.LinkHTMLAttributes<HTMLUListElement> | string;
  showIcon?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
const AnimatedButton = ({
  text = "Hello",
  href = "/",
  className,
  showIcon = true,
}: IProp) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={cn(
        `bg-black border-black h-12 min-w-40  flex items-center justify-center rounded-lg relative overflow-hidden ${className}`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="!w-2/6">
        <motion.p
          className="absolute text-white top-0 left-0 right-0 bottom-0 m-auto"
          initial={{ y: "30%", x: "15%" }}
          animate={{ y: isHovered ? "-100%" : "30%", x: "15%" }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.p>
        <motion.p
          className="absolute text-white  top-0 left-0 right-0 bottom-0 m-auto"
          initial={{ y: isHovered ? "30%" : "100%", x: "15%" }}
          animate={{ y: isHovered ? "30%" : "100%", x: "15%" }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.p>
      </div>
      {showIcon && (
        <div className="h-5 w-5 rounded-full bg-slate-400 absolute right-3"></div>
      )}
    </Link>
  );
};

export default AnimatedButton;
export const AnimatedLink = ({
  text = "Hello",
  href = "/",
  className,
  showIcon,
  onMouseEnter,
  onMouseLeave,
}: ILinkProp) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={cn(
        ` border-black   h-12 w-auto  flex items-center justify-center rounded-lg relative overflow-hidden ${className}`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-full"
        onMouseEnter={showIcon ? onMouseEnter : () => console.log("first")}
        onMouseLeave={showIcon ? onMouseLeave : () => console.log("first")}
      >
        <motion.p
          className="  text-black flex m-auto items-center gap-1"
          initial={{ y: "50%" }}
          animate={{ y: isHovered ? "-150%" : "50%" }}
          transition={{ duration: 0.3 }}
        >
          {text}
          {showIcon && <FaChevronDown color="#000" />}
        </motion.p>
        <motion.p
          className=" text-black flex m-auto items-center gap-1"
          initial={{ y: isHovered ? "-50%" : "100%" }}
          animate={{ y: isHovered ? "-50%" : "100%" }}
          transition={{ duration: 0.3 }}
        >
          {text}
          {showIcon && <FaChevronDown color="#000" />}
        </motion.p>
      </div>
    </Link>
  );
};
