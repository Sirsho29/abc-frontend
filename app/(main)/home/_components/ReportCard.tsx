import React from "react";
import { DM_Sans } from "next/font/google";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Span } from "next/dist/trace";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const ReportCard = ({
  name,
  icon,
  marks,
  totalmarks,
  typed,
  number,
  min=false,
}: {
  name: string;
  icon: string | StaticImport;
  marks?: string;
  totalmarks?: string;
  typed?: boolean;
  min?: boolean;
  number?: string;
}) => {
  return (
    <div
      className={`${dmSans.variable} bg-[#e1e8ff] text-[#4B5462] shadow-sm rounded-xl p-4 w-[16.5rem] flex justify-center items-center gap-5 z-1`}
    >
      <div className="flex justify-center items-center flex-col text-sm">
        <h1 className=" font-semibold text-base">{name}</h1>
        {typed ? (
          <h1 className="font-bold">
            <span className=" text-[#234fd3] font-['DM Sans'] text-base">
              {marks}
            </span>
            /{totalmarks}
          </h1>
        ) : (
          <h1 className="font-bold text-[#234fd3] text-base">
            {number}{" "}
            {min && (
              <samp className={`text-[#234fd3]`}>min.</samp>
            )}
          </h1>
        )}
      </div>
      <Image src={icon} alt="Flash Card" height={36} width={36} />
    </div>
  );
};

export default ReportCard;
