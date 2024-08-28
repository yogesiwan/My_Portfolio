import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[500px] h-[500px] lg:w-[500px] lg:h-[500px] z-10 relative"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute w-[500px] h-[500px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne"></div>
    </div>
  );
}

export default RightBanner;