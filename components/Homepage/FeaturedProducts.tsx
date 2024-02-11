"use client";
import { nikeBoard } from "@/images";
import { defaultColors } from "@/utils/colors";
import { defaultStyles, fonts } from "@/utils/styling";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FeaturedProducts = () => {
  return (
    <StyledFeaturedProducts>
      <div className="featured-content">
        <section className="who-container">
          <h1>
            We are a group of design-driven, goal-focused creators, producers,
            and designers who believe that the details make all the difference.
          </h1>

          <div className="we-do">
            <div className="image-container">
              <Image src={nikeBoard} alt="Nike detail shot" />
            </div>
            <div className="we-do_desc">
              We love to create, we love to solve, we love to collaborate, and
              we love to turn amazing ideas into reality. We’re here to partner
              with you through every step of the process and know that
              relationships are the most important things we build.
            </div>
          </div>
        </section>
        <div className="featured-header">
          <div className="dot"></div>
          <div>Featured Projects</div>
        </div>
      </div>
    </StyledFeaturedProducts>
  );
};

const StyledFeaturedProducts = styled.div`
  padding: 0 ${defaultStyles.paddingHorizontal};
  margin-top: 8vw;
  width: 100%;

  .who-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 calc(${defaultStyles.paddingHorizontal} + 2%);

    h1 {
      max-width: 55.25vw;
      font-size: 5.25vw;
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.03em;
    }
  }

  .we-do {
    margin-top: 11vw;
    max-width: 22vw;
    .image-container {
      width: 100%;
      overflow: hidden;
      border-radius: 0.5em;
    }

    &_desc {
      font-family: ${fonts.secondary}, sans-serif;
      margin-top: 2vw;
      font-weight: 400;
      font-size: 1.2vw;
      line-height: 1.4;
    }
  }

  .featured-header {
    margin-top: 5vw;
    font-family: ${fonts.secondary}, sans-serif;
    text-transform: uppercase;
    font-size: 1vw;
    display: flex;
    align-items: center;
    column-gap: 10px;
    .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${defaultColors.primaryOrange};
      align-self: center;
      margin-bottom: 2px;
    }
  }
`;

export default FeaturedProducts;
