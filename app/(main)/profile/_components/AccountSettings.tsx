'use client'
import { useState } from "react";
import Image from "next/image";
import Down from "@/assets/svg/reviceIcons/down.svg";
import Up from "@/assets/svg/reviceIcons/up.svg";
import Avater from '@/assets/svg/profileIcons/user.svg';
import Edit from "@/assets/svg/profileIcons/edit.svg";
import Saved from "@/assets/svg/profileIcons/saved.svg";
import Change from "@/assets/svg/profileIcons/key.svg";
import Arrow from '@/assets/svg/reviceIcons/blackArrow.svg'
import Link from "next/link";
const AccountSettings = () => {
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
          Account
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
          className="px-3 py-1 flex justify-center flex-col items-center tracking-wide  gap-4  rounded-lg "
        >
          <Link
            href={"/profile/edit-profile"}
            className="flex justify-between w-full"
          >
            <h1
              className="text-[18px] leading-[18px] font-[400]
             flex justify-center items-center gap-2 mt-2"
            >
              <span>
                <Image src={Edit} alt="Down" height={15} width={15} />
              </span>
              Edit Profile
            </h1>
            <Image src={Arrow} alt="Down" height={5} width={5} />
          </Link>
          <div className="flex justify-between w-full">
            <h1 className="text-[18px] leading-[18px] font-[400] flex justify-center items-center gap-2">
              <span>
                <Image src={Change} alt="Down" height={15} width={15} />
              </span>
              Change Password
            </h1>
            <Image src={Arrow} alt="Down" height={5} width={5} />
          </div>
          <div className="flex justify-between w-full">
            <h1 className="text-[18px] leading-[18px] font-[400] flex justify-center items-center gap-2">
              <span>
                <Image src={Saved} alt="Down" height={15} width={15} />
              </span>
              Saved
            </h1>
            <Image src={Arrow} alt="Down" height={5} width={5} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountSettings
