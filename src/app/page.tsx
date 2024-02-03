"use client";
import { useQuery } from "react-query";
import axios from "axios";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import { format, parseISO } from "date-fns";
import { F2C } from "./utils/fahrenheitTOcelsius";

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
      <div className="items-center justify-center flex min-h-screen bg-slate-300">
        <h1 className="animate-pulse text-2xl text-black">Loading....</h1>
      </div>
    );

  console.log("data", data);

  const firstData = data?.list[0];

  return (
    <div className="flex flex-col gap-6 bg-cyan-300 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 p-4">
        <section>
          <h2 className="text-2xl flex items-end gap-1">
            <p>{format(parseISO(firstData?.dt_txt ?? ""), "EEEE:")}</p>
            <p>{format(parseISO(firstData?.dt_txt ?? ""), "dd/MM/yyyy")}</p>
          </h2>
        </section>
        <section>
          <Container className="gap-10 px-6 items-center">
            <div className="flex flex-row px-4 text-lg">
              <span>{F2C(firstData?.main.temp ?? 0)}°C</span>
              {/* <p className=" space-y-3 text-xs space-x-1 whitespace-nowrap">
                <span>Feels like</span>
                <span>{F2C(firstData?.main.feels_like ?? 0)}°C</span>
              </p> */}
            </div>
            <div className=""></div>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Home;
