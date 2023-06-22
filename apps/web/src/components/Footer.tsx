import React from "react";
import { FaAndroid } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="flex min-h-[64.03vh] w-full flex-col justify-between bg-[#111] px-4 pb-12 pt-12 lg:h-[616px] lg:px-[7.2%] lg:pt-[124px]">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-2xl leading-8 text-white lg:text-5xl lg:leading-[56px]">
            Download the <br />{" "}
            <span className="text-primary-green">Afrigives</span> mobile app
          </h1>
          <div className="mt-12 flex flex-col gap-5 lg:flex-row">
            <button className="hover:bg-primary-green hover:outline-primary-green flex w-full items-center justify-center gap-[18px] bg-white px-4 py-8 outline outline-1 transition-colors duration-300 ease-in-out hover:text-white">
              <FaAndroid size={24} />
              <p className="font-medium">Download on Playstore</p>
            </button>
            <button className="hover:bg-primary-green hover:outline-primary-green flex w-full items-center justify-center gap-[18px] bg-white px-4 py-8 outline outline-1 transition-colors duration-300 ease-in-out hover:text-white">
              <GrAppleAppStore size={24} />
              <p className="font-medium">Get on App Store</p>
            </button>
          </div>
        </div>
        <div className="mt-12 flex lg:mt-0 lg:w-1/2 lg:justify-center">
          <div>
            <h3 className="mb-7 uppercase text-[#E8E8E8] opacity-[48%]">
              Useful links
            </h3>
            <div className="flex flex-col gap-6 text-2xl underline lg:gap-14">
              <a
                className="block text-white"
                href="https://github.com/a11rew/afrigives"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code on GitHub
              </a>
              <a
                className="block text-white"
                href="https://bootcamp.uxdesign.cc/ui-ux-case-study-online-clothe-donation-5fde02f49b4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Case Study on Medium
              </a>
              <a
                className="block text-white"
                href="https://dribbble.com/shots/15723860-Afrigives-Online-Cloth-Donation-App-Onboarding"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Dribbble Screens
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-white lg:justify-between">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-16">
          <div className="mt-20 flex justify-center gap-2 lg:mt-0">
            <p className="text-[#E8E8E8] opacity-[48%]">2022</p>
            <p className="text-[#E8E8E8] opacity-[48%] lg:hidden">
              Hobby Project
            </p>
          </div>

          <div className="flex gap-2 lg:gap-4">
            <span>Designed by Eloke Ikiliagwu</span>
            <span>|</span>
            <span>Developed by Andrew Glago</span>
          </div>
        </div>
        <p className="hidden text-[#E8E8E8] opacity-[48%] lg:block">
          Hobby Project
        </p>
      </div>
    </div>
  );
};

export default Footer;
