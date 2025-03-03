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

const DeletePopUp = ({
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
      <DialogContent className="w-[490px] max-w-[90vw] rounded-lg backdrop-blur-lg border-none sm:rounded-[12px]">
        <DialogHeader>
          <DialogTitle className="hidden"></DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
          <div className="flex flex-col">
            <div className="text-[25px] mb-[30px] leading-[27px] font-[400] text-[#000000]">
              Are you sure you want to change your Password?
            </div>
            <div className="flex justify-center items-center gap-[42px]">
              <button
                onClick={handleClose}
                className="bg-[#527DFF] border-none  text-white text-[18px] leading-[18px] border border-[#bfcfff] shadow-sm w-fit px-6 py-3 rounded-[9px]  font-[700]"
              >
                CANCEL
              </button>
              <button
                onClick={handleClose}
                className="bg-[#e4e4e7] border-none  text-[#4b5462] text-[18px] leading-[18px] border border-[#bfcfff] shadow-sm w-fit px-6 py-3 rounded-[9px]  font-[700]"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePopUp;
