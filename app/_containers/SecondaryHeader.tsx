import React from "react";
import Image from "next/image";
import Pattern from "@/assets/svg/homePageIcons/UpperPatter.svg";
import NotificationIcon from "@/assets/svg/sidebarIcons/notification.svg";
import Link from "next/link";

import ReturnIcon from "@/assets/svg/leaderboardIcon/return.svg";
const SecondaryHeader = ({
  children,
  name,
  returnurl = "/",
}: {
  children: React.ReactNode;
  name: string;
  returnurl?: string;
}) => {
  return (
    <div className="overflow-hidden py-7 px-10 relative">
      <Image
        className="absolute  top-[-57px] left-[-97px]  h-[20rem] w-[20rem]"
        src={Pattern}
        alt="Pattern"
        height={200}
        width={200}
      />

      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-1 z-[100]">
          <Link href={returnurl}>
            <Image src={ReturnIcon} alt="Pattern" height={20} width={20} />
          </Link>

          <h1 className="font-[600] ml-[16px] text-[36px] text-[#374051]">
            {name}
          </h1>
        </div>
        <div className="flex gap-7">
          <Image
            className="h-[30px] w-[30px]"
            src={NotificationIcon}
            alt="Pattern"
            height={20}
            width={20}
          />

          {/* <DropDown data={["One","Two"]} label="Select" handleSelect={()=>{}} selected="" /> */}
        </div>
      </div>

      <div className="p-5">{children}</div>
    </div>
  );
};

export default SecondaryHeader;
