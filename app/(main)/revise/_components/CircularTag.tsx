import React from "react";


const CircularTag = ({ 
  name, 
  color 
}: { 
  name: string; 
  color?: "yellow" | string;  // "yellow" is suggested, but other colors are allowed 
}) => {
  const bg = color === "yellow" ? "#ff9f1e" : "#527dff";

  return (
    <div
      className="border-2 flex justify-center items-center rounded-2xl font-[400] w-fit px-2 py-1 text-[15px] leading-[15px]"
      style={{ borderColor: bg, color: bg }}
    >
      {name}
    </div>
  );
};

export default CircularTag;

