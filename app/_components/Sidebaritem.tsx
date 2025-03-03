"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarItem = (props: {
  route: string;
  aicon: string;
  nicon: string;
  text: string;
  onClick: () => void;
}) => {
  const pathname = usePathname();

  const isHome = pathname === "/" && props.route === "/";
  const isOther = pathname.includes(props.route) && props.route !== "/";

  return (
    <Link href={props.route} onClick={props.onClick}>
      <li
        className={cn(
          " cursor-pointer px-[30px] flex items-center gap-3 ",
          isHome || isOther
            ? " text-[#527dff] font-[800] text-[18px]"
            : " text-[#F4EBF5] font-[600] text-[21px]"
        )}
      >
        <span
          className={cn(
            "cursor-pointer flex items-center gap-3 ",
            isHome || isOther
              ? "bg-white px-3 py-2 rounded-xl w-[80%]"
              : "px-3 py-2 rounded-xl w-[80%]"
          )}
        >
          {isHome || isOther ? (
            <Image
              src={props.aicon}
              className="w-[22px] h-[22px]"
              width={22}
              height={22}
              alt={props.route + "-icon"}
            />
          ) : (
            <Image
              src={props.nicon}
              className="w-[22px] h-[22px]"
              width={22}
              height={22}
              alt={props.route + "-icon"}
            />
          )}

          {props.text}
        </span>
      </li>
    </Link>
  );
};

export default SideBarItem;
