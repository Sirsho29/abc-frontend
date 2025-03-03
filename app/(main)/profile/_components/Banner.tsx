import React from "react";
import Image from "next/image";
import Headset from "@/assets/svg/profileIcons/headset.svg";
const Banner = () => {
  return (
    <div className="w-full rounded-[12px] bg-[#527dff] mt-7 flex justify-center items-center gap-[2rem] text-white h-[147px]">
      <Image src={Headset} alt="" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[30px] leading-[30px] font-[700]">Contact Us </h1>
        <p className="text-[24px] leading-[24px] font-[400]">XXXXXXXXX</p>
      </div>
    </div>
  );
};

export default Banner;
