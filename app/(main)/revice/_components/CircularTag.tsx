import React from "react";

const CircularTag = ({ name }: { name: string }) => {
  return (
    <div className="border-2 border-[#527dff] flex justify-center items-center rounded-2xl font-[400] text-[#527dff] w-fit px-2 py-1 text-xs">
      {name}
    </div>
  );
};

export default CircularTag;
