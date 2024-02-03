import React from "react";
import { cn } from "../utils/cn";

const Container = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        " bg-slate-100 w-full rounded-lg shadow-xl flex p-4",
        props.className
      )}
    />
  );
};

export default Container;
