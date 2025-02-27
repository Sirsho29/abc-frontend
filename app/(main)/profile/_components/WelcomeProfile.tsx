import React from "react";
import Image from "next/image";
import PFP from "@/assets/images/profileImages/pfp.png";
import { Button } from "@/components/ui/button";
import SignOut from "@/assets/svg/profileIcons/signout.svg";
const WelcomeProfile = () => {
  return (
    <div className="p-4 text-[#374051] flex justify-between items-center gap-1 rounded-xl shadow-sm border mb-5">
      <div className="flex items-center">
        <Image src={PFP} alt="pfp" className="h-[8rem] w-[8rem]" />
        <div className="flex flex-col">
          <p className="font-[400]">Welcome</p>
          <h1 className="text-xl font-[500]">Marvin McKinney</h1>
        </div>
      </div>
      <Button
        variant={"rose"}
        className="text-base font-[400] flex items-center justify-center"
      >
        <span className="mb-1">Log out</span> <Image src={SignOut} alt="Sign Out" />
      </Button>
    </div>
  );
};

export default WelcomeProfile;
