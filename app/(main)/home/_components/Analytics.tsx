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
    icon: FlashcardIcon,
  },
  {
    title: "Flashcard Review Rate",
    value: 70,
    color: "#527dff",
    icon: CompletionIcon,
  },
];

const Analytics = () => {
  return (
    <div className="mb-3">
      <div className="flex justify-between ">
        <h1 className="font-semibold text-lg mb-3">Analytics</h1>
        <Link
          href={"/home/leaderboard"}
          className="flex text-[#527dff] cursor-pointer text-xs font-[600] justify-center items-center"
        >
          Leaderboard
          <Image src={ArrowIcon} alt="Arrow" />
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
