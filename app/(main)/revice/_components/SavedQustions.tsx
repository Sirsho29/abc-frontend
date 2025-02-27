import React from "react";
import CircularTag from "../_components/CircularTag";
import ArrowIcon from "@/assets/svg/reviceIcons/blackArrow.svg";
import Image from "next/image";

const SavedQustions = () => {
  return (
    <div className="py-4  cursor-pointer px-4 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-col font-[400] bg-white">
      <CircularTag name="Quantitative Analysis" />
      <div className="flex justify-between items-center w-full">
        <p className="text-[#374051] font-[500] ml-1">Ratio & Proportion</p>
        <Image className="h-3 w-3" src={ArrowIcon} alt="Arrow" />
      </div>
    </div>
  );
};

export default SavedQustions;
