import React from "react";

const DownloadSection = () => {
  return (
    <div className="h-[20vh]  flex items-center justify-between  bg-[#F0F0F5]">
      <div className="w-[40%] ml-60 text-[35px] font-bold text-[#02060cbf] ">
        For better experience,download the Swiggy app now
      </div>
      <div className=" flex mr-40">
        <img
          className="h-64 w-[200px] object-contain"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
          alt=""
        />
        <img
          className="h-64 w-[200px] object-contain"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DownloadSection;
