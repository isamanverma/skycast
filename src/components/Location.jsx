import React, { useContext } from "react";
import { LocationContext } from "./LocationContext";
import LoadingPage from "./LoadingPage";

export default function Location() {
  const { data, loading, error } = useContext(LocationContext);
  if (loading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  return (
    <p className="justify-center text-center font-light uppercase tracking-[0.35rem] text-white transition-all hover:cursor-pointer hover:font-normal lg:text-xl">
      {data.location.name + ", " + data.location.region}
    </p>
  );
}
