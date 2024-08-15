import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
const OnlineDelivery = () => {
  const [data, setData] = useState([]);
  const componenRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componenRef.current) {
        const rect = componenRef.current.getBoundingClientRect();

        setIsAtTop(rect.top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchResturant = async () => {
    const response = await fetch("http://localhost:7000/resturant");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchResturant();
  }, []);

  const filter = [
    { name: "Filter", icon: <CiFilter /> },
    { name: "Sort By", icon: <IoIosArrowDown /> },
    { name: "Fast Delivery", icon: "" },
    { name: "Ratings", icon: <IoMdAdd /> },
    { name: "Pure Veg", icon: "" },
    { name: "Rs. 300-Rs. 600", icon: "" },
    { name: "Less than Rs.300", icon: "" },
  ];
  return (
    <div className="max-w-[1200px] mx-auto " ref={componenRef}>
      <div className="flex justify-between items-center my-3 ">
        <div className="text-[20px] md:font-extrabold mx-3  md:mx-10 p-1 font-[700]">
          Restaurants with online food delivery in Maunath Bhanjan
        </div>
      </div>
      <div>
        <div
          className={
            isAtTop ? "fixed top-0 z-[9999999999] bg-white w-full" : ""
          }
        >
          <div className="max-w-[1200px] mx-auto md:flex my-4 md:gap-3 grid grid-cols-4 gap-2 p-2">
            {filter.map((filter, index) => {
              return (
                <div className="flex items-center gap-2 p-2 rounded-xl shadow cursor-pointer">
                  {filter.name}
                  <span className="">{filter.icon}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid gap-3 grid-cols-2 p-2 md:grid-cols-4 ">
        {data.map((d, index) => {
          return <Cards {...d} />;
        })}
      </div>
    </div>
  );
};

export default OnlineDelivery;
