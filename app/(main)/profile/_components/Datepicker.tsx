"use client";

import * as React from "react";
import { format } from "date-fns";
//import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CalenderIcon from "@/assets/svg/profileIcons/dob.svg";
import Image from "next/image";
import { Label } from "@/components/ui/label";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="flex flex-col w-full  items-center">
   
        <Label htmlFor="name" className="text-gray-600 mb-2 items-start mr-[68.6pc]">
          DOB
        </Label>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <Image
                className=" h-5 w-5 ml-[-5px]"
                src={CalenderIcon}
                alt="Calender"
              />

              {date ? format(date, "PPP") : <span>| Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
     
    </div>
  );
}
