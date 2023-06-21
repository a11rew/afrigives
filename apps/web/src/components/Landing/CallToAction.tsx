import React from "react";
import Image, { type StaticImageData } from "next/image";

import CTAStroke from "../../assets/sprites/CTAStroke.svg";

const CallToAction = ({
  reverse,
  image,
  text,
}: {
  reverse?: boolean;
  image: StaticImageData;
  text: string;
}) => {
  return (
    <div
      className={`m-auto flex flex-col justify-center md:w-[85.5%] md:flex-row ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <div className={`flex md:w-1/2 ${reverse ? "md:pl-5" : "justify-end"}`}>
        <div className="relative h-[344px] w-full bg-gradient-to-b from-[#F5F5F5] lg:w-[606px] ">
          <div
            className={`absolute hidden md:block ${
              reverse
                ? "-left-[110px] -scale-x-100 scale-y-100"
                : "-right-[110px]"
            } -top-7`}
          >
            <CTAStroke />
          </div>

          <div className="absolute -top-[35%] left-0 right-0 mx-auto my-0 w-fit scale-[80%]">
            <Image src={image} alt="Screenshot of the Afrigives app" />
          </div>
        </div>
      </div>

      <div
        className={`flex items-center text-center md:w-1/2 md:pl-28 md:text-left ${
          reverse && "md:justify-end md:pl-0 md:pr-28 md:text-right"
        }`}
      >
        <div className={`mt-[30%] sm:mt-[20%] md:mt-0`}>
          <h3 className="mb-8 text-2xl leading-[39.58px] text-[#006633] lg:max-w-[330px] lg:text-[1.9rem]">
            {text}
          </h3>
          <div className={`flex ${reverse && "justify-end"}`}>
            <button className="flex w-full items-center justify-center bg-[#006633] py-8 text-white outline outline-1 md:max-w-[293px]">
              See Figma Prototype
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
