import React from "react";
import { MdSearch } from "react-icons/md";
import { cn } from "../utils/cn";

type Props = {
  className?: string;
  value: string;
  onchange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onsubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

const Search = (props: Props) => {
  return (
    <form onSubmit={props.onsubmit} className={cn("flex relative item-center  h-10 ", props.className)}>
      <input
        className="rounded-md shadow-sm py-4 px-4 bg-slate-500"
        type="text"
        placeholder="Search"
        onChange={props.onchange}
        value={props.value}
      />
      <button>
        <MdSearch className="text-2xl" />
      </button>
    </form>
  );
};

export default Search;
