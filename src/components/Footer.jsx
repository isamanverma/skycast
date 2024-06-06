import React, { useContext } from "react";
import { LocationContext } from "./LocationContext";
import LoadingPage from "./LoadingPage";

export default function Footer() {
  const { data, loading, error } = useContext(LocationContext);

  if (loading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="hide-scrollbar flex w-full flex-shrink-0 flex-row overflow-x-auto bg-custom-glassmorphic text-white lg:justify-center">
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

      <div className="group mx-10 flex cursor-pointer flex-row items-center gap-2 py-2">
        <img
          src="/ui-icons/Humidity icon.svg"
          className="size-4 invert group-hover:scale-105"
          alt="icon"
        />
        <p className="text-md whitespace-nowrap transition-all group-hover:font-medium">
          Humidity{" "}
        </p>
        <span className="font-bold text-custom-violet">
          {data.current.humidity + "%"}
        </span>
      </div>

      <div className="group mx-10 flex cursor-pointer flex-row items-center gap-2 py-2">
        <img
          src="/ui-icons/Sun brightness.svg"
          className="size-4 invert group-hover:scale-105"
          alt="icon"
        />
        <p className="text-md whitespace-nowrap transition-all group-hover:font-medium">
          UV Index{" "}
        </p>
        <span className="font-bold text-custom-violet">
          {String(data.current.uv).padStart(2, "0")}
        </span>
      </div>

      <div className="group mx-10 flex cursor-pointer flex-row items-center gap-2 py-2">
        <img
          src="/ui-icons/pressure.svg"
          className="size-4 invert group-hover:scale-105"
          alt="icon"
        />
        <p className="text-md whitespace-nowrap transition-all group-hover:font-medium">
          Pressure{" "}
        </p>
        <span className="font-bold text-custom-violet">
          {data.current.pressure_mb + "mBar"}
        </span>
      </div>

      <div className="group mx-10 flex cursor-pointer flex-row items-center gap-2 py-2">
        <img
          src="/ui-icons/Heavy Rain Cloud.svg"
          className="size-4 invert group-hover:scale-105"
          alt="icon"
        />
        <p className="text-md whitespace-nowrap transition-all group-hover:font-medium">
          Precipitation{" "}
        </p>
        <span className="font-bold text-custom-violet">{1 + "%"}</span>
      </div>
    </div>
  );
}
