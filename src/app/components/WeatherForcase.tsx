import React from "react";
import { GoEye } from "react-icons/go";

interface details {
  visibility: string;
  humidity: string;
  windspeed: string;
  sunrise: string;
  sunset: string;
  airpressure: string;
}

export interface SingleWeather {
  information: string;
  icon: React.ReactNode;
  value: string;
}

export default function WeatherForecast(props: details) {
  return (
    <>
      <SingleWeather icon={<GoEye />} information="visibility" value={props.visibility} />
    </>
  );
}

function SingleWeather(props: SingleWeather) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}
