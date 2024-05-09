"use client";
import { useAppSelector } from "@/hooks/Hooks";
import { auth } from "@/utils/firebase";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { HiOutlineSun } from "react-icons/hi";
import { WITHOUT_AUTH_PUBLIC_NAV } from "@/mock";
import Link from "next/link";
import {
  AnimatedLink,
  AnimatedHeroNav,
  AnimatedHeroHamburger,
} from "@/ui/components/AnimatedButton";
import { cn } from "@/utils/styles";
import { BsCart } from "react-icons/bs";
const c1 = [
  {
    path: "/",
    name: "Branding",
  },
  {
    path: "/",
    name: "Packaging",
  },
  {
    path: "/",
    name: "Branding",
  },
];
const Navbar = ({ toggle }: any) => {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<User | null>();
  const { items } = useAppSelector((s) => s.cart);
  const [isHovered, setIsHovered] = useState(false);
  console.log(path);
  const handleSignOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);
  return (
    <nav className=" bg-white dark:bg-black cursor-pointer h-16 border dark:border-none flex justify-between items-center text-white px-6">
      <ul className="flex gap-4 items-center w-full justify-between h-full">
        <div className="bg-brand_blue-300 w-32 h-10"></div>
        <div className="gap-5 hidden md:flex items-center">
          {WITHOUT_AUTH_PUBLIC_NAV.map((item, index) => (
            <div
              key={index}
              className="flex items-center w-full relative gap-2"
            >
              <AnimatedLink
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="!text-black dark:text-black !bg-none  uppercase flex items-center gap-1"
                href={item.pathname}
                text={item.title}
                showIcon={item.isDropdown}
              />
              {isHovered && item.isDropdown && (
                <motion.div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  initial={{ y: "0%" }}
                  // animate={{ y: isHovered ? "-150%" : "50%" }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    " top-12 -left-2/4  absolute z-50 bg-white py-5 pl-7 pr-5  shadow-md rounded-b-[41px] ",
                    {}
                  )}
                >
                  <div className="flex justify-center w-full gap-5">
                    <Cards arr={c1} text="Product Branding" />
                    <Cards />
                    <Cards />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-brand_blue-300 cursor-pointer  hidden md:flex w-10 h-10 my-3 relative rounded-xl"
          >
            <div className="absolute capitalize flex items-center justify-center bg-black dark:bg-white w-full h-full text-sm rounded-lg -top-1 -left-1">
              <HiOutlineSun
                size={20}
                color={theme === "dark" ? "#000" : "#fff"}
              />
            </div>
          </div>
          {path.includes("/collectibles") ? (
            <Link
              href={"/cart"}
              className="bg-brand_blue-300 z-0 hidden md:flex min-w-10 h-10 my-3 relative rounded-xl"
            >
              <span className="absolute -top-2 z-40 -right-1 h-5 w-5 flex justify-center items-center text-xs rounded-full bg-brand_red-800 font-semibold">
                {items.length}
              </span>
              <div className="absolute dark:text-black text-white capitalize dark:bg-white bg-black w-full rounded-lg flex justify-center items-center h-full text-sm -top-1 -left-1">
                <BsCart size={25} />
              </div>
            </Link>
          ) : (
            <div className="bg-brand_blue-300  hidden md:flex min-w-36 h-10 my-3 relative rounded-xl">
              <div className="absolute capitalize text-sm -top-1 -left-1">
                <AnimatedHeroNav
                  className="bg-black h-10 min-w-36"
                  text="CONTACT US"
                />
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => toggle()}
          className="bg-brand_blue-300 min-w-[46px] flex md:hidden h-10 my-3 relative rounded-xl"
        >
          <div className="absolute capitalize text-sm -top-1 -left-1">
            <AnimatedHeroHamburger className="h-10" />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
interface ICard {
  arr?: {
    path: string;
    name: string;
  }[];
  text?: string;
}
const Cards = ({ arr, text }: ICard) => {
  return (
    <div className="h-56 relative bg-black w-44 rounded-[27px]">
      <div className="h-full text-black bg-brand_blue-300 absolute -top-2 right-2 p-3  w-full rounded-[19px]">
        <h3 className="text-3xl font-extrabold">{text}</h3>

        {text && <div className="w-2/3 mx-auto bg-black h-[1px] my-2" />}
        <div className="flex flex-col gap-2">
          {arr?.map((item, i) => (
            <Link key={i} href={item.path} className="font-semibold">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
