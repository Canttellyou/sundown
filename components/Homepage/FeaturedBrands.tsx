"use client";
import React from "react";
import FeaturesHeading from "../FeaturesHeading";
import styled from "styled-components";
import { defaultStyles } from "@/utils/styling";
import Carousel from "../Carousel";
import { featuredBrands } from "@/utils/constants";

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

const StyledFeaturedBrands = styled.div`
  margin-top: 8rem;
  .header-container {
    padding: 0 5rem;
    margin-bottom: 2rem;
  }
`;

export default FeaturedBrands;
