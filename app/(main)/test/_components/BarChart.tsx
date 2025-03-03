"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", time: 10 },
  { name: "2", time: 30 },
  { name: "3", time: 5 },
  { name: "4", time: 20 },
  { name: "5", time: 12 },
];

export const TimeTakenChart = () => {
  return (
    <div className="p-4 border shadow-sm rounded-xl flex-1 h-[17.5rem] flex flex-col ">
      <h2 className="text-[#6c7180] text-[18px] leading-[18px] font-[400] mt-3 ml-5 mb-8">
        Time taken for each question
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#444" }} />
          <YAxis
            tickFormatter={(value) => `${value}min`}
            tick={{ fill: "#444" }}
            domain={[0, 30]} // Ensures the Y-axis reaches 30min
            ticks={[0, 10, 20, 30]}
          />
          <Tooltip formatter={(value) => `${value} min`} />
          <Bar
            dataKey="time"
            fill="#527dff"
            radius={[6, 6, 0, 0]}
            barSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
