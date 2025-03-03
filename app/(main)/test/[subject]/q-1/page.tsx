'use client'
import { useState } from "react";
import SecondaryHeader from "@/app/_containers/SecondaryHeader";
import Image from "next/image";
import A from "@/assets/svg/testIcons/a.svg";
import B from "@/assets/svg/testIcons/b.svg";
import C from "@/assets/svg/testIcons/c.svg";
import D from "@/assets/svg/testIcons/d.svg";
import SavedIcon from "@/assets/svg/testIcons/saved.svg";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/svg/testIcons/sidebar.svg";
import SArrowIcon from "@/assets/svg/testIcons/secarrow.svg";

const questionData = {
  question: "Solar System has 8 Planets and every planet has a moon",
  options: [
    { id: "a", text: "True", icon: A, isCorrect: false },
    { id: "b", text: "False", icon: B, isCorrect: true },
    { id: "c", text: "May be", icon: C, isCorrect: false },
    { id: "d", text: "Not Possible", icon: D, isCorrect: false },
  ],
  explanation:
    "Solar System has 8 Planets and every planet has a moon Solar System has 8 Planets and every planet has a moonSolar System has 8 Planets and every planet has a moonSolar System has 8 Planets and every planet has a moonSolar System has 8 Planets and every planet has a moon Solar System has 8 Planets and every planet has a moon Solar System has 8 Planets and every planet has a moonSolar ",
};

const Page = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (optionId: string, isCorrect: boolean) => {
    setSelectedOption(optionId);
    setIsCorrect(isCorrect);
    setIsAnswered(true);
  };

  return (
    <SecondaryHeader name="Test" returnurl="/test">
      <div className="flex flex-col">
        {/* Question Section */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex justify-between">
            <h1 className="text-[21px] leading-[25.2px] font-[500]">
              Question
            </h1>
            <Image
              src={SavedIcon}
              alt="Saved"
              className="h-5 w-5 cursor-pointer"
            />
          </div>
          <div className="w-full text-[21px] leading-[25.2px] font-[400] rounded-lg shadow-sm border px-3 py-2 bg-[#f0f8ff] ">
            {questionData.question}
          </div>
        </div>

        {/* Options Section */}
        <div className="flex flex-col gap-2">
          <h1 className="font-[500] text-[21px] leading-[25.2px] text-[#6c7180]">
            Options
          </h1>
          <div className="flex flex-col gap-3 mt-2 z-10">
            {questionData.options.map((option) => {
              let bgColor = "hover:bg-[#cbd8ff]"; // Default state

              if (isAnswered) {
                if (option.isCorrect) bgColor = "bg-[#b7ead9]"; // Correct Answer Green
                if (selectedOption === option.id && !option.isCorrect)
                  bgColor = "bg-[#ffc4cd]"; // Wrong Answer Red
              }

              return (
                <div
                  key={option.id}
                  className={`w-full flex gap-2 text-[18px] items-center font-[500] cursor-pointer rounded-lg shadow-sm border px-3 py-1.5  font-['DM Sans'] leading-[18px] ${bgColor} text-[#52525b]`}
                  onClick={() => handleSelect(option.id, option.isCorrect)}
                >
                  <Image
                    className="h-[25px] w-[25px]"
                    src={option.icon}
                    alt={option.id.toUpperCase()}
                  />
                  {option.text}
                </div>
              );
            })}
          </div>
        </div>

        {/* Explanation Section (Only shows after answering) */}

        {/* Navigation Buttons */}
        <div className="mt-20 flex justify-end gap-4">
          <Button variant="secondary">
            <Image src={SArrowIcon} alt="Arrow" className="h-3 w-3" />
            Previous
          </Button>
          <Button variant="blue">
            Proceed <Image src={ArrowIcon} alt="Arrow" className="h-3 w-3" />
          </Button>
        </div>

        
      </div>
    </SecondaryHeader>
  );
};

export default Page;
