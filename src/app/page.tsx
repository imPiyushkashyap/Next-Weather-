"use client"
import { useQuery } from "react-query";
import axios from "axios";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
// import WeatherIcon from "./components/WeatherIcon";
import { format, fromUnixTime, parseISO } from "date-fns"; // Added parseISO
import { F2C } from "./utils/fahrenheitTOcelsius";
import WeatherForecast from "./components/WeatherForcase";
import { metersToKilometers } from "./utils/mtrTOkm";
import DayWeather from "./components/DayWeather";

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
      iconName: String;
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

  const uniqueData = [
    ...new Set(
      data?.list.map((entry) => new Date(entry.dt * 1000).toISOString().split("T")[0])
    )
  ]; //chatgpt

  const firstData = data?.list[0];

  return (
    <div className="flex flex-col gap-6 bg-cyan-300 min-h-screen ">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 p-4">
        <section>
          <h2 className="text-2xl flex items-end gap-1">
            <p>{format(parseISO(firstData?.dt_txt ?? ""), "EEEE:")}</p>
            <p>{format(parseISO(firstData?.dt_txt ?? ""), "dd/MM/yyyy")}</p>
          </h2>
        </section>
        <section className="snap-x">
          <Container className="snap-center gap-10 px-6 items-center">
            <div className="flex flex-row px-4 text-lg">
              <span>{F2C(firstData?.main.temp ?? 0)}°C</span>
              {/* <p className=" space-y-3 text-xs space-x-1 whitespace-nowrap">
                <span>Feels like</span>
                <span>{F2C(firstData?.main.feels_like ?? 0)}°C</span>
              </p> */}
            </div>
            <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
              {data?.list.map((d, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between gap-2 items-center text-xs font-semibold"
                >
                  <p className=" whitespace-nowrap">
                    {format(parseISO(d.dt_txt), "h:mm a")}
                  </p>
                  <p>{F2C(firstData?.main.temp ?? 0)} °c</p>
                  {/* <WeatherIcon iconName={d.weather[0].icon}/> */}
                </div>
              ))}
            </div>
          </Container>
        </section>
        <div className="flex gap-4">
          <Container className="w-fit justify-center flex-col items-center px-4">
            <p className="text-center capitalize">
              {firstData?.weather[0].description}
            </p>
          </Container>
          <Container className="px-6 gap-4 justify-between overflow-x-auto">
            <WeatherForecast
              visibility={
                typeof firstData?.visibility === "number"
                  ? metersToKilometers(firstData.visibility)
                  : metersToKilometers(
                      parseInt(firstData?.visibility || "10000") //chatgpt
                    )
              }
              humidity={`${firstData?.main.humidity} %`}
              windspeed={`${firstData?.wind.speed} KmPh`}
              sunrise={format(fromUnixTime(data?.city.sunrise), "h:mm a")}
              sunset={format(fromUnixTime(data?.city.sunset), "h:mm a")}
              airpressure={`${firstData?.main.pressure} hPa`}
            />
          </Container>
        </div>
        <section className="flex flex-col w-full gap-4 ">
          <p className="text-lg">Forecast (7 Days)</p>
          {data?.list.map((dayData, index) => (
            <DayWeather
              key={index}
              weatherIcon={""}
              date={""}
              day={""}
              temp={`${dayData?.main.temp}`}
              feels_like={0}
              temp_min={0}
              temp_max={0}
              description={""}
              visibility={""}
              humidity={""}
              windspeed={""}
              sunrise={""}
              sunset={""}
              airpressure={""}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
