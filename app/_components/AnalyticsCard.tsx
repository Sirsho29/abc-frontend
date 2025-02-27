'use client'
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import InfoIcon from '@/assets/svg/info.svg'

interface AnalyticsCardProps {
  title: string;
  value: number;
  color: string;
  icon: string | StaticImport;
  isTime?: boolean;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value, color, icon, isTime = false }) => {
  return (
    <div className="bg-white  rounded-2xl p-4 w-[17.5rem]  flex flex-col items-center border justify-between">
      <div className="flex justify-between w-full text-gray-600 text-sm">
        <Image src={icon} alt="Accuracy" width={24} height={24} />
        <span className="flex items-center gap-1 font-semibold text-base">
          {title}
        </span>
        <Image src={InfoIcon} alt="Accuracy" width={24} height={24} />
      </div>
      <div className="relative w-[7rem] h-24 my-3">
        <CircularProgressbar
          value={value}
          circleRatio={0.7}
          styles={{
            root: {
              transform: "rotate(0.65turn)",
            },
            path: { stroke: color },
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-base font-semibold">
          {value}%
        </span>
      </div>
    </div>
  );
};

export default AnalyticsCard;
