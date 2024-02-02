'use client'
import { useQuery } from "react-query";
import axios from "axios";
import Navbar from "./components/Navbar";
const  Home = ()=> {
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
  const { isLoading, error, data } = useQuery<WeatherData>('repoData', async () =>{
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=nahan&appid=94838bef0a3df79501ca1daf7da28b58&cnt=2`)
    return data 
  }
  // fetch('https://api.openweathermap.org/data/2.5/forecast?q=nahan&appid=94838bef0a3df79501ca1daf7da28b58&cnt=2').then(res =>
  //   res.json()
  )

if (isLoading) return 'Loading...'
console.log("data",data)
  return (

    
    <div className=" flex flex-col gap-6 bg-cyan-300 min-h-screen">
      <Navbar />
    </div>
  );
}
export default Home