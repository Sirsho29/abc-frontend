import MainHeader from "@/app/_containers/MainHeader";
import React from "react";
import DropDownCard from "./_components/DropDownCard";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/svg/testIcons/sidebar.svg";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <MainHeader name="Test">
      <div>
        <div className="mb-3 z-10">
          <h1 className="text-[#374051] font-[500] text-lg mb-2">
            Select Subject
          </h1>
          <input
            className={`w-full z-[1000] relative rounded-3xl border py-2 px-5 text-sm focus:ring-0`}
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
            <Link
              href={"/test/history"}
              className="flex justify-center items-center gap-2"
            >
              PROCEED <Image src={ArrowIcon} alt="Arrow" className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </MainHeader>
  );
};

export default page;
