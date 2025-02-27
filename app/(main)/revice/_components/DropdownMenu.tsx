"use client";
import { useState } from "react";
import Image from "next/image";
import Down from "@/assets/svg/reviceIcons/down.svg";
import Up from "@/assets/svg/reviceIcons/up.svg";
import Link from "next/link";
const DropdownMenu = () => {
  const [drop, setDrop] = useState<boolean>(false);
  return (
    <div
      onClick={() => setDrop(!drop)}
      className="py-4  cursor-pointer px-4 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-col font-[400] bg-white "
    >
      <div className="flex justify-between">
        <h1 className="text-sm font-[500] flex justify-center items-center gap-2">
          <span>1.</span>Quantitative Analysis
        </h1>
        <div className="flex text-sm text-[#527dff] font-[600] gap-2 justify-center items-center cursor-pointer">
          Completed
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
          className=" p-4 m-3 flex justify-center flex-col items-center  bg-[#f0f8ff] rounded-lg gap-2"
        >
          <div className="flex justify-between w-full">
            <Link
              href={"/revice/simplification"}
              className="text-sm font-[400] flex justify-center items-center gap-2"
            >
              <span>1.1</span>Simplification
            </Link>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between w-full">
            <Link
              href={"/revice/simplification"} className="text-sm font-[400] flex justify-center items-center gap-2">
              <span>1.2</span>Simplification
            </Link>
            <input type="checkbox" />
          </div>
          <div
               className="flex justify-between w-full">
            <Link
              href={"/revice/simplification"} className="text-sm font-[400] flex justify-center items-center gap-2">
              <span>1.3</span>Simplification
            </Link>
            <input type="checkbox" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
