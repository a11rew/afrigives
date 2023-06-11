import React from "react";
import Image from "next/image";

import CTAStroke from "../../assets/sprites/CTAStroke.svg";
import PromoPhone from "../../assets/images/PromoPhone.png";

const CallToAction = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-center md:w-[85.5%] m-auto ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <div className={`md:w-1/2 flex ${reverse ? "md:pl-5" : "justify-end"}`}>
        <div className="relative h-[344px] w-full lg:w-[606px] bg-gradient-to-b from-[#F5F5F5] ">
          <div
            className={`absolute hidden md:block ${
              reverse
                ? "-left-[110px] -scale-x-100 scale-y-100"
                : "-right-[110px]"
            } -top-7`}
          >
            <CTAStroke />
          </div>

          <div className="absolute -top-[35%] w-fit right-0 left-0 mx-auto my-0 scale-[80%]">
            <Image src={PromoPhone} alt="Screenshot of the Afrigives app" />
          </div>
        </div>
      </div>

      <div
        className={`md:w-1/2 flex text-center md:text-left items-center md:pl-28 ${
          reverse && "md:pl-0 md:pr-28 md:justify-end md:text-right"
        }`}
      >
        <div className={`mt-[30%] sm:mt-[20%] md:mt-0`}>
          <h3 className="lg:max-w-[330px] mb-8 text-[#006633] text-2xl lg:text-[1.9rem] leading-[39.58px]">
            Find and donate clothes to causes you care about easily
          </h3>
          <div className={`flex ${reverse && "justify-end"}`}>
            <button className="md:max-w-[293px] flex items-center justify-center outline outline-1 py-8 w-full bg-[#006633] text-white">
              See Figma Prototype
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
