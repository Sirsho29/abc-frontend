import MainHeader from "@/app/_containers/MainHeader";
import React from "react";
import DropDownCard from "./_components/DropDownCard";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <MainHeader name="Test">
      <div>
        <div className="mb-3 z-10">
          <h1 className="text-[#374051] font-[500] text-lg mb-2">
            Select Subject
          </h1>
          <input
            className={`w-full rounded-3xl border py-2 px-5 text-sm focus:ring-0`}
            placeholder={`Search`}
          />
        </div>
        <div className="flex flex-col border p-4 rounded-lg shadow-sm">
          <DropDownCard />
          <DropDownCard />
          <DropDownCard />
          <DropDownCard />
          <DropDownCard />
        </div>
        <div className="flex justify-center items-center">
          <Button className="text-center mt-8 w-fit" variant="blue">
            Proceed
          </Button>
        </div>
      </div>
    </MainHeader>
  );
};

export default page;
