"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import { NavData, WITHOUT_AUTH_PUBLIC_NAV } from "@/mock";
import { auth } from "@/utils/firebase";
import { AnimatedHeroNav, AnimatedLink } from "@/ui/components/AnimatedButton";
interface Props {
  open: boolean;
  close: () => void;
}
const ToggleSidebar = ({ open, close }: Props) => {
  const router = useRouter();
  const user = auth.currentUser;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`fixed inset-y-0 w-full md:w-[50%]  !overflow-hidden z-50 lg:w-[25%]  bg-brand_gray-400 dark:bg-brand_gray-700 transition-transform duration-300 transform flex 
       ${open ? "translate-x-0" : "-translate-x-full"} 
     
      `}
    >
      <div className=" px-4 w-full py-5 space-y-6 rounded-xl">
        <div className="flex items-center justify-end">
          <div className="cursor-pointer" onClick={close}>
            <RxCross1 />
          </div>
        </div>
        <div className="bg-brand_blue-300 flex md:hidden w-36 h-10 my-3 relative rounded-xl">
          <p className="absolute capitalize text-sm -top-1 -left-1">
            <AnimatedHeroNav
              className="bg-black text-white h-10 min-w-36"
              text="CONTACT US"
            />
          </p>
        </div>
        <div className="w-full flex flex-col gap-1">
          {WITHOUT_AUTH_PUBLIC_NAV.map((item, index) => (
            <span
              key={index}
              className="flex items-center px-3 bg-yellow-300 w-full relative gap-2"
            >
              <AnimatedLink
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="!text-black !bg-none  uppercase flex items-center gap-1"
                href={item.pathname}
                text={item.title}
                showIcon={item.isDropdown}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ToggleSidebar;
