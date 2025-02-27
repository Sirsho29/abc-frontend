import React from "react";
import Image from "next/image";
import Pattern from "@/assets/svg/homePageIcons/UpperPatter.svg";
import NotificationIcon from "@/assets/svg/sidebarIcons/notification.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DropDown from "../_components/DropDown";

const MainHeader = ({
  children,
  name,
  isDropable = false,
}: {
  children: React.ReactNode;
  name: string;
  isDropable?: boolean;
}) => {
  return (
    <div className="overflow-hidden py-7 px-10 relative">
      <Image
        className="absolute  top-[-57px] left-[-97px]  h-[20rem] w-[20rem] z-[3]"
        src={Pattern}
        alt="Pattern"
        height={200}
        width={200}
      />
      <div className="flex justify-between items-center">
        <h1 className="font-[600] ml-[16px] text-[25px]">{name}</h1>
        <div className="flex gap-7">
          <Image
            className=""
            src={NotificationIcon}
            alt="Pattern"
            height={20}
            width={20}
          />
          {isDropable && <DropDown />}
        </div>
      </div>

      <div className="p-5">{children}</div>
    </div>
  );
};

export default MainHeader;
