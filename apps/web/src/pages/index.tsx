import type { NextPage } from "next";
import Head from "next/head";

import CallToAction from "../components/Landing/CallToAction";
import FeaturedOn from "../components/Landing/FeaturedOn";
import Hero from "../components/Landing/Hero";
import HowItWorks from "../components/Landing/HowItWorks";
import ImageCarousel from "../components/Landing/ImageCarousel";
import Footer from "../components/Footer";
import Blog from "../components/Landing/Blog";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Afrigives</title>
      </Head>
      <div className="flex justify-center mt-[56px] sm:mt-[120px] px-4">
        <Hero />
      </div>
      <div className="mt-[8vh] sm:mt-[13vh]">
        <ImageCarousel />
      </div>
      <div className="mt-[13vh] px-4">
        <FeaturedOn />
      </div>
      <div className="mt-[22vh] sm:mt-[25vh] px-4">
        <CallToAction />
      </div>

      <div className="mt-[28vh] sm:mt-[28vh] px-4">
        <CallToAction reverse />
      </div>

      <div className="mt-[28vh] sm:mt-[28vh] px-4">
        <CallToAction />
      </div>

      <div className="mt-[20vh] sm:mt-[24vh] px-4">
        <HowItWorks />
      </div>

      <div className="mt-[20vh] sm:mt-[24vh] mb-[15vh] sm:mb-[20vh] px-4">
        <Blog />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
