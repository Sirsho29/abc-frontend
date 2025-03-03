import React from "react";
import MainHeader from "@/app/_containers/MainHeader";
import DropdownMenu from "./_components/DropdownMenu";
import SearchIcon from '@/assets/svg/reviceIcons/searchIcon.svg'

const page = () => {
  return (
    <MainHeader name="Revise">
      <div>
        <div className=" mb-3 z-10">
          <h1 className="text-[#374051] font-[500] text-lg mb-2">Select Subject</h1>
          <input className={`w-full rounded-3xl border py-2 px-5 text-sm focus:ring-0`} placeholder={`Search`} />
        </div>
        <div className="flex flex-col border p-4 rounded-lg shadow-sm">
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
        </div>
      </div>
    </MainHeader>
  );
};

export default page;
