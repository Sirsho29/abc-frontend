import React from "react";
import Line from "@/assets/svg/leaderboardIcon/line.svg";
import Gold from "@/assets/svg/homePageIcons/gold.svg";
import Silver from "@/assets/svg/homePageIcons/silver.svg";
import Bronze from "@/assets/svg/homePageIcons/bronze.svg";
import Image from "next/image";
import ALine from '@/assets/svg/homePageIcons/line.svg'
const rankings = [
  {
    place: "2nd",
    color: "text-gray-500 font-bold",
    bg: "bg-gradient-to-t from-gray-300 to-white",
    name: "Name 2",
    course: "Course",
    image: Silver,
    height: "h-[6rem]",
  },
  {
    place: "1st",
    color: "text-yellow-500 font-bold",
    bg: "bg-gradient-to-t from-yellow-400 to-white",
    name: "Name 1",
    course: "Course",
    image: Gold,
    height: "h-[6rem]",
    top: "-translate-y-5",
  },
  {
    place: "3rd",
    color: "text-orange-500 font-bold",
    bg: "bg-gradient-to-t from-orange-400 to-white",
    name: "Name 3",
    course: "Course",
    image: Bronze,
    height: "h-[6rem]",
  },
];

function Podium() {
  return (
    <div className="flex justify-center items-end gap-4 mt-6">
      {rankings.map((rank, index) => (
        <div
          key={index}
          className={`flex flex-col items-center ${rank.top || ""}`}
        >
          <p className={`text-lg ${rank.color}`}>{rank.place}</p>
          <div
            className={`w-28 ${rank.height} rounded-lg  flex flex-col items-center justify-end ${rank.bg}`}
          >
            <p className="text-lg font-semibold">{rank.name}</p>
            <p className="text-sm text-gray-500 mt-[-5px] mb-1">{rank.course}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
const LeaderboardTable = () => {
  return (
    <div className="p-4 text-[#374051] flex flex-row gap-10 rounded-xl shadow-sm border mb-3 border-[#91aaf6]">
      <div className=" flex relative flex-row">
        <Podium />
      </div>
      <Image src={ALine} alt="" className="h-[150px] w-[2px]" />
      <div className="flex w-full flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-[500] ">
            {" "}
            Your Position: <span className="text-[#527dff]">36</span>
          </h1>
          <h1 className="text-lg font-[500] ">
            {" "}
            Your Score: <span className="text-[#527dff]">72</span>
          </h1>
        </div>
        <div className="p-4 text-[#374051] flex justify-between px-[90px] flex-row gap-1 rounded-xl shadow-sm border bg-[#F0F8FF]">
          <div className="flex justify-center items-center flex-col tracking-wide">
            <h1 className="font-[600] text-lg">Accuracy</h1>
            <p className="text-[#527dff] font-[500]">50%</p>
          </div>
          <Image src={Line} alt="Line" />
          <div className="flex justify-center items-center flex-col tracking-wide">
            <h1 className="font-[600] text-lg">Avg. Score</h1>
            <p className="text-[#527dff] font-[500]">67</p>
          </div>
          <Image src={Line} alt="Line" />
          <div className="flex justify-center items-center flex-col tracking-wide">
            <h1 className="font-[600] text-lg">Completion Rate</h1>
            <p className="text-[#527dff] font-[500]">73%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;
