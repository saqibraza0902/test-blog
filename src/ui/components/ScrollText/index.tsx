import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

const ScrollText = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      console.log("Pos", scrollPosition);
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 27;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const generateColor = (index: number) => {
    if (scrollProgress >= index / 100) {
      return theme === "dark" ? "white" : "black";
    } else {
      return "gray";
    }
  };

  const text =
    "For 10 years since our foundation in   Ukraine, we’ve been perfecting our Design & Development game and are eager to help passionate Founders perfect theirs. Success is a team play, right? Let’s aim for the top together!. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

  return (
    <p className="">
      {text.split("").map((letter, index) => (
        <span
          className="text-3xl  font-SuisseSemiBold"
          key={index}
          style={{ color: generateColor(index) }}
        >
          {letter}
        </span>
      ))}
    </p>
  );
};

export default ScrollText;
