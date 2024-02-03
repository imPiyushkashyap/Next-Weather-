"use client";
import { useQuery } from "react-query";
import axios from "axios";
import Navbar from "./components/Navbar";
import { env } from "process";
import { format, parseISO } from "date-fns";
const Api = "94838bef0a3df79501ca1daf7da28b58";
const Home = () => {
  type WeatherData = {
    cod: string;
    message: number;
    cnt: number;
    list: Array<WeatherEntry>;
    city: {
      id: number;
      name: string;
      coord: {
        lat: number;
        lon: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };
  };

  type WeatherEntry = {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  };

  const { isLoading, error, data } = useQuery<WeatherData>(
    "repoData",
    async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=nahan&appid=${Api}`
      );
      return data;
    }
  );

  if (isLoading)
    return (
      <div className=" items-center justify-center flex min-h-screen">
        <h1 className=" animate-pulse">Loading....</h1>
      </div>
    );
  console.log("data", data);

  const date = data?.list[0]

  return (
    <div className=" flex flex-col gap-6 bg-cyan-300 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 p-4">
        <section>
          <h2 className="text-2xl flex items-end gap-1">
            <p> {format(parseISO(date?.dt_txt ?? ''), "EEEE:")} </p>
            <p>{format(parseISO(date?.dt_txt ?? ''), "dd/MM/yyyy")} </p>
          </h2>
        </section>
        <section></section>
      </main>
    </div>
  );
};

export default Home;
