import React from "react";

const RestNearMe = () => {
  const cityName = [
    { name: "Explore Restuaurant Near Me" },
    { name: "Explore Top Rated Restuaurant Near Me" },
  ];
  return (
    <div className="max-w-[1200px] mx-auto mb-32">
      <div className="flex justify-between items-center my-3 ">
        <div className="md:text-[25px] md:font-extrabold mx-3  md:mx-10 p-1 font-bold">
          Explore Every Restaurants Near Me
        </div>
      </div>
      <div className="max-w-[1200px]  mx-auto flex justify-between    my-4 md:gap-16  p-4">
        {cityName.map((city, index) => {
          return (
            <div className="flex w-[50vw] shadow-md align-center justify-center border border-[#02060c1a]  py-6 rounded-xl font-bold text-[#282828] text-[18px] ">
              <span className=""> {city.name}</span>
              <span className="mt-1 font-bold"> {city.icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestNearMe;
