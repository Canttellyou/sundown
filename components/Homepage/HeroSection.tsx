"use client";
import { defaultStyles, fonts } from "@/utils/styling";
import React from "react";
import styled from "styled-components";
import RotatingBalls from "../RotatingBalls";
import Image from "next/image";
import { metalFlower } from "@/images";
import { defaultColors } from "@/utils/colors";
import RotatingBallsTwo from "../RotatingBallsTwo";

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className="sub-text">
        {/* <div className="transcend-design  relative">
          <div className="circle-container ">
            <div className="absolute z-10 circle logo-circle w-[3rem] h-[3rem] "></div>
          </div>
          <h2 className="logo-text-1">Beyond</h2>
          <h2 className="logo-text-2">Design</h2>
        </div> */}
        <div className=" w-[25vw] h-[25vw] mb-[4rem] ">
          <div className="relative z-10 circle w-full h-full "></div>
        </div>

        <div>
          Beyond Design is a versatile studio dedicated to crafting distinctive,
          comprehensive experiences and spaces.
        </div>
      </div>
      <div className="main-text">Crafting Visual Stories</div>
      <div className="balls-container">
        <RotatingBalls />
      </div>
    </StyledHeroSection>
  );
};

const StyledHeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: ${defaultStyles.paddingHorizontal};
  /* margin-top: 5rem; */

  font-family: ${fonts.primary}, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  .circle {
    border-radius: 50%;
    background-color: ${defaultColors.primaryBlue};
    /* filter: blur(10px); */
    background-image: radial-gradient(
      #92f938,
      ${defaultColors.primaryBlue} 40%
    );
  }

  .logo-circle {
    background: ${defaultColors.primaryBlue};
    mix-blend-mode: difference;
    top: -0.5rem;
    left: -0.8rem;
  }

  .transcend-design {
    margin-bottom: 2rem;
  }

  .balls-container {
    width: 35vw;
    height: 35vw;
    margin-top: 0;
    position: absolute;

    bottom: -50%;
    left: auto;
    right: 0%;
  }

  .logo-text-1 {
    color: ${defaultColors.primaryBlue};
  }

  .logo-text-2 {
    padding-left: 2rem;
  }

  .sub-text {
    letter-spacing: -0.03em;
    font-size: 2.3vw;
    font-weight: 500;
    max-width: 33%;
    line-height: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${defaultColors.primaryWhite};
    background-color: ${defaultColors.primaryBlack};
    padding: 8rem ${defaultStyles.paddingHorizontal} 3.7rem
      ${defaultStyles.paddingHorizontal};
  }

  .main-text {
    letter-spacing: -0.03em;
    text-transform: uppercase;
    font-size: 12vw;
    font-weight: 500;
    line-height: 0.8;
    position: relative;
    padding-bottom: 3.7rem;
    text-align: right;
    max-width: 60%;
    margin-right: 1.25rem;
    object-fit: contain;
  }
`;

export default HeroSection;
