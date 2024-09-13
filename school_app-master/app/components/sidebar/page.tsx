"use client"; // Mark this component as a Client Component

import Link from "next/link";

import { SVG } from "@/app/assets/icons";
import { MENU_DATA } from "./menu";

const Sidebar = () => {
  return (
    // <div className="w-64 bg-gray-200 text-customGray font-semibold flex flex-col ">
    <div className="p-2 w-64 bg-[#dddcd7] text-customGray font-semibold flex flex-col h-screen overflow-y-auto no-scrollbar border-r  border-gray-700 fixed top-0 left-0">
      <div className="p-4 pb-0 text-lg font-semibold ">
        <Link
          href="/"
          className="flex items-center"
          style={{ justifyContent: "center" }}
        >
          <SVG.Logo />
        </Link>
      </div>
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {MENU_DATA.map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-4 hover:bg-white rounded-[20px]d`}
            >
              <Link href={`${item.url}`} className="w-full">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="space-y-2 mt-32">
        <div className="border-t  border-gray-500 "></div>
        <li className="flex items-center p-4 hover:bg-white rounded-[20px]">
          <Link href="/#" className="w-full">
            Settings
          </Link>
        </li>
        <li className="flex items-center p-4 hover:bg-white rounded-[20px]">
          <Link href="/#" className="w-full">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
