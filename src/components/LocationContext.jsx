import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const WEATHER_API_KEY = "95b5f6ad1d37400dbc5164713241405";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let location = null;

        // Check if location data is stored in session storage
        const storedLocation = sessionStorage.getItem("location");

        if (storedLocation) {
          location = JSON.parse(storedLocation);
        } else {
          // Fetch location data if not stored
          location = await getLocation();
          sessionStorage.setItem("location", JSON.stringify(location));
        }

        const { latitude, longitude } = location;

        const [currentResponse, forecastResponse] = await Promise.all([
          axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`,
          ),
          axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${latitude},${longitude}&days=1&aqi=yes&alerts=no`,
          ),
        ]);

        setData(currentResponse.data);
        setPrediction(forecastResponse.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            reject(`ERROR(${error.code}): ${error.message}`);
          },
        );
      } else {
        reject("Geolocation is not supported by your browser");
      }
    });
  };

  return (
    <LocationContext.Provider value={{ data, prediction, loading, error }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, LocationContext };
