import React from "react";
import { FaAndroid } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full min-h-[64.03vh] lg:h-[616px] bg-[#111] px-4 lg:px-[7.2%] pt-12 lg:pt-[124px] pb-12 flex flex-col justify-between">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-2xl lg:text-5xl text-white leading-8 lg:leading-[56px]">
            Download the <br />{" "}
            <span className="text-[#006633]">Afrigives</span> mobile app
          </h1>
          <div className="flex flex-col gap-5 mt-12 lg:flex-row">
            <button className="flex bg-white items-center justify-center gap-[18px] outline outline-1 py-8 w-full">
              <FaAndroid size={24} />
              <p className="font-medium">Download on Playstore</p>
            </button>
            <button className="flex bg-white items-center justify-center gap-[18px] outline outline-1 py-8 w-full">
              <GrAppleAppStore size={24} />
              <p className="font-medium">Get on App Store</p>
            </button>
          </div>
        </div>
        <div className="flex mt-12 lg:justify-center lg:mt-0 lg:w-1/2">
          <div>
            <h3 className="uppercase text-[#E8E8E8] opacity-[48%] mb-7">
              Useful links
            </h3>
            <div className="flex flex-col gap-6 text-2xl underline lg:gap-14">
              <a className="block text-white">View Code on GitHub</a>
              <a className="block text-white">Read Case Study on Medium</a>
              <a className="block text-white">See Dribbble Screens</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-white lg:justify-between">
        <div className="flex flex-col gap-4 lg:gap-16 lg:flex-row">
          <div className="flex justify-center gap-2 mt-20 lg:mt-0">
            <p className="text-[#E8E8E8] opacity-[48%]">2022</p>
            <p className="text-[#E8E8E8] opacity-[48%] lg:hidden">
              Hobby Project
            </p>
          </div>

          <div className="flex gap-2 lg:gap-8 ">
            <span>Designed by Eloke Ikiliagwu</span>
            <span>|</span>
            <span>Developed by Andrew Glago</span>
          </div>
        </div>
        <p className="text-[#E8E8E8] opacity-[48%] hidden lg:block">
          Hobby Project
        </p>
      </div>
    </div>
  );
};

export default Footer;
