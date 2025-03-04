import MainHeader from "@/app/_containers/MainHeader";
import React from "react";
import Image from "next/image";
import QuestionIcon from "@/assets/svg/testIcons/question.svg";
import TopicSelected from "@/app/(main)/test/_components/TopicSelected";
import Selector from "../_components/Selector";
import Customization from "@/app/(main)/flashcard/_components/Customization";
import ArrowIcon from "@/assets/svg/testIcons/sidebar.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <MainHeader name="Flashcards">
      <div className="border px-5 py-5 shadow-sm rounded-xl">
        <TopicSelected />
        <div className="w-full h-[123px] mt-8 rounded-[9px] bg-[#e6f6eb] flex justify-center items-center gap-[30px] shadow-sm">
          <Image
            className="h-[60px] w-[60px]"
            height={50}
            width={50}
            src={QuestionIcon}
            alt="Question"
          />
          <div className="flex flex-col  ">
            <h1 className="text-[27px] leading-[27px] font-[500] text-[#6C7180] ">
              Total Flashcards Available
            </h1>
            <p className="text-[30px] leading-[30px] font-[700] text-[#444d5c] ">
              10
            </p>
          </div>
        </div>
        <Selector />
        <Customization />
        <div className="mt-5 border rounded-lg px-5 py-4 bg-[#f8f9fa] shadow-sm">
          <h1 className="font-[600] text-[21px] leading-[21px] text-[#374051] mb-3">
            Instructions
          </h1>
          <ul className="text-[18px] leading-[21px] text-[#6C7180]">
            <li className="flex gap-3 text-[18px] leading-[21px] font-[400] text-[#4B5462]">
              <span>•</span>Do NOT close the app during the test, in case you do
              your test will be automatically automatically submitted.
            </li>
            <li className="flex gap-3 text-[18px] leading-[21px] font-[400] text-[#4B5462]">
              <span>•</span>
              The test gets submitted automatically automatically if the time
              ends.
            </li>
            <li className="flex gap-3 text-[18px] leading-[21px] font-[400] text-[#4B5462]">
              <span>•</span>
              Do NOT press the back button during the test, in case you do your
              test will be automatically automatically submitted.
            </li>
            <li className="flex gap-3 text-[18px] leading-[21px] font-[400] text-[#4B5462]">
              <span>•</span>There is NO option to pause the test.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Button className="text-center mt-8 w-fit" variant="blue">
            <Link
              href={"/flashcard/cards/q-1"}
              className="flex justify-center items-center gap-2"
            >
              Proceed <Image src={ArrowIcon} alt="Arrow" className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </MainHeader>
  );
};

export default page;
