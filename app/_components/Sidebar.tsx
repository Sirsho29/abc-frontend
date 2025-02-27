import Logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SidebarList from "./SidebarList";
//import { AuthContext } from "../Provider";
import { useContext } from "react";
import LogoutIcon from '@/assets/svg/sidebarIcons/log-out.svg'

const ModalOverlay = ({
  setter,
}: {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div
    className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-[black/50] z-30`}
    onClick={() => {
      setter((oldVal: boolean) => !oldVal);
    }}
  />
);

const Sidebar = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //const { logOut } = useContext(AuthContext);
  return (
    <>
      <div
        className={`bg-[#263c7e] text-[16px] h-screen flex flex-col justify-between pb-[50px] w-[20%] max-md:w-[55%] transition-[margin-left] ease-in-out duration-500 fixed md:sticky top-0 bottom-0 left-0 z-40 ${
          show ? " ml-0" : " ml-[-55%] md:ml-0"
        }`}
      >
        <div>
          <div className="flex mb-[60px] pl-[36px] mt-[4.5rem]">
            <Image
              src={Logo.src}
              alt="seminaar-room-logo"
              className="w-[85%] object-contain"
              width={100}
              height={100}
            />
          </div>
          <SidebarList setShow={setShow} />
        </div>
        <ul className="flex ">
          <li
            className={cn(
              "py-3 cursor-pointer px-[30px] flex items-center gap-3 text-[14px]",
              " text-[#F4EBF5] font-[500] ml-[14px]"
            )}
            onClick={() => {
              alert("Log Out");
            }}
          >
            <Image
              src={LogoutIcon}
              alt="seminaar-room-logo"
              //className="w-[85%] object-contain"
              width={18}
              height={18}
            />
            Logout
          </li>
        </ul>
      </div>
      {show ? <ModalOverlay setter={setShow} /> : <></>}
    </>
  );
};

export default Sidebar;
