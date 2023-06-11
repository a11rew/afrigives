import React from "react";
import Image from "next/image";

import TC from "../../assets/images/tc.png";

const FeaturedOn = () => {
  return (
    <div>
      <h2 className="text-center">FEATURED ON</h2>
      <div className="flex justify-center grayscale gap-10">
        <Image src={TC} alt="Techcrunch logo" />
        <Image src={TC} alt="Techcrunch logo" />
        <Image src={TC} alt="Techcrunch logo" />
      </div>
    </div>
  );
};

export default FeaturedOn;
