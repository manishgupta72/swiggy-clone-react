import React from "react";
import { PiCaretDownBold } from "react-icons/pi";
import Cards from "./Cards";
const RestCity = () => {
  const cityName = [
    { name: "Best Restaurants in Banglore", icon: "" },
    { name: "Best Restaurants in Pune", icon: "" },
    { name: "Best Restaurants in Mumbai", icon: "" },
    { name: "Best Restaurants in Delhi", icon: "" },
    { name: "Best Restaurants in UP", icon: "" },
    { name: "Best Restaurants in Varanasi", icon: "" },
    { name: "Best Restaurants in Lucknow", icon: "" },
    { name: "Best Restaurants in Gurgaon", icon: "" },
    { name: "Best Restaurants in Mau", icon: "" },
    { name: "Best Restaurants in Ghosi", icon: "" },
    { name: "Best Restaurants in Luduhi", icon: "" },
    { name: "Show More", icon: <PiCaretDownBold /> },
  ];
  return (
    <div className="max-w-[1200px] mx-auto mb-20">
      <div className="flex justify-between items-center my-3 ">
        <div className="md:text-[25px] md:font-extrabold mx-3  md:mx-10 p-1 font-bold">
          Best Places to Eat Across Cities
        </div>
      </div>
      <div className="max-w-[1200px]  mx-auto   my-4 md:gap-3 grid grid-cols-4 gap-2 p-2">
        {cityName.map((city, index) => {
          return (
            <div className="flex shadow-md align-center border border-[#02060c1a] px-5 py-6 rounded-xl font-bold text-[#282828] text-[16px]">
              {city.name}
              <span className="mt-1 font-bold"> {city.icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestCity;
