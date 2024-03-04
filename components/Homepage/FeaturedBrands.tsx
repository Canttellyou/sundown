"use client";
import React, { useRef } from "react";
import FeaturesHeading from "../FeaturesHeading";
import styled from "styled-components";
import { defaultStyles } from "@/utils/styling";
import Carousel from "../Carousel";
import { featuredBrands } from "@/utils/constants";
import Footer from "../Footer";
import { motion, useScroll, useTransform } from "framer-motion";

const FeaturedBrands = () => {
  return (
    <StyledFeaturedBrands>
      <div className="header-container">
        <FeaturesHeading heading="featured projects" />
      </div>
      <Carousel data={featuredBrands} />
    </StyledFeaturedBrands>
  );
};

const StyledFeaturedBrands = styled(motion.div)`
  background-color: #efeae3;
  .header-container {
    padding: 0 ${defaultStyles.paddingHorizontalBig};
    margin-bottom: 2rem;
  }
`;

export default FeaturedBrands;
