'use client'
import React, { useState } from "react";
import Image from "next/image";
import Pattern from "@/assets/svg/homePageIcons/UpperPatter.svg";
import NotificationIcon from "@/assets/svg/sidebarIcons/notification.svg";
import Link from "next/link";
import ClockIcon from '@/assets/svg/sidebarIcons/clock.svg'
import ReturnIcon from "@/assets/svg/leaderboardIcon/return.svg";
import QuestionButton from "../_components/QuestionButton";
import RightIcon from "@/assets/svg/homePageIcons/rightIcon.svg";
import Notificetion from "@/assets/svg/homePageIcons/notificetion.svg";
import Marked from "@/assets/svg/sidebarIcons/marked.svg";
import { Bell, X } from "lucide-react";

interface Notification {
  id: number;
  type: "reminder" | "revise" | "quiz_expiring" | "result_available";
  title: string;
  message: string;
  linkText: string;
  link: string;
  read: boolean;
  time: string;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "reminder",
    title: "Reminder !",
    message: "You left the quiz in between, complete it now",
    linkText: "Resume from here",
    link: "#",
    read: false,
    time: "23 min",
  },
  {
    id: 2,
    type: "reminder",
    title: "Result available",
    message:
      "Your CFA L-1 results are now available. View your score and detailed feedback",
    linkText: "Open from here",
    link: "#",
    read: true,
    time: "23 min",
  },
];
const HeaderCard = ({
  children,
  name,
  returnurl = "/",
}: {
  children: React.ReactNode;
  name: string;
  returnurl?: string;
}) => {

    const [notifications, setNotifications] = useState(initialNotifications);
    const [toggle, setToggle] = useState(false);
  
    const markAsRead = (id: number) => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read: true } : n))
      );
    };
  
    const removeNotification = (id: number) => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    };
  return (
    <div className="overflow-hidden py-7 px-10 relative">
      <Image
        className="absolute  top-[-57px] left-[-97px]  h-[20rem] w-[20rem]"
        src={Pattern}
        alt="Pattern"
        height={200}
        width={200}
      />

      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-1 z-[100]">
          <Link href={returnurl}>
            <Image src={ReturnIcon} alt="Pattern" height={20} width={20} />
          </Link>

          <h1 className="font-[600] ml-[16px] text-[36px] text-[#374051]">
            {name}
          </h1>
        </div>
        <QuestionButton />
        <div className="flex justify-center items-center  gap-7">
          <div className="bg-[#ff3957] flex gap-2 px-3 py-1.5 justify-center items-center rounded-[6px]">
            <Image src={ClockIcon} alt="" height={18} width={18} />
            <p className="text-[21px] leading-[21px] font-[400] text-white">
              00:00
            </p>
          </div>

          <Image
            className="h-[30px] w-[30px] cursor-pointer"
            onClick={() => setToggle(!toggle)}
            src={NotificationIcon}
            alt="Pattern"
            height={20}
            width={20}
          />
          {toggle && (
            <div
              className={`absolute bg-white top-[3%] right-[3%]
              z-[200]  h-[500px] 
          w-[550px] shadow-lg rounded-lg p-6 border  ${
            toggle ? "block" : "hidden"
          }`}
            >
              <h1 className="text-[24px] leading-[24px] font-[500]">
                Notifications
              </h1>
              <div className="mt-6 space-y-2">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg flex flex-col justify-between items-start mb-3 ${
                      notification.read
                        ? "bg-gray-100"
                        : "bg-white border-l-4 border-red-500"
                    }`}
                  >
                    <div className="flex justify-start items-start gap-3">
                      {!notification.read ? (
                        <Image src={Notificetion} alt="Noti" />
                      ) : (
                        <Image src={Marked} alt="Noti" />
                      )}

                      <div>
                        <div className="">
                          <div className="text-[21px] w-[27rem] justify-between flex items-center leading-[21px] gap-[15rem] font-[700] text-[#374051]">
                            {notification.title}
                            <button
                              className="text-gray-400 hover:text-red-500"
                              onClick={() =>
                                removeNotification(notification.id)
                              }
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <div className="text-[18px] mt-2 leading-[21px] text-[#4B5462] font-[400]">
                            {notification.message}
                          </div>
                        </div>
                        <div
                          className={`flex ${
                            notification.read ? "hidden" : ""
                          } items-center justify-between gap-20 w-[27rem] space-x-2 mt-2`}
                        >
                          {notification.linkText && (
                            <a
                              href={notification.link}
                              className="text-[18px] leading-[18px] font-[700] text-blue-500"
                            >
                              {notification.linkText}
                            </a>
                          )}
                          {!notification.read && (
                            <div className="flex justify-center items-center gap-[10px]">
                              <div
                                className="flex justify-center items-center gap-1 text-[12px] leading-[12px] cursor-pointer font-[500] text-[#FF3957]"
                                onClick={() => markAsRead(notification.id)}
                              >
                                Mark as Read
                                <Image
                                  className="h-[12px] w-[12px]"
                                  src={RightIcon}
                                  alt="Right"
                                />
                              </div>
                              <div className="text-[12px] leading-[12px] font-[700] text-[#BFC3CB]">
                                23 min
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* <DropDown data={["One","Two"]} label="Select" handleSelect={()=>{}} selected="" /> */}
        </div>
      </div>

      <div className="p-5">{children}</div>
    </div>
  );
};

export default HeaderCard;
