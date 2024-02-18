import React from "react";
import { Navbar } from "..";
import HeroSection from "./HeroSection";
import VideoBox from "./VideoBox";
import MarqueSlider from "../MarqueSlider";
import { marqueList } from "@/utils/constants";
import FeaturedProducts from "./FeaturedProducts";
import Projects from "./Projects";
import Process from "./Process";
import FeaturedBrands from "./FeaturedBrands";
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
      <FeaturedProducts />
      <Projects />
      <Process />
      <FeaturedBrands />
    </div>
  );
};

export default Homepage;
