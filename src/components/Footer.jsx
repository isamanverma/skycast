import React, { useContext } from "react";
import { LocationContext } from "./LocationContext";

export default function Footer() {
  const { data, loading, error } = useContext(LocationContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="hide-scrollbar flex w-full flex-shrink-0 flex-row overflow-x-auto bg-custom-glassmorphic text-white md:justify-center">
      <div className="group mx-10 flex cursor-pointer flex-row items-center gap-2 py-2">
        <img
          src="/ui-icons/Wind icon.svg"
          className="size-4 invert transition-all group-hover:scale-105"
          alt="icon"
        />
        <p className="text-md whitespace-nowrap transition-all group-hover:font-medium">
          Wind
        </p>
        <span className="whitespace-nowrap font-bold text-custom-violet">
          {data.current.wind_mph + " " + data.current.wind_dir}
        </span>
      </div>

      <div className="mx-10 flex cursor-pointer flex-row items-center gap-2 py-2">
        <img
          src="/ui-icons/Humidity icon.svg"
          className="size-4 invert"
          alt="icon"
        />
        <p className="text-md whitespace-nowrap">Humidity </p>
        <span className="font-bold text-custom-violet">
          {data.current.humidity + "%"}
        </span>
      </div>

      <div className="mx-10 flex cursor-pointer flex-row items-center gap-2 py-2">
        <img
          src="/ui-icons/Sun brightness.svg"
          className="size-4 invert"
          alt="icon"
        />
        <p className="text-md whitespace-nowrap">UV Index </p>
        <span className="font-bold text-custom-violet">
          {String(data.current.uv).padStart(2, "0")}
        </span>
      </div>

      <div className="mx-10 flex cursor-pointer flex-row items-center gap-2 py-2">
        <img
          src="/ui-icons/pressure.svg"
          className="size-4 invert"
          alt="icon"
        />
        <p className="text-md whitespace-nowrap">Pressure </p>
        <span className="font-bold text-custom-violet">
          {data.current.pressure_mb + "mBar"}
        </span>
      </div>

      <div className="mx-10 flex cursor-pointer flex-row items-center gap-2 py-2">
        <img
          src="/ui-icons/Heavy Rain Cloud.svg"
          className="size-4 invert"
          alt="icon"
        />
        <p className="text-md whitespace-nowrap">Precipitation </p>
        <span className="font-bold text-custom-violet">{1 + "%"}</span>
      </div>
    </div>
  );
}
