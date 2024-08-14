import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const Categories = () => {
  const [categories, setCategory] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch("");
    const data = await response.json();
    setCategory(data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="w-[1200px] mx-auto">
      <div className="flex justify-between items-center my-5 ">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className="flex justify-center items-center cursor-pointer rounded-full bg-[#e2e2e7] w-[30px] h-[30px] mx-2">
            <HiOutlineArrowSmRight />
          </div>
          <div className="flex justify-center items-center cursor-pointer rounded-full bg-[#e2e2e7] w-[30px] h-[30px] mx-2">
            <HiOutlineArrowSmRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
