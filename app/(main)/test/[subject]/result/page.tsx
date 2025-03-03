'use client'
import SecondaryHeader from "@/app/_containers/SecondaryHeader";
import React from "react";
import Image from "next/image";
import Success from "@/assets/svg/testIcons/success.svg";
import { TimeTakenChart } from "../../_components/BarChart";
import Qustion from '@/assets/svg/testIcons/question.svg'
import TimeIcon from '@/assets/svg/testIcons/timetaken.svg'
import { Progress } from "@/components/ui/progress";
import ScoreCard from "../../_components/ScoreCard";
import { Button } from "@/components/ui/button";
const page = () => {
   const [progress, setProgress] = React.useState(90);
  return (
    <SecondaryHeader name="Test" returnurl="/test">
      <div className="flex justify-center items-center flex-col gap-2">
        <Image src={Success} alt="Success" />
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[#0f172a] text-[24px] leading-[24px] font-[600]">
            Test Completed
          </h1>
          <p className="text-[#8390a2] text-[21px] leading-[25.2px]">
            You have successfully completed the test
          </p>
        </div>
      </div>
      <div className="flex gap-10 p-5 mt-5">
        <ScoreCard total={4} score={2} />
        <TimeTakenChart />
      </div>
      <div className="flex justify-center items-center gap-5 mt-7">
        <Button variant={"secondary"}>VIEW FEEDBACK</Button>
        <Button variant={"blue"}>TAKE ANOTHER TEST</Button>
      </div>
    </SecondaryHeader>
  );
};

export default page;
