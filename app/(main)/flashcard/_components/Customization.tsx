"use client";
import { useState } from "react";
import Image from "next/image";
import Down from "@/assets/svg/reviceIcons/down.svg";
import Up from "@/assets/svg/reviceIcons/up.svg";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

const Customization = () => {
  const [drop, setDrop] = useState<boolean>(false);
  const [numQuestions, setNumQuestions] = useState(10);
  const [time, setTime] = useState(10);

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => prev + 1);
  };

  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => (prev > 1 ? prev - 1 : 1)); // Prevents negative values
  };
  return (
    <div
      onClick={() => setDrop(!drop)}
      className="py-4 mt-8 cursor-pointer px-4 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-col font-[400] bg-white "
    >
      <div className="flex justify-between">
        <h1 className="text-[21px] leading-[21px] font-[500] text-[#374051] flex justify-center items-center gap-2">
          Advance Customization
        </h1>
        <div className="flex text-sm  font-[600] gap-2 justify-center items-center cursor-pointer">
          {drop ? (
            <Image
              onClick={() => setDrop(!drop)}
              src={Up}
              alt="Down"
              height={15}
              width={15}
            />
          ) : (
            <Image
              onClick={() => setDrop(!drop)}
              src={Down}
              alt="Down"
              height={15}
              width={15}
            />
          )}
        </div>
      </div>
      {drop && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="py-3 px-4 flex justify-center flex-col items-center rounded-lg gap-[15px]"
        >
          <div className="flex justify-between w-full">
            <div className="text-[18px] leading-[18px] font-[500] text-[#6c7180] flex justify-center items-center gap-2">
              Bookmarked Questions
            </div>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between w-full items-center">
            <p className="text-[#6c7180] text-[18px] leading-[18px] font-[500]">
              Number of Questions
            </p>
            <div className="flex items-center  bg-gray-100 rounded-lg">
              <button
                onClick={() => decrement(setNumQuestions)}
                className="bg-blue-500 text-white p-1 rounded-md"
              >
                <Minus size={16} />
              </button>
              <span className="px-2.5 text-[21px] leading-[21px] font-[600]">
                {numQuestions}
              </span>
              <button
                onClick={() => increment(setNumQuestions)}
                className="bg-blue-500 text-white p-1 rounded-md"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          
        </div>
      )}
    </div>
  );
};

export default Customization;
