import React from "react";
import Image from "next/image";
import ArrowIcon from "@/assets/svg/homePageIcons/Arrow.svg";
import Link from "next/link";

interface Activity {
  id: number;
  title: string;
  status: string;
  statusColor: string;
}

interface ActivityGroup {
  date: string;
  activities: Activity[];
}

interface RecentActivitiesProps {
  activitiesByDate: ActivityGroup[];
  noheader?:boolean;
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({
  activitiesByDate,
  noheader=false
}) => {
  return (
    <div>
      {!noheader && (
        <div className="flex justify-between">
          <h1 className="text-[24px] leading-[24px] font-[700] text-[#374051] mt-2 mb-3">
            Recent Activities
          </h1>
          <Link
            href={"/home/recent-activities"}
            className="flex text-[#527dff] cursor-pointer text-[15px] leading-[15px] font-[700] justify-center items-center"
          >
            Show More
            <Image src={ArrowIcon} alt="Arrow" />
          </Link>
        </div>
      )}

      {activitiesByDate.map((activityGroup, index) => (
        <div
          key={index}
          className="relative p-4 text-[#374051] flex flex-col rounded-xl shadow-sm border mb-5 bg-[#f0f8ff]"
        >
          <p className="text-[18px] leading-[18px] font-[400] my-2 mb-2 text-[#a1a1aa]">
            {activityGroup.date}
          </p>
          <div>
            {activityGroup.activities.map((activity) => (
              <div
                key={activity.id}
                className="p-2.5 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-row text-[21px] leading-[21px] font-[500] bg-white px-5"
              >
                <h1 className="text-[21px] text-[#4b5462] leading-[21px] font-[500]">
                  {activity.title}
                </h1>
                <div
                  className="flex text-[17px] leading-[21px] font-[500] gap-1 justify-center items-center"
                  style={{ color: activity.statusColor }}
                >
                  {activity.status}
                  <Image src={ArrowIcon} alt="Arrow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;
