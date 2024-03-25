"use client";
import React, { useEffect, useState } from "react";
import ToggleSidebar from "./ToggleSidebar";
import Navbar from "./Navbar";
import { auth } from "@/utils/firebase";

const Navigation = () => {
  const [isOpen, setisOpen] = useState(false);
  const [mount, setMount] = useState(false);

  const toggleSideBar = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    setMount(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setisOpen(false);
      }
    });

    return () => unsubscribe();
  }, [isOpen]);
  if (!mount) {
    return null;
  }
  return (
    <div>
      <Navbar toggle={toggleSideBar} />
      <ToggleSidebar close={toggleSideBar} open={isOpen} />
    </div>
  );
};

export default Navigation;
