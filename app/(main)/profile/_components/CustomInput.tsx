"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function NameInput({
  icon,
  placeholder,
  label,
  type='text',
}: {
  icon: string;
  placeholder: string;
  label: string;
  type?: string;
}) {
  const [name, setName] = useState("");

  return (
    <div className="w-full  ">
      <Label
        htmlFor="name"
        className="text-gray-600 text-[18px] leading-[18px] font-[600]"
      >
        {label}
      </Label>
      <div className="relative mt-1">
        {/* <User className="" /> */}
        <Image
          src={icon}
          alt=""
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
        />
        <Input
          id="name"
          type={type}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={placeholder}
          className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-[21px] leading-[21px] font-[400]"
        />
      </div>
    </div>
  );
}
