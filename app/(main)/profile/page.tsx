import React from "react";
import MainHeader from "@/app/_containers/MainHeader";
import WelcomeProfile from "./_components/WelcomeProfile";
import AccountSettings from "./_components/AccountSettings";
import Settings from "./_components/Settings";
import Security from "./_components/Security";

const page = () => {
  return (
    <MainHeader name="Profile">
      <WelcomeProfile />
      <AccountSettings />
      <Settings/>
      <Security />
    </MainHeader>
  );
};

export default page;
