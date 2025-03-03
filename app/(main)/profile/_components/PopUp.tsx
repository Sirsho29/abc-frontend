"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import Image from "next/image";
import SuccessIcon from "@/assets/svg/profileIcons/success.svg";
interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  itemName: string;
  type?: string;
  plural?: boolean;
}

const PopUp = ({
  isOpen,
  onClose,
  onDelete,
  itemName,
  type = "Delete",
  plural = false,
}: DeleteConfirmationModalProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
    return () => {
      setOpen(false);
    };
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[430px] max-w-[90vw] rounded-3xl backdrop-blur-lg border-none sm:rounded-[24px]">
        <DialogHeader>
          <DialogTitle className="text-[#3F3984] font-DM_Sans text-center"></DialogTitle>
          <DialogDescription className="text-center"></DialogDescription>
          <div className="flex w-full flex-col justify-center items-center">
            <Image src={SuccessIcon} alt="" />
            <span className="text-[27px] leading-[27px] font-[600] text-[#0f172a]">
              Success
            </span>
            <span className="text-[21px] text-center leading-[25px] mt-3 font-[600] text-[#8390a2]">
              Your profile has been changed successfully.
            </span>
          </div>
        </DialogHeader>
        <DialogFooter>
          <button
            onClick={handleClose}
            className="bg-[#eef2ff]   text-[#527dff] text-[18px] leading-[18px] border border-[#bfcfff] shadow-sm w-full p-3 rounded-[6px]  font-[600]"
          >
            Continue
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;
