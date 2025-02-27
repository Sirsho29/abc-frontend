"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PhoneNumberInput() {
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full ">
      <Label htmlFor="phone" className="text-gray-600">
        Phone Number
      </Label>
      <div className="flex gap-2 mt-1">
        {/* Country Code Selector */}
        <span className="flex items-center px-3 border border-gray-300 rounded-md bg-gray-100 text-gray-600 text-sm">
          +91
        </span>
        {/* Phone Number Input */}
        <Input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="702-889-5347"
          className="w-full border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
}
