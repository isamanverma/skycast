import React from "react";
import { LocationProvider } from "./components/LocationContext";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Upcoming from "./components/Upcoming";

function App() {
  const degreeCelsius = "°C";
  const fahrenheit = "°F";
  return (
    <LocationProvider>
      <main className="flex h-screen flex-col justify-between">
        <Header />
        <div className="flex flex-shrink-0 flex-col gap-x-44 md:mx-32 md:flex-row md:justify-start">
          <CurrentWeather temperatureUnit={degreeCelsius} />
          <Upcoming temperatureUnit={degreeCelsius} />
        </div>
        <Footer />
      </main>
    </LocationProvider>
  );
}

export default App;
