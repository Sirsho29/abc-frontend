"use client";
import { useState } from "react";
import SecondaryHeader from "@/app/_containers/SecondaryHeader";
import EditProfile from "../_components/EditProfile";
import ChangePassword from "../_components/ChangePassword";

const page = () => {
  const [currentTab, setCurrentTab] = useState<"editprofile" | "cpassword">(
    "editprofile"
  );
  return (
    <SecondaryHeader returnurl="/profile" name="Profile">
      <div>
        <div className="w-full  p-[15px] rounded-[6px] mt-2">
          <div className="flex flex-col w-full">
            <div className="flex flex-row w-full items-center gap-x-6">
              <div
                className="flex flex-col cursor-pointer relative"
                onClick={() => {
                  setCurrentTab("editprofile");
                }}
              >
                <span
                  className="text-[14] font-[400] font-DMSans"
                  style={{
                    color: currentTab === "editprofile" ? "#5249AA" : "#666666",
                  }}
                >
                  Edit Profile
                </span>
                {currentTab === "editprofile" ? (
                  <div
                    className="flex flex-1 border-[2px] rounded-[2px] absolute bottom-[-6px] left-0 right-0"
                    style={{
                      borderColor: "#4e77f3",
                    }}
                  />
                ) : null}
              </div>
              <div
                className="flex flex-col cursor-pointer relative"
                onClick={() => {
                  setCurrentTab("cpassword");
                }}
              >
                <span
                  className="text-[14] font-[400] font-DMSans"
                  style={{
                    color: currentTab === "cpassword" ? "#5249AA" : "#666666",
                  }}
                >
                  Change Password
                </span>
                {currentTab === "cpassword" ? (
                  <div
                    className="flex flex-1 border-[2px] rounded-[2px] absolute bottom-[-6px] left-0 right-0"
                    style={{
                      borderColor: "#4e77f3",
                    }}
                  />
                ) : null}
              </div>
            </div>
            <div
              className="flex flex-1 border-[2px] rounded-[2px] mt-[2px]"
              style={{
                borderColor: "#d1d5dc",
              }}
            />
          </div>
          <div className="w-full mt-3">
            {currentTab === "editprofile" && <EditProfile />}
            {currentTab === "cpassword" && <ChangePassword />}
          </div>
        </div>
      </div>
    </SecondaryHeader>
  );
};

export default page;
