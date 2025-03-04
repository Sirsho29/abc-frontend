"use client";

import { useState } from "react";
import Card from "./Card";
import { Button } from "@/components/ui/button";
import SolarImage from "@/assets/svg/flashcardIcons/image.svg";
import NextArrow from "@/assets/svg/flashcardIcons/nextarrow.svg";
import PresvArrow from "@/assets/svg/flashcardIcons/prevarrow.svg";
import SaveIcon from "@/assets/svg/flashcardIcons/saved.svg";
import CorrectIcon from "@/assets/svg/flashcardIcons/correct.svg";
import InCorrectIcon from "@/assets/svg/flashcardIcons/incorrect.svg";
import Image from "next/image";
import UpArrow from "@/assets/svg/reviceIcons/up.svg";
import DownArrow from "@/assets/svg/reviceIcons/down.svg";
interface Flashcard {
  title: string;
  content: string;
  imageSrc: string;
  short: string;
  flipContent: string;
  isCorrect: boolean;
}

const flashcards: Flashcard[] = [
  {
    title: "Flashcard 1 of 5",
    short: "1/5",
    content: "Solar System has 8 Planets and every planet has a moon",
    imageSrc: "SolarImage.jpg",
    flipContent: "Solar System has 8 Planets and every planet has a moon",
    isCorrect: false,
  },
  {
    title: "Flashcard 2 of 5",
    short: "2/5",
    content: "The Earth is flat",
    imageSrc: "EarthImage.jpg",
    flipContent: "The Earth is an oblate spheroid",
    isCorrect: false,
  },
  {
    title: "Flashcard 3 of 5",
    short: "3/5",
    content: "The Sun is the center of our Solar System",
    imageSrc: "SunImage.jpg",
    flipContent: "The Sun is the center of our Solar System",
    isCorrect: true,
  },
  {
    title: "Flashcard 4 of 5",
    short: "4/5",
    content: "Mars has two moons",
    imageSrc: "MarsImage.jpg",
    flipContent: "Mars has two moons: Phobos and Deimos",
    isCorrect: true,
  },
  {
    title: "Flashcard 5 of 5",
    short: "5/5",
    content: "Jupiter is the smallest planet",
    imageSrc: "JupiterImage.jpg",
    flipContent: "Jupiter is the largest planet in our Solar System",
    isCorrect: false,
  },
];

export default function FlashcardComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false); // Track if the question is answered
  const [explanation, setExplanation] = useState("");
  const [toggle, setToggle] = useState(false);
  // Go to the next question with looping
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
    setIsAnswered(false);
  };

  // Go to the previous question with looping
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
    setIsAnswered(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 ">
      {/* Flashcard Component */}
      <div className="flex justify-center gap-[30px] items-center  w-full">
        <div className="flex justify-center items-center flex-col gap-2">
          <Image src={InCorrectIcon} alt="Incorrect" />
          <h1 className="text-[16px] leading-[21px] font-[600] text-[#4B5462] text-center">
            <span className=" text-[#527DFF]">SWIPE LEFT</span> for <br />
            Incorrect Answers
          </h1>
        </div>

        <Card
          key={currentIndex} // Force re-render on question change
          title={flashcards[currentIndex].title}
          content={flashcards[currentIndex].content}
          imageSrc={SolarImage}
          flipContent={flashcards[currentIndex].flipContent}
          isCorrect={flashcards[currentIndex].isCorrect}
          onAnswer={(explanation) => {
            setIsAnswered(true);
            setExplanation(explanation);
          }}
        />
        <div className="flex justify-center items-center flex-col gap-2">
          <Image src={CorrectIcon} alt="correct" />

          <h1 className="text-[16px] leading-[21px] font-[600] text-[#4B5462] text-center">
            <span className=" text-[#527DFF]">SWIPE RIGHT</span> for <br />
            correct Answers
          </h1>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-14 flex gap-6 ">
        <Button
          className="px-8 max-w-[148px]"
          variant={"secondary"}
          onClick={handlePrev}
        >
          <Image src={PresvArrow} alt="" />
          Previous
        </Button>
        <Image src={SaveIcon} alt="Save" />
        <Button
          className="px-8 max-w-[148px]"
          variant={"blue"}
          onClick={handleNext}
        >
          Next
          <Image src={NextArrow} alt="" />
        </Button>
      </div>
      {isAnswered && (
        <div className="mt-8 border rounded-lg px-5 py-4 bg-[#f8f9fa] shadow-sm w-full">
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="flex justify-between w-full cursor-pointer"
          >
            <h1
              className={`font-[500] text-[24px] leading-[24px] text-[#374051] ${
                toggle ? "mb-5" : ""
              } `}
            >
              Explanation
            </h1>
            {toggle ? (
              <Image
                onClick={() => {
                  setToggle(!toggle);
                }}
                src={UpArrow}
                alt=""
                className="cursor-pointer"
              />
            ) : (
              <Image
                onClick={() => {
                  setToggle(!toggle);
                }}
                src={DownArrow}
                alt=""
                className="cursor-pointer"
              />
            )}
          </div>

          <p
            className={`text-[18px] ${
              toggle ? "" : "hidden"
            }  leading-[21px] text-[#6C7180] font-[400]`}
          >
            Solar System has 8 Planets and every planet has a moon Solar System
            has 8 Planets and every planet has a moonSolar System has 8 Planets
            and every planet has a moonSolar System has 8 Planets and every
            planet has a moonSolar System has 8 Planets and every planet has a
            moon Solar System has 8 Planets and every planet has a moon Solar
            System has 8 Planets and every planet has a moonSolar
          </p>
        </div>
      )}
    </div>
  );
}
