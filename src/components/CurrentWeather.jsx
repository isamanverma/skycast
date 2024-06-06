import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationContext";
import LoadingPage from "./LoadingPage";

export default function CurrentWeather({ temperatureUnit }) {
  const { data, prediction, loading, error } = useContext(LocationContext);
  const [tempRange, setTempRange] = useState([]);

  useEffect(() => {
    if (prediction) {
      const range = [];
      prediction.forecast.forecastday.forEach((day) => {
        day.hour.forEach((hour) => {
          range.push(hour.temp_c);
        });
      });
      setTempRange(range);
    }
  }, [prediction]);

  if (loading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-10 pb-6 text-white lg:pl-8">
      <div className="flex justify-start md:justify-center lg:justify-start">
        <div className=" flex h-[200px] w-full max-w-[250px] pl-10 ">
          <img
            src="/src/assets/icons3d/day/Day Partly Cloudy With Rain Drops.png"
            className="h-full w-full scale-[1.75] object-cover md:scale-[3.5] lg:scale-[2.75] lg:pl-10"
            alt=""
          />
        </div>
      </div>
      <div className="pl-4 md:pl-8 md:pt-20 lg:pt-12">
        <p className="text-3xl md:text-4xl">It's</p>
        <p className="text-6xl md:text-7xl font-bold text-custom-yellow">
          {data.current.condition.text}
          <sup className="text-4xl text-white">
            {data.current.temp_c + temperatureUnit}
          </sup>
        </p>
        <p className="mb-2 text-3xl md:text-4xl">Outside</p>
        <p className="max-w-[80%] text-xl md:text-2xl">
          with a high of{" "}
          <span className="font-bold text-custom-violet">
            {Math.floor(Math.max(...tempRange)) + temperatureUnit}
          </span>{" "}
          and a low of{" "}
          <span className="font-bold text-custom-violet">
            {Math.floor(Math.min(...tempRange)) + temperatureUnit}
          </span>
        </p>
      </div>
    </div>
  );
}
