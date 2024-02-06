import React from "react";

type Props = {};

export interface singleWeather {
  information: string;
  icon: React.ReactNode;
  value: string;
}
export default function WeatherForcase({}: Props) {
  return <>WeatherDetail</>;
}

function singleWeather(props: singleWeather) {
  return <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black">
    <p className=" whitespace-nowrap">{props.information}</p>
  </div>;
}
