import React from "react";
import { PiCaretDownBold } from "react-icons/pi";

const BestRest = () => {
  const cityName = [
    { name: "Chinese Restuaurant Near Me", icon: "" },
    { name: "South Indian Restuaurant Near Me", icon: "" },
    { name: "Indian Restuaurant Near Me", icon: "" },
    { name: "Kerala Restuaurant Near Me", icon: "" },
    { name: "Korean Restuaurant Near Me", icon: "" },
    { name: "North Indian Restuaurant Near Me", icon: "" },
    { name: "Seafood Restuaurant Near Me", icon: "" },
    { name: "Bengali Restuaurant Near Me", icon: "" },
    { name: "Punjabi Restuaurant Near Me", icon: "" },
    { name: "Italian Restuaurant Near Me", icon: "" },
    { name: "Andhra Restuaurant Near Me", icon: "" },
    { name: "Show More", icon: <PiCaretDownBold /> },
  ];
  return (
    <div className="max-w-[1200px] mx-auto mb-20 ">
      <div className="flex justify-between items-center my-3 ">
        <div className="md:text-[25px] md:font-extrabold mx-3  md:mx-10 p-1 font-bold">
          Best Cuisines Near Me
        </div>
      </div>
      <div className="max-w-[1200px]  mx-auto   my-4 md:gap-3 grid grid-cols-4 gap-2 p-2">
        {cityName.map((city, index) => {
          return (
            <div className="flex shadow-md align-center justify-center border border-[#02060c1a] px-5 py-6 rounded-xl font-bold text-[#282828] text-[16px] ">
              <span className="cityName"> {city.name}</span>
              <span className="mt-1 font-bold"> {city.icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestRest;
