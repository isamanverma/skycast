import React, { useContext } from "react";
import { LocationContext } from "./LocationContext";

export default function Location() {
  const {  data, loading, error } = useContext(LocationContext);
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
    <div className="mx-auto py-2">
      <p className="mb-8 pt-4 text-center font-light uppercase tracking-[0.4rem] text-white transition-all hover:cursor-pointer hover:font-normal md:text-xl">
        {data.location.name + ", " + data.location.region}
      </p>
    </div>
  );
}
