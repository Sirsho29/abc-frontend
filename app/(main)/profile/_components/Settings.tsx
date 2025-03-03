"use client";
import { useState } from "react";
import Image from "next/image";
import Down from "@/assets/svg/reviceIcons/down.svg";
import Up from "@/assets/svg/reviceIcons/up.svg";
import Avater from "@/assets/svg/profileIcons/setting.svg";
import Edit from "@/assets/svg/profileIcons/edit.svg";
import Bell from "@/assets/svg/profileIcons/bell.svg";
import Arrow from "@/assets/svg/reviceIcons/blackArrow.svg";
const Settings = () => {
  const [drop, setDrop] = useState<boolean>(false);
  return (
    <div
      onClick={() => setDrop(!drop)}
      className="py-4  cursor-pointer px-4 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-col font-[400]  "
    >
      <div className="flex justify-between">
        <h1 className="text-[24px] leading-[24px] font-[500] flex justify-center items-center gap-3">
          <span>
            <Image src={Avater} alt="Down" height={20} width={20} />
          </span>
          Settings
        </h1>
        <div className="flex text-sm text-[#527dff] font-[600] gap-2 justify-center items-center cursor-pointer">
          {drop ? (
            <Image
              onClick={() => setDrop(!drop)}
              src={Up}
              alt="Down"
              height={15}
              width={15}
            />
          ) : (
            <Image
              onClick={() => setDrop(!drop)}
              src={Down}
              alt="Down"
              height={15}
              width={15}
            />
          )}
        </div>
      </div>
      {drop && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="px-3 py-1 flex justify-center flex-col items-center tracking-wide  gap-2  rounded-lg "
        >
          <div className="flex justify-between w-full mt-2">
            <h1
              className="text-[18px] leading-[18px] font-[400]
             flex justify-center items-center -tracking-tighter gap-2"
            >
              <span>
                <Image src={Bell} alt="Down" height={15} width={15} />
              </span>
              Push Notifications
            </h1>
            <Image src={Arrow} alt="Down" height={5} width={5} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
