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
      <div className="bg-[#f7d3ff] px-28 h-screen flex flex-col justify-center items-center">
        <div className=" py-10 h-full flex gap-14 ">
          <div className="w-[700px] bg-black  rounded-[60px] h-full relative ">
            <div className="w-full flex flex-col justify-center items-center bg-[#01c3ff] p-10 h-full absolute -top-5 -left-5 rounded-[40px] ">
              <p className="font-extrabold z-40 text-[80px] leading-[100px] text-black uppercase ">
                Let's Build the next big thing
              </p>
              <div className="flex w-full gap-7 items-center">
                <p className="font-bold w-[20xp] text-[70px] text-black uppercase ">
                  7Y
                </p>
                <p className="font-bold w-3/6 text-xl  text-black uppercase ">
                  Of test driven production development
                </p>
                <p className="w-1/6  text-black uppercase ">
                  <AnimatedButton text="LET'S TALK" />
                </p>
              </div>
            </div>
          </div>
          <div className="w-[350px] bg-black  rounded-[60px] h-full relative ">
            <div className="w-full flex  justify-center items-end gap-1 bg-[#01c3ff] p-10 h-full absolute -top-5 -left-5 rounded-[40px] ">
              {[0, 1, 2].map((i) => (
                <div className="h-5 w-5 rounded-full bg-white"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
