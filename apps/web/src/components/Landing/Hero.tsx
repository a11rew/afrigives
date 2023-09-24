import React from "react";
import { FaAndroid } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

const CallToAction = () => {
  return (
    <div className="max-w-[594px]" id="download">
      <h2 className="text-center text-3xl font-medium leading-[56px] md:text-5xl">
        Make cloth donations to{" "}
        <span className="text-[#346734]">anywhere in Africa</span> easily with
        Afrigives
      </h2>
      <div className="mt-12 flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0">
        <a
          href="https://play.google.com/store/apps/details?id=com.andrewglago.afrigives"
          className="w-full"
        >
          <button className="hover:bg-primary-green flex w-full items-center justify-center gap-[18px] py-8 outline outline-1 transition-colors duration-300 ease-in-out hover:text-white">
            <FaAndroid size={24} />
            <p className="font-medium">Download on Playstore</p>
          </button>
        </a>
        <button className="hover:bg-primary-green flex w-full items-center justify-center gap-[18px] py-8 outline outline-1 transition-colors duration-300 ease-in-out hover:text-white">
          <GrAppleAppStore size={24} />
          <p className="font-medium">Get on App Store</p>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
