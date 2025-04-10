"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import ThumbsUp from "@/assets/svg/flashcardIcons/thumbsup.svg";
import ThumbsDown from "@/assets/svg/flashcardIcons/thumsdown.svg";
import Pattern from "@/assets/svg/flashcardIcons/pattern.svg";

interface FlashcardProps {
  title: string;
  content: string;
  imageSrc: string;
  isCorrect: boolean;
  flipContent: string;
  onAnswer: (explanation: string) => void;
}

const Card: React.FC<FlashcardProps> = ({
  title,
  content,
  imageSrc,
  isCorrect,
  flipContent,
  onAnswer
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-10, 10]);
  const opacity = useTransform(x, [-150, -75, 75, 150], [1, 1, 1, 1]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [dragEnded, setDragEnded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = (event: any, info: any) => {
    setDragging(false);

    if (dragEnded) return;

    if (info.offset.x > 100) {
      onAnswer(flipContent);
      setFeedback(isCorrect ? "Correct" : "Incorrect");
      animate(x, 150, { type: "spring", stiffness: 100 });
    } else if (info.offset.x < -100) {
      onAnswer(flipContent);
      setFeedback(!isCorrect ? "Correct" : "Incorrect");
      animate(x, -150, { type: "spring", stiffness: 100 });
    } else {
      animate(x, 0, { type: "spring", stiffness: 100 });
    }

    setDragEnded(true);
  };

  const handleClick = () => {
    if (!dragging) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center">
      {/* Background Borders */}
      <div className="min-w-[755px] rotate-3 min-h-[425px] shadow-lg rounded-[14px] absolute border-2"></div>
      <div className="min-w-[755px] -rotate-3 min-h-[425px] shadow-lg rounded-[14px] absolute border-2"></div>

      {/* Card Container */}
      <motion.div
        drag={!dragEnded ? "x" : false}
        dragConstraints={{ left: -130, right: 130 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={handleClick}
        style={{ x, rotate, opacity }}
        className="relative w-[750px] h-[420px] cursor-pointer perspective-1000"
      >
        {/* Card Inner */}
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full bg-white rounded-[14px] shadow-xl flex justify-center items-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full flex flex-col justify-center items-center p-5"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
          >
            <Image
              src={Pattern}
              alt="Pattern"
              className="absolute top-0 left-0 rounded-tl-[14px]"
            />
            <div className="text-[15px] leading-[18px] font-[600] bg-[#527DFF] py-2 px-3 rounded-[50px] text-white mb-4">
              {title}
            </div>
            <h1 className="text-[22px] font-[700] text-[#27272a] mb-3">
              {content}
            </h1>
            <Image src={imageSrc} alt="Flashcard Image" />
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full flex flex-col justify-center items-center p-5 bg-[#f0f8ff] rounded-xl shadow-xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h1 className="text-[22px] font-[700] text-[#27272a]">
              {flipContent}
            </h1>
          </div>
        </motion.div>
      </motion.div>

      {/* Feedback Message */}
      {feedback && (
        <motion.div
          className={`absolute ${
            feedback === "Correct" ?  "left-[600px]" : "left-[-100px]" 
          }  top-10 p-4 text-[20px] font-[700] flex items-center gap-3 text-black`}
        >
          <Image
            src={feedback === "Correct" ? ThumbsUp : ThumbsDown}
            alt="Feedback"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Card;
