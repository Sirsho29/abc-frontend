"use client";
import { useState } from "react";
import { Search, Clock } from "lucide-react";
import MainHeader from "@/app/_containers/MainHeader";
import React from "react";
import TimeIcon from "@/assets/svg/flashcardIcons/time.svg";
import Image from "next/image";
const SuggestedInput = () => {
  const [search, setSearch] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const history = ["Test 1", "Test 2"];
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full mx-auto z-10">
        <div className="relative flex gap-2 w-full">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowHistory(true)}
            onBlur={() => setTimeout(() => setShowHistory(false), 200)}
            className="w-full z-[150] px-4 py-2 text-[14px] leading-[14px] font-[400] text-[#B7B7B7]  border border-[#527dff] rounded-full focus:outline-none focus:ring-2 focus:ring-[#527dff]"
          />
          <button
            className="text-[15px] leading-[15px] font-[500] text-[#4b5462]"
            onClick={() => setSearch("")}
          >
            Cancel
          </button>
        </div>

        {showHistory && history.length > 0 && (
          <div className="mt-2 w-full  rounded-lg p-2">
            {history.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 text-[#4b5462] hover:bg-gray-100 cursor-pointer my-2"
              >
                <Image src={TimeIcon} alt="Time" />
                <span className="leading-[18px] font-[400] text-[18px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestedInput;
