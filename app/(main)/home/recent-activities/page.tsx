import React from "react";
import SecondaryHeader from "@/app/_containers/SecondaryHeader";
import RecentActivites from "../_components/RecentActivites";


const activitiesData = [
  {
    date: "Monday 13 September 2024",
    activities: [
      { id: 1, title: "Quiz", status: "Completed", statusColor: "#527DFF" },
      { id: 2, title: "Test", status: "Incomplete", statusColor: "#FF3957" },
      {
        id: 3,
        title: "Visited Question Bank",
        status: "Completed",
        statusColor: "#527DFF",
      },
    ],
  },
  {
    date: "Monday 13 September 2024",
    activities: [
      { id: 1, title: "Quiz", status: "Completed", statusColor: "#527DFF" },
      { id: 2, title: "Test", status: "Incomplete", statusColor: "#FF3957" },
      {
        id: 3,
        title: "Visited Question Bank",
        status: "Completed",
        statusColor: "#527DFF",
      },
    ],
  },
  {
    date: "Monday 13 September 2024",
    activities: [
      { id: 1, title: "Quiz", status: "Completed", statusColor: "#527DFF" },
      { id: 2, title: "Test", status: "Incomplete", statusColor: "#FF3957" },
      {
        id: 3,
        title: "Visited Question Bank",
        status: "Completed",
        statusColor: "#527DFF",
      },
    ],
  },
];


const Page = () => {
  return (
    <SecondaryHeader returnurl="/home" name="Recent Activities">
      <div>
        <RecentActivites noheader activitiesByDate={activitiesData} />
      </div>
    </SecondaryHeader>
  );
};

export default Page;
