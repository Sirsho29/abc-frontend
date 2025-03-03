"use client";

import React from "react";
import Qustion from "@/assets/svg/testIcons/question.svg";
import TimeIcon from "@/assets/svg/testIcons/timetaken.svg";
import Image from "next/image";


const ScoreCard = ({ score, total }: { score: any; total: any }) => {
  const progress = (score / total) * 100;

  return (
    <div className="border shadow-sm rounded-lg flex flex-col w-auto flex-1  mx-auto">
      <div className="text-center mt-8 px-4">
        <h2 className="text-[#6c7180] text-[24px] mb-1 leading-[24px] font-[500]">
          Score
        </h2>
        <p className="text-[30px] leading-[30px] font-[700] text-[#193b2d] mt-[-1px] mb-4">
          {score}/{total}
        </p>
        <div className="w-full bg-gray-200 h-1 mt-2 rounded-full">
          <div
            className="bg-blue-500 h-1 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between gap-3 mt-6  p-4 rounded-lg">
        <div className="flex flex-col gap-[2px]  items-center bg-[#e6f6eb] flex-1 p-3 rounded-xl">
          <Image src={Qustion} alt="Time" className="h-[30px] w-[30px]" />
          <div className="">
            <p className="text-[#6c7180] text-[18px] leading-[18px] font-[500] mt-1">
              Attempted Questions
            </p>
            <p className="text-[21px] leading-[21px] font-[700] text-center ">
              {score}/{total}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[2px] bg-[#e6f6eb] flex-1 p-3 rounded-xl">
          <Image src={TimeIcon} alt="Time" className="h-[30px] w-[30px]" />
          <div>
            <p className="text-[#6c7180] text-[18px] leading-[18px] font-[500] mt-1">
              Time Taken
            </p>
            <p className="text-[21px] leading-[21px] font-[700] text-center ">
              24 mins
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
 

          