"use client";
import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import Search from "./Search";
import axios from "axios";

type Props = {};

const Navbar = ({}: Props) => {
  const [city, setCity] = React.useState("");
  const [error, setError] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const [show, setShow] = React.useState(false);

  async function handleInputChange(value: string) {
    setCity(value);
    if (value.length >= 3) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=94838bef0a3df79501ca1daf7da28b58`
        );
        const suggestions = response.data.list.map((item: any) => item.name);
        setSuggestions(suggestions);
        setError("");
        setShow(true);
      } catch (error) {}
      setSuggestions([]);
      setShow(false);
    } else {
      setSuggestions([]);
      setShow(false);
    }
  }

  function SuggestionsBox({
    show,
    suggestions,
    handleSuggestionsClick,
    error,
  }: {
    show: boolean;
    suggestions: string[];
    handleSuggestionsClick: (item: string) => void;
    error: string;
  }) {
    return (
      <>
        <ul className="mb-4 bg-slate-50 absolute border top-[44px] border-gray-300 rounded-md min-w-[200px] flex flex-col gap-1 py-2 px-2">
          <li className=" cursor-pointer p-1 rounded hover:bg-slate-200"></li>
        </ul>
      </>
    );
  }

  return (
    <nav className="flex bg-gradient-to-r from-color1 to-color2 shadow-sm sticky  font-serif top-0 left-0 z-50">
      <div className=" h-[80px] w-full  flex justify-between item-center  max-w-6 px-3 mx-auto">
        <p className="flex absolute top-0 left-7 mx-6 my-5 gap-2 ">
          <h2 className=" text-gray-800 text-3xl">Weather</h2>
        </p>
        <section className=" absolute top-0  right-20 mx-6 my-5 flex items-center gap-2">
          <FaLocationCrosshairs className=" text-2xl text-gray-700 cursor-pointer hover:opacity-55" />
          <IoLocationSharp className="flex text-2xl text-gray-700 cursor-pointer hover:opacity-55" />
          <p className="text-md text-gray-800">India</p>
          <div className="relative ">
            <Search
              value={city}
              onchange={(e) => handleInputChange(e.target.value)}
              onsubmit={undefined}
            />
            <SuggestionsBox show={false} suggestions={[]} handleSuggestionsClick={function (item: string): void {
              throw new Error("Function not implemented.");
            } } error={""} />
          </div>
        </section>
      </div>
    </nav>
  );
};
export default Navbar;
