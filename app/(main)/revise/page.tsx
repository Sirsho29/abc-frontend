import React from "react";
import MainHeader from "@/app/_containers/MainHeader";
import DropdownMenu from "./_components/DropdownMenu";
import SearchIcon from '@/assets/svg/reviceIcons/searchIcon.svg'
import ArrowIcon from "@/assets/svg/testIcons/sidebar.svg";
import Image from "next/image";
import Polygon from "@/assets/svg/testIcons/polygon.svg";
const page = () => {
  return (
    <MainHeader name="Revise">
      <div>
        <div className=" mb-3 z-10">
          <h1 className="text-[#374051] font-[500] text-lg mb-2">
            Select Subject
          </h1>
          <div className="relative">
            <Image
              src={SearchIcon}
              alt=""
              className="absolute z-[152] left-5 top-2.5"
            />
            <div className="absolute right-5 gap-1 cursor-pointer z-[152] flex top-[12px]">
              <p className="text-[15px] leading-[15px] font-[500] text-[#6C7180]">
                All
              </p>
              <Image src={Polygon} alt="" className="  " />
            </div>
            <input
              className={`w-full z-[150] border-[#6c7180] border relative rounded-3xl  py-2 px-12 
                text-[15px] leading-[15px] font-[400] focus:ring-0`}
              placeholder={`Search`}
            />
          </div>
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
