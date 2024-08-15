import React, { useState, useEffect } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import Cards from "./Cards";

const TopRest = () => {
  const [rest, setRest] = useState([]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (rest.length - 3 === slide) return false;
    setSlide(slide + 2);
  };
  const prevSlide = () => {
    if (rest.length === slide) return false;
    setSlide(slide - 2);
  };
  const fetchResturant = async () => {
    const response = await fetch("http://localhost:7000/resturant");
    const data = await response.json();
    setRest(data);
  };
  useEffect(() => {
    fetchResturant();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center my-3 ">
        <div className="md:text-[25px] md:font-extrabold mx-3  md:mx-10 p-1 font-[700]">
          Top restaurant chains in Maunath Bhanjan
        </div>
        <div className="flex">
          <div
            onClick={prevSlide}
            className="flex justify-center items-center cursor-pointer rounded-full bg-[#e2e2e7] w-[30px] h-[30px] mx-2"
          >
            <HiOutlineArrowSmLeft />
          </div>
          <div
            onClick={nextSlide}
            className="flex justify-center items-center cursor-pointer rounded-full bg-[#e2e2e7] w-[30px] h-[30px] mx-2"
          >
            <HiOutlineArrowSmRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5 p-3 overflow-hidden">
        {rest.map((d, index) => {
          return (
            <Cards
              width="w-full md:w-[273px]"
              {...d}
              slide={slide}
              key={index}
            />
          );
        })}
      </div>
      <hr className="mt-10 w-[2px] text-[black]" />
    </div>
  );
};

export default TopRest;
