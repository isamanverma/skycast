import React from "react";
import { useState } from "react";

export default function Header() {
  const [location, setLocation] = useState("");
  console.log(location);
  return (
    <form>
      <input
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        type="text"
        value={location}
      />
    </form>
  );
}
