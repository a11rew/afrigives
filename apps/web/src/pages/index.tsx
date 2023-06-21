import type { NextPage } from "next";
import Head from "next/head";

import CampaignPromo from "../assets/images/promo/Campaign.png";
import DonationPromo from "../assets/images/promo/DonationGroup.png";
import DonationStats from "../assets/images/promo/DonationStats.png";
import Footer from "../components/Footer";
import CallToAction from "../components/Landing/CallToAction";
import Hero from "../components/Landing/Hero";
import HowItWorks from "../components/Landing/HowItWorks";
import ImageCarousel from "../components/Landing/ImageCarousel";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Afrigives</title>
      </Head>
      <div className="mt-[56px] flex justify-center px-4 sm:mt-[120px]">
        <Hero />
      </div>
      <div className="mt-[8vh] sm:mt-[13vh]">
        <ImageCarousel />
      </div>

      <div className="mt-[22vh] px-4 sm:mt-[25vh]">
        <CallToAction
          image={CampaignPromo}
          text="Find causes you care about easily"
        />
      </div>

      <div className="mt-[28vh] px-4 sm:mt-[28vh]">
        <CallToAction
          reverse
          image={DonationPromo}
          text="Create a donation group, raise support for your cause"
        />
      </div>

      <div className="mt-[28vh] px-4 sm:mt-[28vh]">
        <CallToAction
          image={DonationStats}
          text="Make a difference, track your impact"
        />
      </div>

      <div className="mb-[15vh] mt-[20vh] px-4 sm:mb-[20vh] sm:mt-[24vh]">
        <HowItWorks />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
