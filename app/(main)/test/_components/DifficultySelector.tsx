"use client";
import { useState } from "react";

const DifficultySelector = () => {
  const [difficulty, setDifficulty] = useState("Easy");
  const [numQuestions, setNumQuestions] = useState(10);
  const [time, setTime] = useState(10);

  return (
    <div className=" w-full mt-8">
      {/* Difficulty Level */}
      <div>
        <p className="text-[21px] leading-[21px] font-[600] text-[#374051] mb-2">
          Level of Difficulty
        </p>
        <div className="grid grid-cols-3 gap-2">
          {["Easy", "Medium", "Hard"].map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`w-full py-3 text-[18px] leading-[18px] font-[600] rounded-lg border text-center shadow-sm transition ${
                difficulty === level
                  ? "bg-[#527dff] text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-[#444d5c]"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Number of Questions */}
      <div className="mt-6">
        <p className="text-[21px] leading-[21px] font-[600] text-[#374051] mb-2">
          Number of Questions
        </p>
        <div className="grid grid-cols-5 gap-2">
          {[10, 15, 20, 25, 30].map((num) => (
            <button
              key={num}
              onClick={() => setNumQuestions(num)}
              className={`w-full py-3 rounded-lg text-[18px] leading-[18px] font-[600] border shadow-sm text-center transition ${
                numQuestions === num
                  ? "bg-[#527dff] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div className="mt-6">
        <p className="text-[21px] leading-[21px] font-[600] text-[#374051] mb-2">
          Time (in min.)
        </p>
        <div className="grid grid-cols-5 gap-2">
          {[10, 15, 20, 25, 30].map((t) => (
            <button
              key={t}
              onClick={() => setTime(t)}
              className={`w-full py-3 text-[18px] leading-[18px] font-[600] rounded-lg border text-center shadow-sm transition ${
                time === t
                  ? "bg-[#527dff] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DifficultySelector;
