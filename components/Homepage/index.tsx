import React from "react";
import { Navbar } from "..";
import HeroSection from "./HeroSection";
// const Navbar = dynamic(() => import("@/components/Navbar"), {
//   ssr: false,
// });

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Homepage;
