import React from "react";
import { IoSunnySharp } from "react-icons/io5";
type Props = {};

const Navbar = ({}: Props) => {
  return (
    <nav className=" bg-slate-500 shadow-sm font-serif top-0 left-0 z-50">
      <div className=" h-[80px] w-full  flex justify-between item-center  max-w-6 px-3 mx-auto">
        <p className="flex items-center justify-center gap-2 ">
          <h2 className=" text-gray-800 text-3xl ">Weather</h2>
          <IoSunnySharp className=" text-2xl text-yellow-400" />
        </p>
        <section>
          
        </section>
      </div>
    </nav>
  );
};
export default Navbar;
