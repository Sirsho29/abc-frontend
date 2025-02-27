import Image from "next/image";
import Hero from "@/assets/svg/profileIcons/change-password.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ChangePassword = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-4 w-full">
      <Image src={Hero} alt="Hero" />

      <div>
        <p className="font-[400] text-base mb-1">Old Password</p>
        <Input className="w-[500px] " type="password" placeholder="Password" />
      </div>
      <div>
        <p className="font-[400] text-base mb-1">New Password</p>
        <Input className="w-[500px] " type="password" placeholder="Password" />
      </div>
      <div>
        <p className="font-[400] text-base mb-1">Rewrite new password</p>
        <Input className="w-[500px] " type="password" placeholder="Password" />
      </div>
      <Button className="mt-2" variant={'blue'}>SAVE CHANGES</Button>
    </div>
  );
};

export default ChangePassword;
