import React from "react";
import { isAndroid, isIOS } from "react-device-detect";
import { FaAndroid } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

const CallToAction = () => {
  return (
    <div id="download" className="max-w-[594px]">
      <h2 className="text-center text-3xl font-medium leading-[56px] md:text-5xl">
        Make cloth donations to{" "}
        <span className="text-[#346734]">anywhere in Africa</span> easily with
        Afrigives
      </h2>
      <div className="mt-12 flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0">
        {!isIOS && (
          <button className="flex w-full items-center justify-center gap-[18px] py-8 outline outline-1">
            <FaAndroid size={24} />
            <p className="font-medium">Download on Playstore</p>
          </button>
        )}
        {!isAndroid && (
          <button className="flex w-full items-center justify-center gap-[18px] py-8 outline outline-1">
            <GrAppleAppStore size={24} />
            <p className="font-medium">Get on App Store</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default CallToAction;
