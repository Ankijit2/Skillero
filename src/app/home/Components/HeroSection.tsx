"use client";

// import { Button } from "@nextui-org/react";
import { Inknut_Antiqua } from "next/font/google";
import { CldImage } from 'next-cloudinary';
import { Button } from "@nextui-org/react";
import React from "react";

const inknutAntiqua = Inknut_Antiqua({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"], // Subset for the font (latin)
  display: "swap", // Optional, adds font-display: swap
});
function HeroSection() {
  return (
    <div className="mt-32 flex justify-evenly flex-col md:flex-row">
   <CldImage
      src="https://res.cloudinary.com/dv6afswbt/image/upload/v1726233128/hero-section-skillero_bll7u7.svg"
      alt="hero"
     // Ensures responsiveness
      width={696}              // Native width
      height={486}             // Native height, preserves aspect ratio
      unoptimized
        sizes="(max-width: 640px) 100vw,
               (max-width: 768px) 55vw,
               (max-width: 1239uuuupx) 40vw,
               696px"       // Full width (696px) for larger screens
    />
      <div
        className={`${inknutAntiqua.className}   mt-16`}
      >
        <p className="text-2xl leading-loose text-secondary">Learn Today, Lead Tomorrow <br/>Courses to Elevate, Jobs to Empower!</p>
        <div className="flex gap-6 mt-10">
          <Button color="primary"  className="rounded-full">
            Explore courses
          </Button>
          <Button color="primary"  variant={"bordered"} className="rounded-full " >
            Search Jobs
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
