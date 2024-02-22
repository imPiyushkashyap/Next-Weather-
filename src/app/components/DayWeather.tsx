import React from "react";
import Container from "./Container";
import WeatherForecast, { details } from "./WeatherForcase";
import WeatherIcon from "./WeatherIcon";
import { F2C } from "../utils/fahrenheitTOcelsius";

interface DayWeatherProps extends details {
  weatherIcon: string;
  date: string;
  day: string | any;
  temp: number | any;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

export default function DayWeather(props: DayWeatherProps) {
  const {
    weatherIcon = "02d",
    date = "16/02/2024",
    day = "Friday",
    temp,
    feels_like,
    temp_min,
    temp_max,
    description = props.description,
  } = props;

  return (
    <Container className=" gap-4 bg-gradient-to-r from-color1/5  from-10% to-color2/45 to-90%">
      <section className="flex gap-4 items-center px-4">
        <div className="flex flex-col gap-1 text-center">
          {/* <WeatherIcon iconName={weatherIcon} /> */}
          <p>{date}</p>
          <p className="text-sm">{day}</p>
        </div>
        <div className="felx flex-col px-4">
          <span className="text-4xl">{F2C(temp ?? 0)} °</span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span>Feels Like</span>
            <span>{F2C(feels_like ?? 0)} °</span>
          </p>
          <p className=" capitalize">{}</p>
        </div>
      </section>
      <section className=" overflow-x-auto  flex justify-between gap-4 px-4 w-full pr-10">
        <WeatherForecast {...props} />
      </section>
    </Container>
  );
}
