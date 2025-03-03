import React from "react";
import MainHeader from "@/app/_containers/MainHeader";
import DropdownMenu from "@/app/(main)/test/_components/DropDownCard";
import SearchIcon from "@/assets/svg/reviceIcons/searchIcon.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ArrowIcon from "@/assets/svg/testIcons/sidebar.svg";
import Image from "next/image";

const page = () => {
  return (
    <MainHeader name="Flashcards">
      <div>
        <div className=" mb-3 z-10">
          <h1 className="text-[#374051] font-[500] text-lg mb-2">
            Select Subject
          </h1>
          <input
            className={`w-full rounded-3xl border py-2 px-5 text-sm focus:ring-0`}
            placeholder={`Search`}
          />
        </div>
        <div className="flex flex-col border p-4 rounded-lg shadow-sm">
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
        </div>
        <div className="flex justify-center items-center">
          <Button className="text-center mt-8 w-fit" variant="blue">
            <Link
              href={"/flashcard/cards"}
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
