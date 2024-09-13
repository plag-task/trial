import React from "react";
import SearchFilter from "../role-management/components/search-filter/page";
import { SVG } from "@/app/assets/icons";
import ButtonComponent from "@/app/components/button";

const ConfigurationList = () => {
  return (
    <>
      <div className="rounded-[40px] p-[16px] bg-white">
        <div className="">
          <div className="mb-[20px]">
            <SearchFilter title="Configuration List" className="text-bold" />
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    12
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Bio Character Limit
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    $100 - $200
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Max Interest Value
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    5 pcs
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                User ID Verification Level: Sumsub level
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    12
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Instant Call Schedule
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    $100 - $200
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Maximum Swipes Allowed
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    5 pcs
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Swipe Hours
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    5 pcs
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Min Images Allowed
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    34
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Maximum Video Size (Mb)
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    12
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Swipe Limit Messages
              </p>
            </div>
            <div className="">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    5 pcs
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Max Images Allowed
              </p>
            </div>
            <div className="">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    5 pcs
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                No-Show Block Time in Minutes
              </p>
            </div>
            <div className="">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    34
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Voice Prompt Questions
              </p>
            </div>
          </div>

          <div className="text-end mt-6">
            <ButtonComponent ButtonName="Save" className="w-[192px] h-[50px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigurationList;
