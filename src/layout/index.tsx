import React from "react";
import Navigation from "./components/Navigation";
import ImageWithAnimatedText from "./components/Footer";

interface ICommon {
  children: React.ReactNode;
}
const CommonLayout = ({ children }: ICommon) => {
  return (
    <div>
      <Navigation />
      <div className="dark:bg-brand_gray-900 min-h-screen">{children}</div>
    </div>
  );
};

export default CommonLayout;
