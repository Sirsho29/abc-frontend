import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const QuestionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 3;

  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev < totalQuestions ? prev + 1 : prev));
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#527dff] text-[21px] font-[600] leading-[25px] text-white px-5 py-2 rounded-full shadow-md transition-all"
      >
        Question {currentQuestion} of {totalQuestions}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden">
          {[...Array(totalQuestions)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentQuestion(index + 1);
                setIsOpen(false);
              }}
              className="block w-full px-5 py-2 text-left hover:bg-gray-200 transition"
            >
              Question {index + 1} of {totalQuestions}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionButton;
