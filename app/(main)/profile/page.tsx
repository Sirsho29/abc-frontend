import React from "react";
import MainHeader from "@/app/_containers/MainHeader";
import WelcomeProfile from "./_components/WelcomeProfile";
import AccountSettings from "./_components/AccountSettings";
import Settings from "./_components/Settings";
import Security from "./_components/Security";
import Banner from "./_components/Banner";

const page = () => {
  return (
    <MainHeader name="Profile">
      <WelcomeProfile />
      <AccountSettings />
      <Settings />
      <Security />
      <Banner />
      <div className="text-[18px] mt-5 space-y-2.5 leading-[18px] font-[400] text-[#64748B]">
        <p className="cursor-pointer">Privacy Policy</p>
        <p className="cursor-pointer">Terms</p>
      </div>
    </MainHeader>
  );
};

export default page;
