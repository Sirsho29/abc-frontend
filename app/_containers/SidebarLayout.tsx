"use client";

import MenuIcon from "@/assets/svg/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "../_components/Sidebar";

const SideBarLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={"min-h-screen bg-[#F4F4F4]"}>
      <div className="flex">
        <Sidebar show={show} setShow={setShow} />
        <div className="w-full min-h-screen overflow-hidden">
          <div className="w-full flex flex-row  items-center justify-between">
            <div className="hidden max-md:flex mt-20 flex-row gap-x-3 items-center text-[#000000]">
              <Image
                src={MenuIcon.src}
                className="w-[20px] h-[20px]"
                width={20}
                height={20}
                alt={"notification-icon"}
                onClick={() => {
                  setShow((oldVal: boolean) => !oldVal);
                }}
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideBarLayout;
