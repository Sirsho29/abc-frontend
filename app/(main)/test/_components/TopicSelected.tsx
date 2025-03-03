import React from "react";
import Image from "next/image";
import Arrow from "@/assets/svg/testIcons/arrow.svg";

const TopicSelected = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-2.5">
        <h1 className="text-[#374051] text-[21px] leading-[21px] font-[500]">
          Topics Selected:
        </h1>
        <ol className="text-[18px] leading-[18px]  text-[#527dff] font-[400] ml-2  flex flex-col gap-2 z-50 mt-2">
          <li className="cursor-pointer">
            <span>1.</span> Simplification
          </li>
          <li className="cursor-pointer">
            <span>2.</span> Simplification
          </li>
          <li className="cursor-pointer">
            <span>3.</span> Ration & Proportion
          </li>
        </ol>
      </div>
      <h1 className="text-[18px] leading-[18px] font-[600] cursor-pointer text-[#527dff] flex gap-1 items-center">
        Edit{" "}
        <Image
          className="mt-1 h-[12px] w-[12px]"
          height={13}
          width={13}
          src={Arrow}
          alt="Arrow"
        />
      </h1>
    </div>
  );
};

export default TopicSelected;
