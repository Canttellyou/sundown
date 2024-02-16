"use client";
import { defaultColors } from "@/utils/colors";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const RotatingBallsTwo = () => {
  return (
    <StyledRotatingBallsTwo>
      <div className="balls-container">
        <div className="ball-one" />
        <div className="ball-two" />
        <div className="ball-three"></div>
      </div>
    </StyledRotatingBallsTwo>
  );
};

const StyledRotatingBallsTwo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes ballOneMotion {
    0% {
      top: 1rem;
      right: 0;
    }

    100% {
      top: 3rem;
      right: 1rem;
    }
  }

  @keyframes ballTwoMotion {
    0% {
      top: -2rem;
      left: 2rem;
    }

    100% {
      top: 2rem;
      left: 1rem;
    }
  }
  @keyframes ballThreeMotion {
    0% {
      top: -2rem;
      left: 0;
    }

    100% {
      top: 1.5rem;
      left: 3rem;
    }
  }

  .balls-container {
    width: 35vw;
    height: 35vw;
    position: relative;
    top: 20%;

    & > * {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
    }
    .ball-one {
      background-color: ${defaultColors.primaryOrange};
      z-index: -3;
      filter: blur(35px);
      animation: ballOneMotion 1.5s ease infinite alternate-reverse;
    }
    .ball-two {
      background-color: #ff9831;
      z-index: -4;
      animation: ballTwoMotion 1.65s ease infinite alternate-reverse;
      filter: blur(15px);
    }
    .ball-three {
      background-color: #ff9831;
      z-index: -4;
      animation: ballTwoThree 1.7s ease infinite alternate-reverse;
      filter: blur(15px);
    }
  }
`;

export default RotatingBallsTwo;
