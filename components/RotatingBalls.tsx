"use client";
import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { defaultColors } from "@/utils/colors";

const RotatingBalls = () => {
  return (
    <BallsContainer>
      <motion.div
        // initial={{
        //   transform:
        //     "translate3d(0%, -10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-40deg) skew(0deg, 0deg)",
        // }}
        className="ball-one"
        // animate={{
        //   transform:
        //     "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-80deg) skew(0deg, 0deg)",
        // }}
        // transition={{
        //   repeat: Infinity,
        //   duration: 2.65,
        //   repeatType: "reverse",
        // }}
      />
      <motion.div
        // initial={{
        //   transform:
        //     "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-95deg) skew(0deg, 0deg)",
        // }}
        // animate={{
        //   transform:
        //     "translate3d(-15%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-75deg) skew(0deg, 0deg)",
        // }}
        // transition={{
        //   repeat: Infinity,
        //   duration: 2.5,
        //   repeatType: "reverse",
        // }}
        className="ball-two"
      ></motion.div>
      <div className="ball-three"></div>
    </BallsContainer>
  );
};

const BallsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @keyframes rotate1 {
    0% {
      top: 0;
      transform: rotateZ(-10deg);
      right: -55%;
    }
    100% {
      top: 10%;
      transform: rotateZ(0deg);
      right: -50%;
    }
  }
  .ball-one {
    z-index: 2;
    width: 120%;
    height: 100%;
    filter: blur(15px);
    background-color: ${defaultColors.primaryBlue};
    /* background-image: linear-gradient(
      ${defaultColors.primaryLemon},
      ${defaultColors.primaryBlue},
      ${defaultColors.primaryBlue}
    ); */
    animation: rotate1 3.2s ease infinite alternate-reverse;
    border-radius: 50%;
    position: absolute;
    left: -50%;
    right: auto;
  }

  @keyframes rotate2 {
    0% {
      top: 9%;
      right: 20%;
    }
    100% {
      top: -5%;
      right: 40%;
    }
  }

  .ball-two {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 80%;
    filter: blur(20px);
    background-color: ${defaultColors.primaryBlue};

    animation: rotate3 3.2s ease infinite alternate-reverse;

    /* transform: translateY(100%); */
    border-radius: 50%;

    top: -10%;
    /* bottom: auto;
    left: auto;
    right: -19%; */
    transform-style: preserve-3d;
    will-change: transform;
  }

  @keyframes rotate3 {
    0% {
      top: -17%;
      transform: rotateZ(30deg);
    }
    100% {
      top: 5%;
      transform: rotateZ(70deg);
    }
  }

  .ball-three {
    z-index: 2;
    width: 120%;
    height: 100%;
    filter: blur(20px);
    -webkit-text-fill-color: inherit;
    mix-blend-mode: normal;
    background-color: ${defaultColors.primaryBlue};
    animation: rotate3 3.15s ease infinite alternate-reverse;

    background-clip: border-box;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: -60%;
    transform-style: preserve-3d;
    will-change: transform;
  }
`;

export default RotatingBalls;
