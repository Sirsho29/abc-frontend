import React from "react";
import AnalyticsCard from "@/app/_components/AnalyticsCard";
import AccuracyIcon from "@/assets/svg/homePageIcons/Accuracy.svg";
import AvgIcon from "@/assets/svg/homePageIcons/Avg.svg";
import FlashcardIcon from "@/assets/svg/homePageIcons/FlashCard.svg";
import CompletionIcon from "@/assets/svg/homePageIcons/Completion.svg";
import Image from "next/image";
import ArrowIcon from '@/assets/svg/homePageIcons/Arrow.svg'
import Link from "next/link";
const analyticsData = [
  { title: "Accuracy", value: 93, color: "#10b981", icon: AccuracyIcon },
  { title: "Avg Score", value: 50, color: "#fbbf24", icon: AvgIcon },
  {
    title: "Completion Rate",
    value: 50,
    color: "#ef4444",
    icon: CompletionIcon,
  },
  {
    title: "Flashcard Review Rate",
    value: 70,
    color: "#527dff",
    icon: FlashcardIcon,
  },
];

const Analytics = () => {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-5">
        <h1 className="text-[24px] leading-[24px] font-[700] text-[#374051]">
          Analytics
        </h1>
        <Link
          href={"/home/leaderboard"}
          className="flex text-[#527dff] cursor-pointer text-[15px] leading-[15px] font-[700] justify-center items-center"
        >
          Leaderboard
          <Image src={ArrowIcon} alt="Arrow" className="h-[9px] w-[9px]" />
        </Link>
      </div>

      <div className="flex justify-between">
        {analyticsData.map(({ title, color, icon, value }) => {
          return (
            <AnalyticsCard
              key={title}
              title={title}
              value={value}
              color={color}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Analytics;
