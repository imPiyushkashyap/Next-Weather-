import React from "react";
import Container from "./Container";
import { details } from "./WeatherForcase";
import WeatherIcon from "./WeatherIcon";
import { F2C } from "../utils/fahrenheitTOcelsius";

interface DayWeatherProps extends details {
  weatherIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

export default function DayWeather(props: DayWeatherProps) {
  const {
    weatherIcon = "02d",
    date,
    day,
    temp,
    feels_like,
    temp_min,
    temp_max,
    description,
  } = props;

  return (
    <Container className="gap-4">
      <section className="flex gap-4 items-center px-4">
        <div>
          <WeatherIcon iconName={weatherIcon} />
          <p>{date}</p>
          <p className="text-sm">{day}</p>
        </div>
        <div className="felx flex-col px-4">
          <span className="text-5xl">{F2C(temp ?? 0)} °</span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span>Feels Like</span>
            <span>{F2C(feels_like ?? 0)} °</span>
          </p>
        </div>
       
      </section>
    </Container>
  );
}
