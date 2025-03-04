"use client";
import { useState } from "react";
import Image from "next/image";
import Down from "@/assets/svg/reviceIcons/down.svg";
import Up from "@/assets/svg/reviceIcons/up.svg";
import Sec from '@/assets/svg/profileIcons/security.svg'
import Device from '@/assets/svg/profileIcons/device.svg'
import Signout from "@/assets/svg/profileIcons/signout.svg";
const Security = () => {
  const [drop, setDrop] = useState<boolean>(false);
  return (
    <div
      onClick={() => setDrop(!drop)}
      className="py-4  cursor-pointer px-4 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-col font-[400] bg-white "
    >
      <div className="flex justify-between">
        <h1 className="text-[24px] leading-[24px] font-[500] flex justify-center items-center gap-3">
          <span className=" bg-[#fbf1df] p-2 rounded-full">
            <Image src={Sec} alt="Down" height={20} width={20} />
          </span>
          Security
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
        <div className="flex flex-col gap-3">
          <p className=" text-[18px] my-1 leading-[18px] mt-2 font-[400] tracking-wide  ml-1">
            2 Signed Devices
          </p>
          <div
            onClick={(e) => e.stopPropagation()}
            className=" px-3 py-2  flex justify-between items-center  border rounded-lg gap-2"
          >
            <div className="flex items-center gap-2 text-[18px] leading-[18px] font-[500]">
              <span className=" bg-[#f0f8ff] p-2 rounded-full">
                <Image src={Device} alt="Down" height={15} width={15} />
              </span>
              I Phone 6
            </div>
            <Image src={Signout} alt="Sign Out" />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className=" px-3 py-2  flex justify-between items-center  border rounded-lg gap-2"
          >
            <div className="flex items-center gap-2 text-[18px] leading-[18px] font-[500]">
              <span className=" bg-[#f0f8ff] p-2 rounded-full">
                <Image src={Device} alt="Down" height={15} width={15} />
              </span>{" "}
              I Phone 6
            </div>
            <Image src={Signout} alt="Sign Out" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Security;
