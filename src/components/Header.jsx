import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";
import Location from "./Location";

export default function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleLocationClick = () => {
    setShowSearchBar(true);
  };

  return (
    <div className="my-4 flex flex-col items-center justify-center gap-2 lg:flex-row-reverse lg:gap-4">
      <div className="relative w-full max-w-md">
        <AnimatePresence initial={false}>
          {!showSearchBar && (
            <motion.div
              key="location"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleLocationClick}
              className="absolute left-0 right-0 top-0"
            >
              <Location />
            </motion.div>
          )}
          {showSearchBar && (
            <motion.div
              key="searchBar"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 top-0"
            >
              <SearchBar />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
