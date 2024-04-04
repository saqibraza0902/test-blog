"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
const Content =
  "For 10 years since our foundation in Ukrain, We've been perfection our Design & Developement game and eager to help passionate founders perfect theirs.Success is a team play, right? Let's aim for the top together!.";

const ParagraphComponent = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.2"],
  });

  const words = Content.split(" ");

  return (
    <div>
      <div>
        <p
          ref={element}
          className="flex flex-wrap text-white leading-none justify-start   "
        >
          {words.map((word, idx) => {
            const start = idx / words.length;
            const end = start + 1 / words.length;

            /* const opacity = useTransform(scrollYProgress, [start, end], [0, 1]); */
            const char = word.split("");
            const amount = end - start;
            const step = amount / char.length;
            return (
              <span
                key={idx}
                className={`mr-2  lg:mt-2 leading-10 font-semibold lg:text-6xl md:text-4xl text-xl ${
                  idx === 0 ? " ml-40" : ""
                }`}
              >
                {/* ------Character Map */}
                {char.map((ch, idx) => {
                  const cstart = start + step * idx;
                  const cend = start + step * (idx + 1);
                  const opacity = useTransform(
                    scrollYProgress,
                    [cstart, cend],
                    [0, 1]
                  );

                  return (
                    <span className="relative" key={idx}>
                      <span className="absolute opacity-30">{ch}</span>
                      <motion.span
                        key={idx}
                        style={{ opacity }}
                        transition={{ duration: 2 }}
                      >
                        {ch}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ParagraphComponent;
