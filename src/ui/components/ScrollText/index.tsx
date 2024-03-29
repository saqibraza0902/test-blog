import React, { useState, useEffect } from "react";

const ScrollText = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      console.log("Pos", scrollPosition);
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 10;

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
    "For 10 years since our foundation in   Ukraine, we’ve been perfecting our Design & Development game and are eager to help passionate Founders perfect theirs. Success is a team play, right? Let’s aim for the top together!. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

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
