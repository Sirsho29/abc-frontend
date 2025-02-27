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
          <h1 className="font-semibold text-lg mb-3">Recent Activities</h1>
          <Link
            href={"/home/recent-activities"}
            className="flex text-[#527dff] cursor-pointer text-xs font-[600] justify-center items-center"
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
          <p className="text-[#A1A1AA] text-xs mb-2">{activityGroup.date}</p>
          <div>
            {activityGroup.activities.map((activity) => (
              <div
                key={activity.id}
                className="p-2.5 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-row font-[400] bg-white "
              >
                <h1 className="text-sm font-[500]">{activity.title}</h1>
                <div
                  className="flex text-xs font-[600] gap-2 justify-center items-center"
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
