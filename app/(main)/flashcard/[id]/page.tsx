import React from "react";
import SecondaryHeader from "@/app/_containers/SecondaryHeader";
import FlashcardComponent from "../_components/Flashcard";
import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <SecondaryHeader name="Flashcards" returnurl="/flashcard">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-[#527DFF] text-[21px] leading-[24px] font-[700] mb-10">
          Tap on the card to flip
        </h1>
        <div>
          <FlashcardComponent />
        </div>
      </div>
    </SecondaryHeader>
  );
};

export default page;
