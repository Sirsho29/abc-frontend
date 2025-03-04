"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const NewDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("CFA L-1");
const isCFASelected = ["CFA L-1", "CFA L-2", "CFA L-3"].includes(selected);
  return (
    <div className="relative inline-block text-left z-[50]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-3 text-[#527dff] text-[18px] leading-[18px] font-[600] gap-2 justify-center  bg-[#cdd9ff] rounded-full"
      >
        {selected}{" "}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="absolute mt-2 left-[-35]  w-40 bg-white border shadow-lg rounded-lg">
          <div className="px-4 py-2 font-[600] mt-2 text-[#374051] text-[21px] leading-[21px] cursor-default flex flex-row relative">
            {isCFASelected && (
              <div className="min-h-[22px] min-w-[3.5px] absolute bg-blue-500 rounded-r-full  right-[157px]"></div>
              // left-[-1]
            )}
            CFA
          </div>
          <div className="flex flex-col justify-center items-start pl-3 py-1 bg-[#f0f8ff] rounded-lg">
            <div
              className={`px-4 mt-[0.15rem] cursor-pointer bg-[#f0f8ff]4   ${
                selected === "CFA L-1" ? "text-[#527DFF]" : "text-gray-600"
              }`}
              onClick={() => {
                setSelected("CFA L-1");
                setIsOpen(false);
              }}
            >
              CFA L-1
            </div>
            <div
              className={`px-4 mt-[0.15rem] cursor-pointer bg-[#f0f8ff]44   ${
                selected === "CFA L-2" ? "text-[#527DFF]" : "text-gray-600"
              }`}
              onClick={() => {
                setSelected("CFA L-2");
                setIsOpen(false);
              }}
            >
              CFA L-2
            </div>
            <div
              className={`px-4 py-0 mt-[0.15rem] cursor-pointer bg-[#f0f8ff]4   ${
                selected === "CFA L-3" ? "text-[#527DFF]" : "text-gray-600"
              }`}
              onClick={() => {
                setSelected("CFA L-3");
                setIsOpen(false);
              }}
            >
              CFA L-3
            </div>
          </div>
          <div
            className={`px-4  text-[#374051] py-2 mt-2 font-[600] text-[21px] leading-[21px]   cursor-pointer relative  ${
              selected === "FRM" ? "text-[#527DFF]" : ""
            }`}
            onClick={() => {
              setSelected("FRM");
              setIsOpen(false);
            }}
          >
            {selected === "FRM" && (
              <div className="min-h-[22px] min-w-[3.5px] absolute bg-blue-500 rounded-r-full left-[-1]"></div>
            )}
            FRM
          </div>
          <div
            className={`px-4 text-[#374051] mb-2 py-2 font-[600] text-[21px] leading-[21px] cursor-pointer relative  ${
              selected === "Training" ? "text-[#527DFF]" : ""
            }`}
            onClick={() => {
              setSelected("Training");
              setIsOpen(false);
            }}
          >
            {selected === "Training" && (
              <div className="min-h-[22px] min-w-[3.5px] absolute bg-blue-500 rounded-r-full left-[-1]"></div>
            )}
            Training
          </div>
        </div>
      )}
    </div>
  );
};

export default NewDropdown;
