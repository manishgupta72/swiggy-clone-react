import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { CiDiscount1, CiUser } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoSearchSharp />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
    },
    {
      icon: <CiUser />,
      name: "Sign In",
    },
    {
      icon: <FiShoppingCart />,
      name: "Cart",
      sup: "(2)",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
        onClick={hideSideMenu}
      >
        <div
          className="w-[500px] h-full bg-white absolute duration-[400ms]"
          style={{ left: toggle ? 0 : "-100%" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        ></div>
      </div>
      <header className="p-2 shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px] ">
            <img src="images/logo.png" className="w-full" alt="" />
          </div>
          <div className="">
            <span className="border-b-[3px] text-[black] border-[black] font-bold mx-2">
              Other
            </span>
            Mau, Uttar Pradesh 275101, India{" "}
            <RxCaretDown
              fontSize={"25px"}
              className="inline text-[#fc8019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>
          <nav className="flex list-none gap-10  text-[#3D4152] ml-auto text-[18px] font-semibold">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center hover:text-[#da5a30] gap-2"
                >
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
