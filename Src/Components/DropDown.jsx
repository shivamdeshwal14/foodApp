
import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropDown({ cities, selectedCity, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex w-full justify-between items-center gap-x-1.5 text-xl rounded-md bg-white/10 px-3 py-2  font-semibold text-black inset-ring-1 inset-ring-white/5 hover:bg-white/20"
      >
        {selectedCity ? selectedCity.city : "Select Your Location"}
        <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-400" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 sm:right-0 left-0 sm:left-auto z-10 mt-2 w-56 max-w-[90vw] origin-top-right rounded-md bg-gray-800 shadow-lg outline outline-1 -outline-offset-1 outline-white/10 
  max-h-60 overflow-y-auto transition"
        >
          <div className="py-1">
            {cities.map((city, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelect(city);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
              >
                {city.city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

