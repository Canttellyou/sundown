"use client";
import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const RotatingBalls = () => {
  return (
    <BallsContainer>
      <div className="ball-three"></div>

      <motion.div
        initial={{
          transform:
            "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-95deg) skew(0deg, 0deg)",
        }}
        animate={{
          transform:
            "translate3d(-10%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-70deg) skew(0deg, 0deg)",
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
          type: "spring",
        }}
        className="ball-two"
      ></motion.div>
      <motion.div
        initial={{
          transform:
            "translate3d(0%, -5%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-40deg) skew(0deg, 0deg)",
        }}
        className="ball-one"
        animate={{
          transform:
            "translate3d(-4%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-80deg) skew(0deg, 0deg)",
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
          type: "spring",
        }}
      />
    </BallsContainer>
  );
};

const BallsContainer = styled.div`
  width: 54em;
  height: 58em;
  margin-top: 0;
  position: absolute;
  top: 10rem;
  bottom: auto;
  left: auto;
  right: 0%;
  .ball-one {
    z-index: 2;
    width: 35em;
    height: 38em;
    filter: blur(15px);
    background-color: #fe330a;
    border-radius: 999em;
    position: absolute;
    top: 18.4em;
    bottom: auto;
    left: 8.4em;
    right: auto;
  }
  .ball-two {
    z-index: 3;
    width: 34em;
    height: 60em;
    filter: blur(20px);
    mix-blend-mode: normal;
    background-color: #ff681e;
    background-image: linear-gradient(219deg, #ff9831, 73%);
    border-radius: 999em;
    position: absolute;
    top: 31px;
    bottom: auto;
    left: auto;
    right: -19%;
    transform-style: preserve-3d;
    will-change: transform;
  }
  .ball-three {
    z-index: 3;
    width: 36em;
    height: 36em;
    filter: blur(20px);
    -webkit-text-fill-color: inherit;
    mix-blend-mode: normal;
    background-color: #fe330a;
    background-clip: border-box;
    border-radius: 999em;
    position: absolute;
    top: 22.3em;
    bottom: auto;
    left: 15.5em;
    right: auto;
    transform-style: preserve-3d;
    will-change: transform;
  }
`;

export default RotatingBalls;
