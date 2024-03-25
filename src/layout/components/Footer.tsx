"use client";
import React from "react";
import { motion } from "framer-motion";

const ImageWithAnimatedText = () => {
  return (
    <div className="group relative transition-all duration-300 w-20 h-20">
      <motion.img
        src="pfp1.png"
        alt="Your Image"
        className="w-full h-full"
        // whileHover={{ scale: 1.1 }} // Animate image scale on hover
      />
      <motion.p
        className="text-container opacity-0 transition-opacity duration-300 hidden group-hover:flex"
        initial={{ opacity: 0 }} // Initial opacity set to 0 to hide text
        animate={{ opacity: 1 }} // Animate opacity when hovered over
        exit={{ opacity: 0 }} // Animate opacity when not hovered over
        transition={{ duration: 0.3 }} // Animation duration
        whileHover={{ scale: 1.1 }} // Animate text scale on hover
      >
        Your Text Here
      </motion.p>
    </div>
  );
};

export default ImageWithAnimatedText;
