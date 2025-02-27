import React from "react";
import ReportCard from "./ReportCard";
import FlashCardIcon from "@/assets/svg/homePageIcons/FlashComplete.svg";
import QustionIcon from "@/assets/svg/homePageIcons/QuestionComplete.svg";
import EngagementIcon from "@/assets/svg/homePageIcons/Engagement.svg";
import TopicIcon from "@/assets/svg/homePageIcons/TopicReviced.svg";
import Image from "next/image";
import InfoLogo from '@/assets/svg/info.svg';
import Pattern from "@/assets/svg/homePageIcons/LowerPattern.svg";
const Welcome = () => {
  return (
    <div className="relative p-4 text-[#374051] flex flex-col gap-1 rounded-xl shadow-sm border mb-5">
      <Image
        className="absolute inset-0 h-[15rem] w-[15rem] left-[56.7rem]"
        src={Pattern}
        alt="Pattern"
        height={200}
        width={200}
      />
      <div>
        <h1 className="text-lg font-[400]">Welcome Back,</h1>
        <h1 className="font-[700] text-xl mt-[-5px]">Sugarplum</h1>
      </div>
      <p className="text-lg mb-[8px] flex gap-2 font-[400]">
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
        <ReportCard name="Engagement Time" icon={TopicIcon} number="13" />
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
