"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/Hooks";
import { auth } from "@/utils/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { HiOutlineSun } from "react-icons/hi";
import { WITHOUT_AUTH_PUBLIC_NAV } from "@/mock";
import Link from "next/link";
import { AnimatedLink, ButtonLayout } from "@/ui/components/animated-button";
import { cn } from "@/utils/styles";
import { BsCart } from "react-icons/bs";
import { PUBLIC_URLS } from "@/utils/urls";
import { get_collectibles, services_title } from "@/utils/function";
import Image from "next/image";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { addservices } from "@/redux/slices/services-slices";
import ContactIcon from "@/ui/icons/contact-icon";

const Navbar = ({ toggle }: any) => {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<User | null>();
  const { items } = useAppSelector((s) => s.cart);
  const [isHovered, setIsHovered] = useState(false);
  const [collectibles, setCollectibles] = useState([]);
  const dispatch = useAppDispatch();
  const { services } = useAppSelector((s) => s.services);
  useEffect(() => {
    const gettitles = async () => {
      const data = await services_title();
      const mydata = await get_collectibles("");
      setCollectibles(mydata?.data);
      dispatch(addservices(data));
    };
    gettitles();
  }, [dispatch]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);
  return (
    <nav className="px-6 lg:px-14 py-3 lg:py-1 border bg-white  dark:bg-black cursor-pointer dark:border-none flex justify-between items-center text-white">
      <div className="2xl:w-11/12 2xl:mx-auto w-full">
        <ul className="flex gap-4 items-center w-full justify-between h-full">
          <Link href={PUBLIC_URLS.HOME} className=" w-32 h-10">
            <Image
              src={theme === "dark" ? "/icons/logo-w.svg" : "/icons/logo.svg"}
              alt="logo"
              height={40}
              width={128}
            />
          </Link>
          <div className="gap-5 hidden md:flex items-center">
            {WITHOUT_AUTH_PUBLIC_NAV?.map((item, index) => {
              const isCollectiblesEmpty =
                item?.pathname === PUBLIC_URLS.COLLECTIBLES &&
                collectibles?.length === 0;
              return (
                <div
                  key={index}
                  className="flex items-center w-full relative gap-2"
                >
                  <AnimatedLink
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    iconColor="!dark:text-[#fff] !text-black"
                    className={cn(
                      `text-black dark:text-black !bg-none  uppercase flex items-center gap-1`,
                      {
                        hidden: isCollectiblesEmpty,
                      }
                    )}
                    href={item.pathname}
                    text={item.title}
                    showIcon={item.isDropdown}
                  />
                  {isHovered && item.isDropdown && (
                    <motion.div
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      initial={{ y: "0%" }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        " top-12 -left-2/4  absolute z-50 dark:bg-black bg-white py-5 pl-7 pr-5  shadow-md rounded-b-[41px] ",
                        {}
                      )}
                    >
                      <div className="flex justify-center w-full gap-5">
                        {services.map((el, i) => {
                          return <Cards item={el} key={i} />;
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex gap-5 items-center">
            <div
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-black  max-h-11  dark:bg-primary cursor-pointer  hidden md:flex w-11 h-11 my-3 justify-center items-center rounded-lg"
            >
              <HiOutlineSun
                size={20}
                color={theme === "dark" ? "#000" : "#fff"}
              />
            </div>
            {path.includes(PUBLIC_URLS.COLLECTIBLES) ? (
              <Link
                href={PUBLIC_URLS.CART}
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
              <div className="hidden md:flex">
                <Link href={PUBLIC_URLS.CONTACT}>
                  <ButtonLayout
                    Icon={<ContactIcon />}
                    className="dark:bg-primary max-h-11  dark:text-black bg-black text-white"
                  >
                    Contact Us
                  </ButtonLayout>
                </Link>
              </div>
            )}
          </div>
          <div
            onClick={() => toggle()}
            className="p-1 rounded-lg bg-black flex md:hidden dark:bg-primary"
          >
            <HiBars3BottomLeft
              size={25}
              color={theme === "dark" ? "#000" : "#fff"}
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
interface ICard {
  item: {
    title: string;
    icon: string;
    sub_services: {
      title: string;
      url: string;
    }[];
  };
}
const Cards = ({ item }: ICard) => {
  return (
    <div className="min-h-72  relative bg-secondary  w-52 rounded-[27px]">
      <div className="h-full text-black bg-primary absolute -top-2 right-2 p-3 w-full rounded-[19px]">
        <Image
          src={item.icon}
          alt=""
          className="bg-black rounded-xl p-1 mb-3"
          width={50}
          unoptimized
          height={50}
        />
        <span className="text-2xl !font-SuisseBold">{item.title}</span>

        {item?.title && <div className="w-2/3 mx-auto bg-black h-[1px] my-2" />}
        <div className="flex flex-col gap-2">
          {item?.sub_services?.map((subItem, i) => (
            <Link
              key={i}
              href={`${PUBLIC_URLS.SERVICES}/${subItem.url}`}
              className="font-SuisseMedium !transition-all !duration-300  hover:text-brand_green-700"
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
