import React, { useState, useEffect } from "react";

const ScrollText = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      console.log("Pos", scrollPosition);
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 5;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const generateColor = (index: number) => {
    if (scrollProgress >= index / 100) {
      return "black"; // Change color to white for scrolled area
    } else {
      return "gray"; // Change color to gray for remaining area
    }
  };

  const text =
    "For 10 years since our foundation in   Ukraine, we’ve been perfecting our Design & Development game and are eager to help passionate Founders perfect theirs. Success is a team play, right? Let’s aim for the top together!";

  return (
    <p className="">
      {text.split("").map((letter, index) => (
        <span key={index} style={{ color: generateColor(index) }}>
          {letter}
        </span>
      ))}
    </p>
  );
};

export default ScrollText;
