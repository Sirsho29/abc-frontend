"use client";


import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import SelectedIcon from '@/assets/svg/homePageIcons/selected.svg';
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("CFA L1");

  const options = [
    {
      title: "CFA",
      items: ["CFA L-1", "CFA L-2", "CFA L-3"],
    },
    {
      title: "FRM",
      items: [],
    },
    {
      title: "Training",
      items: [],
    },
  ];

  return (
    <div className="relative inline-block text-left z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-[#cdd9ff] text-[#527dff] font-medium px-4 py-2 rounded-full focus:outline-none"
      >
        {selected}
        {isOpen ? (
          <ChevronUp className="ml-2 w-4 h-4" />
        ) : (
          <ChevronDown className="ml-2 w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0  w-48 bg-white shadow-lg rounded-lg overflow-hidden">
          {options.map((section, index) => (
            <div key={index} className="border-b last:border-0">
              <div className="px-4 flex gap-2 py-1 text-gray-900 text-lg font-[500] ">
               {section.title}
              </div>
              {section.items.length > 0 && (
                <div className="bg-[#f0f8ff] p-1">
                  {section.items.length > 0 && (
                    <div className="">
                      {section.items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelected(item);
                            setIsOpen(false);
                          }}
                          className={`block w-full text-left pl-8 text-gray-700  hover:text-blue-600 text-sm ${
                            selected === item ? " text-[#527dff]" : ""
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
