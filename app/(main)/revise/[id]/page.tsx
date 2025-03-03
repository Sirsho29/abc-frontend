import React from "react";
import SecondaryHeader from "@/app/_containers/SecondaryHeader";
import CircularTag from "../_components/CircularTag";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SavedIcon from '@/assets/svg/reviceIcons/saved.svg'
const formulas = [
  { name: "Future Value (FV)", formula: "FV = PV × (1 + r)" },
  { name: "Present Value (PV)", formula: "PV = (1 + r)^n × FV" },
  {
    name: "Future Value of an Annuity (FVA)",
    formula: "FVA = PMT × [(1 + r)^n - 1]",
  },
];
const page = () => {
  return (
    <SecondaryHeader returnurl="/revise" name="Revise">
      <div className="flex flex-col gap-3">
        <h1 className="text-[#374051] text-[24px] leading-[24px] font-[700] w-full flex justify-between ">
          Ratio & Proportions{" "}
          <span>
            <Image className="cursor-pointer " src={SavedIcon} alt="Saved" />
          </span>
        </h1>
        <div className="py-5  cursor-pointer px-4 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-col font-[400] bg-white">
          <h1 className="text-[#374051] text-[21px] leading-[21px] font-[700] mb-3">
            Summary :
          </h1>
          <p className="text-[18px] leading-[18px] font-[400] text-[#6c7180]">
            The time value of money (TVM) is a financial principle stating that
            money available today is worth more than the same amount in the
            future due to its potential earning capacity. This core concept in
            finance highlights the importance of interest rates, investment
            opportunities, and inflation. TVM is used to compare investment
            options, calculate future cash flows, and determine the present
            value of future earnings, helping individuals and businesses make
            informed financial decisions. Common applications include discounted
            cash flow analysis, loan amortization, and retirement planning.
          </p>
        </div>

        <div className="py-4  cursor-pointer px-4 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-col font-[400] bg-white">
          <h1 className="text-[#374051] text-[21px] leading-[21px] font-[700] mb-3">
            Formulas :
          </h1>
          <div className="border border-[#71717a] rounded-md overflow-hidden">
            <table className="w-full border-[#71717a] border-collapse">
              <tbody className="text-[18px] leading-[18px] font-[500]">
                {formulas.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-t-[#71717a] first:border-t-0 hover:bg-gray-100"
                  >
                    <td className="p-3 text-[#71717a] font-medium text-center">
                      {item.name}
                    </td>
                    <td className="text-center">|</td>
                    <td className="p-3 text-blue-600  text-center">
                      {item.formula}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="py-4  cursor-pointer px-4 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-4 justify-between flex-col font-[400] bg-white">
          <h1 className="text-[#374051] text-[21px] leading-[21px] font-[700] mb-3">
            Recommended Topics :
          </h1>
          <div className="flex gap-2 w-full">
            <CircularTag name="Time Value of Money" />
            <CircularTag name="Ethics in Practice" />
            <CircularTag name="Financial Ratios" />
            <CircularTag name="Cost of Capital" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button
            className="text-center  w-fit border bg-[#eef2ff] border-[#bfcfff]"
            variant={"secondary"}
          >
            MARK AS COMPLETED
          </Button>
        </div>
      </div>
    </SecondaryHeader>
  );
};

export default page;
