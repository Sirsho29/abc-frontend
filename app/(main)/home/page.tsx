import React from "react";
import Analytics from "./_components/Analytics";
import Welcome from "./_components/Welcome";
import RecentActivites from "./_components/RecentActivites";
import MainHeader from "@/app/_containers/MainHeader";

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
      { id: 4, title: "Test", status: "Incomplete", statusColor: "#FF3957" },
    ],
  },
];

const page = () => {
  return (
    <MainHeader isDropable name="Home">
      <Welcome />
      <Analytics />
      <RecentActivites activitiesByDate={activitiesData} />
    </MainHeader>
  );
};

export default page;
