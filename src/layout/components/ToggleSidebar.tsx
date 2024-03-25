import React from "react";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import { NavData } from "@/mock";
import { auth } from "@/utils/firebase";
interface Props {
  open: boolean;
  close: () => void;
}
const ToggleSidebar = ({ open, close }: Props) => {
  const router = useRouter();
  const user = auth.currentUser;

  return (
    <div
      className={`fixed inset-y-0 w-full md:w-[50%]  !overflow-hidden z-50 lg:w-[25%]  bg-brand_gray-400 dark:bg-brand_gray-700 transition-transform duration-300 transform flex 
       ${open ? "translate-x-0" : "-translate-x-full"} 
       ${user ? "flex" : "hidden"}
      `}
    >
      <div className=" px-4 w-full py-5 space-y-6 rounded-xl">
        <div className="flex items-center justify-end">
          <div className="cursor-pointer" onClick={close}>
            <RxCross1 />
          </div>
        </div>

        <div className="w-full">
          {NavData.map((el, index) => {
            if (el.title) {
              return (
                <ul key={index} className="flex w-full items-center gap-5">
                  <li
                    onClick={() => router.push(el.pathname)}
                    className="flex py-3 w-full cursor-pointer px-3 rounded-lg my-1 bg-brand_green-200 dark:bg-brand_green-600"
                    key={index}
                  >
                    {el.title}
                  </li>
                </ul>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default ToggleSidebar;
