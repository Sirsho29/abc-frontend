import HomeIcon from '@/assets/svg/sidebarIcons/homeLogo.svg'
import ProfileIcon from "@/assets/svg/sidebarIcons/profile.svg";
import ReviceCardIcon from "@/assets/svg/sidebarIcons/reviceCard.svg";
import TestLogoIcon from "@/assets/svg/sidebarIcons/testLogo.svg";
import FlashCardIcon from "@/assets/svg/sidebarIcons/flashCard.svg";

import AHomeIcon from '@/assets/svg/sidebarIcons/home-active.svg'
import AProfileIcon from "@/assets/svg/sidebarIcons/profile-active.svg";
import AReviceCardIcon from "@/assets/svg/sidebarIcons/revice-active.svg";
import ATestLogoIcon from "@/assets/svg/sidebarIcons/test-active.svg";
import AFlashCardIcon from "@/assets/svg/sidebarIcons/flash-active.svg";

import React from "react";
import SideBarItem from "./Sidebaritem";

const sidebarList: {
  route: string;
  icon: any;
  aicon: any;

  text: string;
}[] = [
  // {
  //   route: "/dashboard",
  //   icon: HomeIcon.src,
  //   text: "Dashboard",
  // },
  {
    route: "/home",
    icon: HomeIcon.src,
    aicon : AHomeIcon.src,
    text: "Home",
  },
  {
    route: "/test",
    icon: TestLogoIcon.src,
    aicon : ATestLogoIcon.src,
    text: "Tests",
  },
  {
    route: "/flashcard",
    icon: FlashCardIcon.src,
    aicon: AFlashCardIcon.src,
    text: "Flashcards",
  },
  {
    route: "/revise",
    icon: ReviceCardIcon.src,
    aicon: AReviceCardIcon.src,
    text: "Revise",
  },
  {
    route: "/profile",
    icon: ProfileIcon.src,
     aicon: AProfileIcon.src,
    text: "Profile",
  },
];

const SidebarList = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ul className="flex flex-col gap-y-[14px]">
      {sidebarList.map((item: { route: string; icon: any; text: string , aicon: any; }) => (
        <SideBarItem
          route={item.route}
          nicon={item.icon}
          aicon={item.aicon}
          text={item.text}
          onClick={() => {
            setShow((oldVal: boolean) => !oldVal);
          }}
          key={"sidebar-item-" + item.route.split("/").join("-")}
        />
      ))}
    </ul>
  );
};

export default SidebarList;
