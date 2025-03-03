"use client";
import Image from "next/image";
import Hero from "@/assets/svg/profileIcons/change-password.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SuccessIcon from "@/assets/svg/profileIcons/success.svg";
import PopUp from "@/app/(main)/profile/_components/PopUp";
import { useState } from "react";
import DeletePopUp from "./DeletePopUp";
const ChangePassword = () => {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  return (
    <div className="flex flex-col gap-6 justify-center items-center p-4 w-full">
      {/* <div className="flex justify-center h-[407px] w-[418px] items-center absolute bg-white rounded-xl z-[]">
        <Image src={SuccessIcon} alt="Hero" className="h-[210px] w-[210px]" />
      </div> */}
      <PopUp
        isOpen={open}
        onClose={() => {
          setOpen(!open);
        }}
        itemName="dfs"
        onDelete={() => {
          setOpen1(!open1);
        }}
      />
      <DeletePopUp
        isOpen={open1}
        onClose={() => {
          setOpen1(!open1);
        }}
        itemName="dfs"
        onDelete={() => {
          setOpen(!open);
        }}
      />
      <Image src={Hero} alt="Hero" className="h-[210px] w-[210px]" />

      <div>
        <p className="text-[18px] leading-[18px] font-[600] text-[#6C7180]  mb-2">
          Old Password
        </p>
        <Input
          className="w-[500px] text-[18px] leading-[18px] font-[400]"
          type="password"
          placeholder="• • • • • •"
        />
      </div>
      <div>
        <p className="text-[18px] leading-[18px] font-[600] text-[#6C7180] mb-2">
          New Password
        </p>
        <Input
          className="w-[500px] text-[18px] leading-[18px] font-[400]"
          type="password"
          placeholder="• • • • • •"
        />
      </div>
      <div>
        <p className="text-[18px] leading-[18px] font-[600] text-[#6C7180] mb-2">
          Rewrite new password
        </p>
        <Input
          className="w-[500px] "
          type="password"
          placeholder="• • • • • •"
        />
      </div>
      <Button
        onClick={() => {
          setOpen1(!open1);
        }}
        className="mt-2"
        variant={"blue"}
      >
        SAVE CHANGES
      </Button>
    </div>
  );
};

export default ChangePassword;
