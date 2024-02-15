import React from "react";
import { GoEye } from "react-icons/go";
import { ImDroplet } from "react-icons/im";
import { MdAir } from "react-icons/md";
import { IoMdSpeedometer } from "react-icons/io";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";

 export interface details {
  visibility: string | number;
  humidity: string;
  windspeed: string;
  sunrise: string
  sunset: string;
  airpressure: string;
}

export interface SingleWeather {
  information: string;
  icon: React.ReactNode;
  value: string;
}

export default function WeatherForecast(props: details) {
  const {
    visibility = "25km",
    humidity = "53%",
    windspeed = "4 km/hr",
    sunrise = "993 hPa",
    sunset = "6:10",
    airpressure = "7:39",
  } = props;
  const visibilityValue =
    typeof visibility === "number" ? visibility.toString() : visibility;
  {
    ("chatgpt");
  }

  return (
    <>
      <>
        <>
          <>
            <SingleWeather
              icon={<GoEye />}
              information="Visibility"
              value={visibilityValue}
            />
          </>
          <>
            <SingleWeather
              icon={<ImDroplet />}
              information="Humidity "
              value={humidity}
            />
          </>
        </>
        <>
          <SingleWeather
            icon={<MdAir />}
            information="Windspeed"
            value={windspeed}
          />
        </>
      </>
      <>
        <SingleWeather
          icon={<IoMdSpeedometer />}
          information="Airpressure"
          value={airpressure}
        />
      </>
      <>
        <SingleWeather
          icon={<WiSunrise />}
          information="Sunrise"
          value={sunrise}
        />
      </>
      <>
        {" "}
        <SingleWeather
          icon={<TbSunset2 />}
          information="Sunset"
          value={sunset}
        />
      </>
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
