import React from "react";
import NameInput from "./CustomInput";
import NameIcon from "@/assets/svg/profileIcons/namecard.svg";
import EmailIcon from "@/assets/svg/profileIcons/email.svg";
import PasswordIcon from "@/assets/svg/profileIcons/password.svg";
import PhoneNumberInput from "./PhoneInput";
import { DatePickerDemo } from "./Datepicker";
import Image from "next/image";
import PFP from "@/assets/images/profileImages/uploadpfp.png";
import { Button } from "@/components/ui/button";

const EditProfile = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div>
        <Image src={PFP} alt="pfp" className="h-[8rem] w-[8rem] cursor-pointer" />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <NameInput
          icon={NameIcon}
          placeholder="| Marvin McKinney"
          label="Name"
        />
        <NameInput
          icon={EmailIcon}
          placeholder="| marvin@email.com"
          label="Email"
        />
        <PhoneNumberInput />
        <NameInput
          icon={PasswordIcon}
          placeholder="| marvin@email.com"
          label="Password"
        />

        <DatePickerDemo />
        <Button className="mt-4" variant={"blue"}>
          SAVE CHANGES
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
