import React, { useEffect, useState } from "react";

export default function UpcomingWeatherCard({
  temperatureUnit,
  time,
  temp,
  icon,
  condition,
}) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hour = now.getHours();
      const formattedTime = `${hour.toString().padStart(2, "0")}:00`;
      setCurrentTime(formattedTime);
    };

    updateCurrentTime();
    const updateInterval = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <>
      <div
        className={`upcoming-weather-card flex h-1/4 w-1/5 flex-shrink-0 cursor-pointer flex-col items-center justify-center rounded-xl bg-custom-glassmorphic py-4 text-white transition-colors duration-300 hover:bg-custom-glassmorphic-dark    lg:my-1 lg:h-1/6 lg:w-full lg:flex-row lg:justify-start lg:gap-10 lg:p-4 ${
          time.split(" ")[1].split(":")[0] === currentTime.split(":")[0]
            ? "border-2 bg-custom-glassmorphic-dark "
            : "bg-custom-glassmorphic"
        }`}
      >
        <div className="flex flex-row items-center lg:w-40">
          <img
            // src="/src/assets/icons/Icon51.png"
            src={icon}
            alt="weather icon"
            className="size-16"
          />
          <p className="text-slate-400 lg:line-clamp-2 max-w-20 text-sm hidden lg:visible">{condition}</p>
        </div>
        <p className="text-center text-xl font-bold text-custom-violet">
          {Math.floor(temp) + temperatureUnit}
        </p>
        <p className="font-light">{time.split(" ")[1]}</p>
      </div>
    </>
  );
}
