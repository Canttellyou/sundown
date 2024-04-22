"use client";
import { nikeBoard } from "@/images";
import { defaultColors } from "@/utils/colors";
import { defaultStyles, fonts } from "@/utils/styling";
import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import RotatingBallsTwo from "../RotatingBallsTwo";
import FeaturesHeading from "../FeaturesHeading";

const FeaturedProducts = () => {
  const screenWidth = window.screen.width;

  return (
    <StyledFeaturedProducts>
      <div className="featured-content">
        <section className="who-container">
          {screenWidth > 500 && <RotatingBallsTwo width="35vw" height="35vw" />}
          {screenWidth <= 500 && (
            <RotatingBallsTwo width="80vw" height="80vw" />
          )}

          <h1>
            We are a group of design-driven, goal-focused creators, producers,
            and designers who believe that the details make all the difference.
          </h1>

          <div className="we-do">
            <div className="image-container">
              <Image priority={true} src={nikeBoard} alt="Nike detail shot" />
            </div>
            <div className="we-do_desc">
              We love to create, we love to solve, we love to collaborate, and
              we love to turn amazing ideas into reality. We’re here to partner
              with you through every step of the process and know that
              relationships are the most important things we build.
            </div>
          </div>
        </section>
        <FeaturesHeading heading="featured projects" />
      </div>
    </StyledFeaturedProducts>
  );
};

const StyledFeaturedProducts = styled.div`
  padding: 0 ${defaultStyles.paddingHorizontal};
  margin-top: 12vw;
  width: 100%;

  .who-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 calc(${defaultStyles.paddingHorizontal} + 2%);
    position: relative;
    z-index: 20;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      padding: 0 0;
    }

    h1 {
      max-width: 55.25vw;
      font-size: 4.5vw;
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.03em;
      @media screen and (max-width: 500px) {
        font-size: 2rem;
        max-width: 100%;
      }
    }
  }

  .we-do {
    margin-top: 11vw;
    max-width: 17.5vw;
    .image-container {
      width: 100%;
      overflow: hidden;
      border-radius: 0.5em;
    }

    @media screen and (max-width: 500px) {
      max-width: 80%;
    }

    &_desc {
      font-family: ${fonts.secondary}, sans-serif;
      margin-top: 2vw;
      font-weight: 400;
      font-size: 0.95vw;
      line-height: 1.4;
      @media screen and (max-width: 500px) {
        font-size: 1rem;
        max-width: 100%;
        margin-top: 2rem;
      }
    }
  }
`;

export default FeaturedProducts;
