"use client";
import { defaultStyles, fonts } from "@/utils/styling";
import React from "react";
import styled from "styled-components";
import RotatingBalls from "../RotatingBalls";

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className="sub-text">
        Sundown is a multi-disciplinary studio focused on creating unique,
        end-to-end experiences and environments.
      </div>
      <div className="main-text">SPACES THAT INSPIRE</div>
      <RotatingBalls />
    </StyledHeroSection>
  );
};

const StyledHeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 ${defaultStyles.paddingHorizontal};
  margin-top: 12.625vw;
  padding-bottom: 3.75em;
  font-family: ${fonts.primary}, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;

  .sub-text {
    letter-spacing: -0.03em;
    font-size: 2.3vw;
    font-weight: 500;
    max-width: 33%;
    line-height: 1;
  }

  .main-text {
    letter-spacing: -0.03em;
    text-transform: uppercase;
    font-size: 12vw;
    font-weight: 500;
    line-height: 0.8;
    position: relative;
    text-align: right;
    max-width: 47%;
    margin-right: 1.25rem;
    object-fit: contain;
  }
`;

export default HeroSection;
