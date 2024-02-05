import React from "react";
import Image from "next/image";
import { cn } from "../utils/cn";
type Props = {};

const WeatherIcon = (
  props: React.HTMLProps<HTMLDivElement> & { iconName: String }
) => {
  return (
    <div {...props}className={cn("relative h-20 w-20")}>
      <Image
        width={100}
        height={100}
        alt="weather icon"
        className="h-full absolute w-full"
        src={`https://openweathermap.org/img/wn/${props.iconName}/10d.png`}
      />
    </div>
  );
};

export default WeatherIcon;
