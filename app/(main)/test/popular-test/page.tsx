"use client";
import { useState } from "react";
import { Search, Clock } from "lucide-react";
import MainHeader from "@/app/_containers/MainHeader";
import React from "react";
import TimeIcon from "@/assets/svg/flashcardIcons/time.svg";
import Image from "next/image";
import SuggestedInput from "../_components/SuggestedInput";
import TestIcon from '@/assets/svg/testIcons/test1.svg'
const page = () => {
  const [search, setSearch] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const history = ["Test 1", "Test 2"];
  return (
    <MainHeader name="Tests">
      <div>
        <h1 className="text-[24px] leading-[24px] font-[700] text-[#374051] mb-5 mt-3">
          Select Subject
        </h1>
        <SuggestedInput />
        <div className="mt-5 ">
          <p className="text-[24px] font-[700] leading-[24px] mb-4">Popular Tests</p>
          <div className="relative  p-4 text-[#374051] flex flex-row gap-3 rounded-xl shadow-sm border mb-5">
            <Image src={TestIcon} alt="" />
            <div className="flex gap-2 flex-col">
              <h1 className="font-[600] text-[21px] leading-[21px] text-[#374051]">
                Test Series 1
              </h1>
              <p className="text-[15px] leading-[15px] font-[400] text-[#a1a1aa]">
                Full syllabus test series
              </p>
            </div>
          </div>

          <div className="relative  p-4 text-[#374051] flex flex-row gap-3 rounded-xl shadow-sm border mb-5">
            <Image src={TestIcon} alt="" />
            <div className="flex gap-2 flex-col">
              <h1 className="font-[600] text-[21px] leading-[21px] text-[#374051]">
                Test Series 1
              </h1>
              <p className="text-[15px] leading-[15px] font-[400] text-[#a1a1aa]">
                Full syllabus test series
              </p>
            </div>
          </div>

          <div className="relative  p-4 text-[#374051] flex flex-row gap-3 rounded-xl shadow-sm border mb-5">
            <Image src={TestIcon} alt="" />
            <div className="flex gap-2 flex-col">
              <h1 className="font-[600] text-[21px] leading-[21px] text-[#374051]">
                Test Series 1
              </h1>
              <p className="text-[15px] leading-[15px] font-[400] text-[#a1a1aa]">
                Full syllabus test series
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainHeader>
  );
};

export default page;
