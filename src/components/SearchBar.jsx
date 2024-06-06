import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";

export default function Header() {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const WEATHER_API_KEY = "95b5f6ad1d37400dbc5164713241405";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchLocation);
    setSearchLocation("");
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (query.length > 2) {
        try {
          const response = await axios.get(
            `http://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${query}`,
          );
          setSearchResult(response.data);
        } catch (error) {
          console.error("Error fetching the weather data:", error);
          setSearchResult(null);
        }
      }
    }, 500),
    [],
  );

  useEffect(() => {
    debouncedSearch(searchLocation);
  }, [searchLocation, debouncedSearch]);

  console.log(searchResult);

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <img
          src="ui-icons/Search icon.svg"
          alt="search icon"
          className="size-6 invert"
        />

        <form className="" onSubmit={handleSubmit}>
          <input
            className="h-10 rounded-lg bg-custom-glassmorphic text-center font-light uppercase tracking-[0.35rem] text-white focus-within:outline-none "
            onChange={(e) => {
              setSearchLocation(e.target.value);
            }}
            type="text"
            value={searchLocation}
          />
        </form>
      </div>
    </>
  );
}
