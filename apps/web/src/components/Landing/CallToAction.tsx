import React from "react";
import Image, { type StaticImageData } from "next/image";

import CTAStroke from "../../assets/sprites/CTAStroke.svg";

const CallToAction = ({
  reverse,
  image,
  text,
  cta,
}: {
  reverse?: boolean;
  image: StaticImageData;
  text: string;
  cta: {
    text: string;
    link: string;
  };
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
            } -top-2`}
          >
            <CTAStroke />
          </div>

          <div className="scae-[80%] absolute -top-[35%] left-0 right-0 mx-auto my-0 w-fit max-w-[298px]">
            <Image src={image} alt="Screenshot of the Afrigives app" />
          </div>
        </div>
      </div>

      <div
        className={`flex items-center justify-center text-center md:w-1/2 md:justify-start md:text-left ${
          reverse ? "md:justify-end md:pr-28 md:text-right" : "md:pl-28"
        }`}
      >
        <div className={`mt-[40%] max-w-[293px] sm:mt-[30%] md:mt-0`}>
          <h3 className="text-primary-green mb-8 text-2xl leading-[39.58px] lg:max-w-[330px] lg:text-[1.9rem]">
            {text}
          </h3>
          <div className={`flex ${reverse && "md:justify-end"}`}>
            <a href={cta.link} className="w-full">
              <button className="bg-primary-green flex w-full items-center justify-center py-8 text-white outline outline-1">
                {cta.text}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
