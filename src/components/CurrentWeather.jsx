import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationContext";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  if (!prediction) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex w-full flex-col gap-10 pb-6 text-white md:pl-0 lg:pl-8">
      <div className="flex w-full justify-end px-4 md:justify-start ">
        <img
          src={data.current.condition.icon}
          alt="weather icon"
          className="size-44"
        />
      </div>
      <div className="pl-8">
        <p className="text-3xl">It's</p>
        <p className="text-6xl font-bold text-custom-yellow">
          {data.current.condition.text}
          <sup className="text-4xl text-white">
            {data.current.temp_c + temperatureUnit}
          </sup>
        </p>
        <p className="mb-2 text-3xl">Outside</p>
        <p className="max-w-[80%] text-xl">
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
