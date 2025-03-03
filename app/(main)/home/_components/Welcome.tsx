import React from "react";
import ReportCard from "./ReportCard";
import FlashCardIcon from "@/assets/svg/homePageIcons/FlashComplete.svg";
import QustionIcon from "@/assets/svg/homePageIcons/QuestionComplete.svg";
import EngagementIcon from "@/assets/svg/homePageIcons/Engagement.svg";
import TopicIcon from "@/assets/svg/homePageIcons/TopicReviced.svg";
import Image from "next/image";
import InfoLogo from '@/assets/svg/info.svg';
import Pattern from "@/assets/svg/homePageIcons/LowerPattern-cropped.svg";
const Welcome = () => {
  return (
    <div className="relative p-4 text-[#374051] flex flex-col gap-1 rounded-xl shadow-sm border mb-5">
      <Image
        className="absolute inset-0 h-[8rem] w-[11rem] left-[60.5rem] rounded-tr-xl"
        src={Pattern}
        alt="Pattern"
        height={100}
        width={200}
      />
      <div>
        <h1 className="text-[21px] leading-[21px] font-[400]">Welcome Back,</h1>
        <h1 className="text-[27px] leading-[27px] font-[800] text-[#374051] ">
          Sugarplum
        </h1>
      </div>
      <p className="text-[21px] leading-[21px] font-[400] mb-[8px] flex gap-2">
        Here is your progress report <Image src={InfoLogo} alt="Info" />
      </p>

      <div className="flex justify-between">
        <ReportCard
          name="Flashcards Completed"
          marks="10,000"
          totalmarks="10,000"
          icon={FlashCardIcon}
          typed
        />
        <ReportCard
          name="Questions Completed"
          marks="56"
          totalmarks="10,000"
          icon={QustionIcon}
          typed
        />
        <ReportCard name="Topics Revised" icon={TopicIcon} number="13" />
        <ReportCard
          name="Engagement Time"
          icon={EngagementIcon}
          number="20"
          min
        />
      </div>
    </div>
  );
};

export default Welcome;
