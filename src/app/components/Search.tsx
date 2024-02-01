import React, { HtmlHTMLAttributes } from "react";
import { MdSearch } from "react-icons/md";

type Props = {
  className? : string
  value: string;
  onchange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onsubmit: React.FormEventHandler<HTMLInputElement> | undefined
};

const Search = (props: Props) => {
  return (
    <form className="flex relative item-center  h-10">
      <input
        className="rounded-md shadow-sm py-4 px-4 bg-slate-500"
        type="text"
        placeholder="Search"
        // onClick={}
        onChange={props.onchange}
        onSubmit={props.onsubmit}
        value={props.value}
      />
      <button>
        <MdSearch className="text-2xl" />
      </button>
    </form>
  );
};

export default Search;
