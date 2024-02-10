import React from "react";
import { Navbar } from "..";
import HeroSection from "./HeroSection";
import VideoBox from "./VideoBox";
import MarqueSlider from "../MarqueSlider";
import { marqueList } from "@/utils/constants";
// const Navbar = dynamic(() => import("@/components/Navbar"), {
//   ssr: false,
// });

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VideoBox />
      <MarqueSlider list={marqueList} />
    </div>
  );
};

export default Homepage;
