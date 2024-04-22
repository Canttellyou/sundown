"use client";
import { defaultColors } from "@/utils/colors";
import { fonts } from "@/utils/styling";
import React from "react";
import styled from "styled-components";

const FeaturesHeading = ({ heading }: { heading: string }) => {
  return (
    <StyledFeaturesHeader className="featured-header">
      <div className="dot"></div>
      <div>Featured Projects</div>
    </StyledFeaturesHeader>
  );
};

const StyledFeaturesHeader = styled.div`
  margin-top: 5vw;
  font-family: ${fonts.secondary}, sans-serif;
  text-transform: uppercase;
  font-size: 1vw;
  display: flex;
  align-items: center;
  column-gap: 10px;
  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
    margin-top: 5rem;
  }
  .dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${defaultColors.primaryBlue};
    align-self: center;
    margin-bottom: 2px;
  }
`;

export default FeaturesHeading;
