import MainHeader from "@/app/_containers/MainHeader";
import React from "react";
import CircularTag from "../../revise/_components/CircularTag";
import DownIcon from "@/assets/svg/reviceIcons/down.svg";
import Image from "next/image";
const page = () => {
  return (
    <MainHeader name="Saved Questions">
      <div className="flex flex-col gap-3">
        <div className="w-full border shadow-sm gap-[12px] font-[500] rounded-[6px] text-[21px] text-[#374051] px-5 py-4 bg-white leading-[25.2px] flex justify-between">
          <div>
            <div className="flex gap-3">
              <CircularTag name="Test 1" />
              <CircularTag name="Question No. 10" color="yellow" />
            </div>
            <div className="mt-1">
              Solar System has 8 Planets and every planet has a moon
            </div>
          </div>
          <Image src={DownIcon} alt="Down" className="cursor-pointer" />
        </div>

        <div className="w-full border shadow-sm gap-[12px] font-[500] rounded-[6px] text-[21px] text-[#374051] px-5 py-4 bg-white leading-[25.2px] flex justify-between">
          <div>
            <div className="flex gap-3">
              <CircularTag name="Test 1" />
              <CircularTag name="Question No. 10" color="yellow" />
            </div>
            <div className="mt-1">
              Solar System has 8 Planets and every planet has a moon
            </div>
          </div>
          <Image src={DownIcon} alt="Down" className="cursor-pointer" />
        </div>

        <div className="w-full border shadow-sm gap-[12px] font-[500] rounded-[6px] text-[21px] text-[#374051] px-5 py-4 bg-white leading-[25.2px] flex justify-between">
          <div>
            <div className="flex gap-3">
              <CircularTag name="Test 1" />
              <CircularTag name="Question No. 10" color="yellow" />
            </div>
            <div className="mt-1">
              Solar System has 8 Planets and every planet has a moon
            </div>
          </div>
          <Image src={DownIcon} alt="Down" className="cursor-pointer" />
        </div>

        <div className="w-full border shadow-sm gap-[12px] font-[500] rounded-[6px] text-[21px] text-[#374051] px-5 py-4 bg-white leading-[25.2px] flex justify-between">
          <div>
            <div className="flex gap-3">
              <CircularTag name="Test 1" />
              <CircularTag name="Question No. 10" color="yellow" />
            </div>
            <div className="mt-1">
              Solar System has 8 Planets and every planet has a moon
            </div>
          </div>
          <Image src={DownIcon} alt="Down" className="cursor-pointer" />
        </div>
      </div>
    </MainHeader>
  );
};

export default page;
