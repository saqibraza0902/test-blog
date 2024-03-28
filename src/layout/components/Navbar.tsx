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

import { useTheme } from "next-themes";
import { HiOutlineSun } from "react-icons/hi";
import { PUBLIC_URLS } from "@/utils/urls";
import { AUTH_NAV, PUBLIC_NAV, WITHOUT_AUTH_PUBLIC_NAV } from "@/mock";
import Link from "next/link";
import Dropdown from "./Dropdown";
import AnimatedButton from "@/ui/components/AnimatedButton";
import { FaAngleDown } from "react-icons/fa6";
const Navbar = ({ toggle }: any) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<User | null>();
  const { items } = useAppSelector((s) => s.cart);

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
        <div className="gap-5 flex">
          {WITHOUT_AUTH_PUBLIC_NAV.map((item, index) => (
            <Link
              className="text-black uppercase flex items-center gap-1"
              key={index}
              href={item.pathname}
            >
              {item.title}
              {item.isDropdown && <FaAngleDown />}
            </Link>
          ))}
        </div>
        <div className="bg-brand_blue-300 min-w-40 h-12 my-3 relative rounded-xl">
          <p className="absolute capitalize text-sm -top-1 -left-1">
            <AnimatedButton text="CONTACT US" />
          </p>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
