"use client";
import { useAppSelector } from "@/hooks/Hooks";
import ImageWithFallback from "@/utils/Imgwithfallback";
import { auth, db, mydb } from "@/utils/firebase";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { ref } from "firebase/database";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsArrowDown, BsCart } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { HiOutlineSun } from "react-icons/hi";
import { PUBLIC_URLS } from "@/utils/urls";
import { AUTH_NAV, PUBLIC_NAV, WITHOUT_AUTH_PUBLIC_NAV } from "@/mock";
import Link from "next/link";
import Dropdown from "./Dropdown";
import AnimatedButton, { AnimatedLink } from "@/ui/components/AnimatedButton";
import { FaAngleDown } from "react-icons/fa6";
import { cn } from "@/utils/styles";
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
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<User | null>();
  const { items } = useAppSelector((s) => s.cart);
  const [isHovered, setIsHovered] = useState(false);
  console.log(items);
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
    <nav className=" bg-white h-16 border flex justify-between items-center text-white px-6">
      <ul className="flex gap-4 items-center w-full justify-between h-full">
        <div className="bg-brand_blue-300 w-32 h-10"></div>
        <div className="gap-5 flex items-center">
          {WITHOUT_AUTH_PUBLIC_NAV.map((item, index) => (
            <span className="flex items-center w-full relative gap-2">
              <AnimatedLink
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="!text-black !bg-none  uppercase flex items-center gap-1"
                key={index}
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
                    " top-12 -left-2/4 absolute z-50 bg-white p-5  shadow-md rounded-[41px] ",
                    {}
                  )}
                >
                  <div className="flex  gap-5">
                    <Cards arr={c1} text="Product Branding" />
                    <Cards />
                    <Cards />
                  </div>
                </motion.div>
              )}
            </span>
          ))}
        </div>
        <div className="bg-brand_blue-300 min-w-40 h-12 my-3 relative rounded-xl">
          <p className="absolute capitalize text-sm -top-1 -left-1">
            <AnimatedButton className="bg-black" text="CONTACT US" />
          </p>
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
      <div className="h-full text-black bg-brand_blue-300 absolute -top-2 right-2 p-3  w-full rounded-2xl">
        <h3 className="text-3xl font-extrabold">{text}</h3>

        {text && <div className="w-2/3 mx-auto bg-black h-[1px] my-2" />}
        <div className="flex flex-col gap-2">
          {arr?.map((item) => (
            <Link href={item.path} className="font-semibold">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
