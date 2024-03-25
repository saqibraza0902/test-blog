"use client";
import CommonLayout from "@/layout";
import React from "react";
import ScrollText from "@/ui/components/ScrollText";
import AnimatedHoverLogo from "@/ui/components/AnimateHoverLogo";
import AnimatedButton from "@/ui/components/AnimatedButton";

const arr = [
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3b9f3e40ff0538797_logo-oppo.svg",
    text: "Designing mobile concepts for a popular brand in electronic products.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e32ce946863b8f8186_logo-udemy.svg",
    text: "Reimagining the video player for courses and overall viewer experience.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3096057f141c8ebcd_logo-jbl.svg",
    text: "Developing a full-stack application as part of the hi-end audio brand's marketing campaign.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e39eb5682b005d667b_logo-creativemarket.svg",
    text: "Online marketplace that provides a platform for creators to buy and sell design assets.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3bff353f4da960f47_logo-seneca.svg",
    text: "Designing a powerful educational platform for effective learning..",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e39174b67fc9938ad1_logo-auth0.svg",
    text: "Using our expertise to boost Auth0 processes.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3e925e907cbc11093_logo-corel.svg",
    text: "Showcasing a future vision for WinZip family products.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e32ce946863b8f8186_logo-udemy.svg",
    text: "Reimagining the video player for courses and overall viewer experience.",
  },
];
const Home = () => {
  return (
    <CommonLayout>
      <div className="mx-auto w-2/3 h-screen flex flex-col justify-center items-center">
        <div className="h-screen flex flex-col gap-10 justify-center items-center">
          <AnimatedButton />
          <ScrollText />
        </div>
      </div>
      <div className="h-screen p-20 flex justify-center items-center bg-brand_blue-600">
        <div className="grid grid-cols-4 grid-rows-2">
          {arr.map((item, index) => (
            <React.Fragment key={index}>
              <AnimatedHoverLogo
                imageSrc={item.img}
                index={index}
                textContent={item.text}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};

export default Home;
