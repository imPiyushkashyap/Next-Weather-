import React from "react";
import { IoSunnySharp } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import Search from "./Search";
type Props = {};

const Navbar = ({}: Props) => {
  return (
    <nav className="flex bg-slate-200 shadow-sm sticky  font-serif top-0 left-0 z-50">
      <div className=" h-[80px] w-full  flex justify-between item-center  max-w-6 px-3 mx-auto">
        <p className="flex absolute top-0 left-7 mx-6 my-5 gap-2 ">
          <h2 className=" text-gray-800 text-3xl ">Weather</h2>
          <IoSunnySharp className="flex text-2xl mt-1 text-yellow-400" />
        </p>
        <section className=" absolute top-0  right-20 mx-6 my-5 flex items-center gap-2">
          <FaLocationCrosshairs className=" text-2xl text-gray-700 cursor-pointer hover:opacity-55" />
          <IoLocationSharp className="flex text-2xl text-gray-700 cursor-pointer hover:opacity-55" />
          <p className="text-md text-gray-800">India</p>
          <div>
            <Search value={""} onchange={undefined} onsubmit={undefined} />
          </div>
        </section>
      </div>
    </nav>
  );
};
export default Navbar;
