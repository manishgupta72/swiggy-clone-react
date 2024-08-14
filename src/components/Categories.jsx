import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const Categories = () => {
  const [categories, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (categories.length - 5 == slide) return false;
    setSlide(slide + 2);
  };
  const prevSlide = () => {
    setSlide(slide - 2);
  };

  const fetchCategories = async () => {
    const response = await fetch("http://localhost:5000/category");
    const data = await response.json();
    setCategory(data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="w-[1200px] mx-auto">
      <div className="flex justify-between items-center my-3 ">
        <div className="text-[20px] font-bold">What's on your mind?</div>
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
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              style={{ transform: `translateX(-${slide * 100}%)` }}
              key={index}
              className="w-[200px] shrink-0 duration-500"
            >
              <img src={cat.image} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="border-[1px]  my-10" />
    </div>
  );
};

export default Categories;
