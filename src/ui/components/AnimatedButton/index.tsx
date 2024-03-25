"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="bg-white border-black h-12 w-40 flex items-center justify-center border-2 px-4 rounded-xl relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.p
        className="absolute top-0 left-0 right-0 bottom-0 m-auto"
        initial={{ y: "20%" }} // Initially, text is visible
        animate={{ y: isHovered ? "-100%" : "20%" }} // Move text up when hovered
        transition={{ duration: 0.3 }}
      >
        Click Here
      </motion.p>
      <motion.p
        className="absolute top-0 left-0 right-0 bottom-0 m-auto"
        initial={{ y: isHovered ? "20%" : "100%" }}
        animate={{ y: isHovered ? "20%" : "100%" }}
        transition={{ duration: 0.3 }}
      >
        Click Here
      </motion.p>
      <img src="edit.gif" alt="" className="absolute right-1" />
    </button>
  );
};

export default AnimatedButton;
