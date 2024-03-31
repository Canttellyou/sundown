"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Navbar } from "..";
import HeroSection from "./HeroSection";
import VideoBox from "./VideoBox";
import MarqueSlider from "../MarqueSlider";
import { marqueList } from "@/utils/constants";
import FeaturedProducts from "./FeaturedProducts";
import Projects from "./Projects";
import Process from "./Process";
import FeaturedBrands from "./FeaturedBrands";
import Footer from "../Footer";
import { useScroll, useTransform, motion } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";

export interface FooterHeightContextProps {
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
}

export const FooterHeightContext =
  createContext<FooterHeightContextProps | null>(null);

const Homepage = () => {
  const targetRef = useRef(null);
  const [height, setHeight] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  // const marginBottom = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothTouch: true }}>
        <FooterHeightContext.Provider value={{ height, setHeight }}>
          <motion.div
            ref={targetRef}
            style={{ marginBottom: height, width: "100%" }}
            className={`bg-[#efeae3] z-[99] `}
          >
            <Navbar />
            <HeroSection />
            <VideoBox />
            <MarqueSlider list={marqueList} />
            <FeaturedProducts />
            <Projects />
            <Process />
            <FeaturedBrands />
          </motion.div>
          <Footer />
        </FooterHeightContext.Provider>
      </ReactLenis>
    </div>
  );
};

export default Homepage;
