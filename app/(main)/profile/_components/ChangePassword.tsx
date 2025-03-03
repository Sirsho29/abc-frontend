import Image from "next/image";
import Hero from "@/assets/svg/profileIcons/change-password.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ChangePassword = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center p-4 w-full">
      <Image src={Hero} alt="Hero" className="h-[210px] w-[210px]" />

      <div>
        <p className="text-[18px] leading-[18px] font-[600] text-[#6C7180]  mb-2">
          Old Password
        </p>
        <Input
          className="w-[500px] text-[18px] leading-[18px] font-[400]"
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        <p className="text-[18px] leading-[18px] font-[600] text-[#6C7180] mb-2">
          New Password
        </p>
        <Input
          className="w-[500px] text-[18px] leading-[18px] font-[400]"
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        <p className="text-[18px] leading-[18px] font-[600] text-[#6C7180] mb-2">
          Rewrite new password
        </p>
        <Input className="w-[500px] " type="password" placeholder="Password" />
      </div>
      <Button className="mt-2" variant={"blue"}>
        SAVE CHANGES
      </Button>
    </div>
  );
};

export default ChangePassword;
