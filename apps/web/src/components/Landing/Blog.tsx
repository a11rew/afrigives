import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

import BlogBoys from "../../assets/images/blog/blog-boys.jpeg";
import BlogGirls from "../../assets/images/blog/blog-girls.jpg";
import BlogTrad from "../../assets/images/blog/blog-trad.jpg";
import BlogWoman from "../../assets/images/blog/blog-woman.jpeg";

const Blog = () => {
  return (
    <div className="lg:px-[104px]">
      <h2 className="font-medium opacity-[48%]">OUR BLOG</h2>
      <div className="flex justify-between">
        <h3 className="mb-14 mt-4 max-w-[374px] text-[1.9rem] leading-[39.58px]">
          Read some stories on the
          <span className="text-primary-green"> impact </span>
          we&apos;re making
        </h3>
        <div className="flex items-center gap-8 font-medium text-white">
          Read all stories
          <button className="bg-primary-green rounded-full p-3">
            <HiArrowRight className="text-white" />
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-5 md:h-[392px] md:flex-row">
          <div className="relative h-[268px] md:h-[392px] md:w-[59.25%]">
            <div className="relative h-full w-full">
              <Image
                alt="Image of little kids"
                src={BlogGirls}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 flex h-[38.01%] w-full items-center justify-between bg-[#0C6D3D] bg-opacity-[56%] px-[5.6%] text-white">
              <div className="flex flex-col gap-1 md:gap-2">
                <h1 className="text-lg font-bold md:text-2xl">
                  Story Headline
                </h1>
                <h2 className="text-xs font-bold md:text-base">
                  Uniform For Kids Campaign
                </h2>
              </div>
              <div>
                <BsArrowRight size={44} />
              </div>
            </div>
          </div>
          <div className="relative h-[268px] md:h-[392px] md:w-[40.74%]">
            <div className="relative h-full w-full">
              <Image
                alt="Image of woman in traditional garb"
                src={BlogWoman}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 flex h-[38.01%] w-full items-center justify-between bg-[#0C6D3D] bg-opacity-[56%] px-[5.6%] text-white">
              <div className="flex flex-col gap-1 md:gap-2">
                <h1 className="text-lg font-bold md:text-2xl">
                  Story Headline
                </h1>
                <h2 className="text-xs font-bold md:text-base ">
                  Uniform For Kids Campaign
                </h2>
              </div>
              <div>
                <BsArrowRight size={44} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-5 md:h-[392px] md:flex-row">
          <div className="relative h-[268px] md:h-[392px] md:w-[40.74%]">
            <div className="relative h-full w-full">
              <Image
                alt="Image of school boys"
                src={BlogBoys}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 flex h-[38.01%] w-full items-center justify-between bg-[#0C6D3D] bg-opacity-[56%] px-[5.6%] text-white">
              <div className="flex flex-col gap-1 md:gap-2">
                <h1 className="text-lg font-bold md:text-2xl">
                  Story Headline
                </h1>
                <h2 className="text-xs font-bold md:text-base ">
                  Uniform For Kids Campaign
                </h2>
              </div>
              <div>
                <BsArrowRight size={44} />
              </div>
            </div>
          </div>
          <div className="relative h-[268px] md:h-[392px] md:w-[59.25%]">
            <div className="relative h-full w-full">
              <Image
                alt="Image of women in traditional garb"
                src={BlogTrad}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 flex h-[38.01%] w-full items-center justify-between bg-[#0C6D3D] bg-opacity-[56%] px-[5.6%] text-white">
              <div className="flex flex-col gap-1 md:gap-2">
                <h1 className="text-lg font-bold md:text-2xl">
                  Story Headline
                </h1>
                <h2 className="text-xs font-bold md:text-base ">
                  Uniform For Kids Campaign
                </h2>
              </div>
              <div>
                <BsArrowRight size={44} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
