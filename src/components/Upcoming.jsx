import React, { useContext } from "react";
import { LocationContext } from "./LocationContext";
import UpcomingWeatherCard from "./UpcomingWeatherCard";
import LoadingPage from "./LoadingPage";

export default function Upcoming({ temperatureUnit }) {
  const { prediction, loading, error } = useContext(LocationContext);

  if (loading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="w-full text-white">
      <p className="my-2 px-4 md:px-8 font-light uppercase tracking-widest">Upcoming</p>
      <div
        id="upcoming-weather-container"
        className="hide-scrollbar ml-2 flex flex-shrink-0 flex-row gap-2 overflow-auto lg:h-[60vh] lg:flex-col lg:gap-0"
      >
        {prediction.forecast.forecastday.map((day, dayIndex) => (
          <React.Fragment key={dayIndex}>
            {day.hour.map((hour, hourIndex) => (
              <UpcomingWeatherCard
                key={`${dayIndex}-${hourIndex}`}
                temperatureUnit={temperatureUnit}
                time={hour.time}
                temp={hour.temp_c}
                icon={hour.condition.icon}
                condition={hour.condition.text}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
