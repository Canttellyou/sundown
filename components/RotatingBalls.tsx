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
            "translate3d(-15%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-75deg) skew(0deg, 0deg)",
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          repeatType: "reverse",
        }}
        className="ball-two"
      ></motion.div>
      <motion.div
        initial={{
          transform:
            "translate3d(0%, -10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-40deg) skew(0deg, 0deg)",
        }}
        className="ball-one"
        animate={{
          transform:
            "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-80deg) skew(0deg, 0deg)",
        }}
        transition={{
          repeat: Infinity,
          duration: 2.65,
          repeatType: "reverse",
        }}
      />
    </BallsContainer>
  );
};

const BallsContainer = styled.div`
  width: 44vw;
  height: 48vw;
  margin-top: 0;
  position: absolute;
  top: 8vw;
  bottom: auto;
  left: auto;
  right: 0%;
  .ball-one {
    z-index: 2;
    width: 35vw;
    height: 38vw;
    filter: blur(15px);
    background-color: #fe330a;
    border-radius: 999em;
    position: absolute;
    top: 15.4em;
    bottom: auto;
    left: -8.4em;
    right: auto;
  }
  .ball-two {
    z-index: 3;
    width: 34vw;
    height: 60vw;
    filter: blur(20px);
    mix-blend-mode: normal;
    background-color: #fe330a;
    background-image: linear-gradient(219deg, #fe330a, #fe330a, #ff9831 98%);
    border-radius: 999em;
    position: absolute;
    top: 41px;
    bottom: auto;
    left: auto;
    right: -19%;
    transform-style: preserve-3d;
    will-change: transform;
  }
  .ball-three {
    z-index: 3;
    width: 38vw;
    height: 38vw;
    filter: blur(20px);
    -webkit-text-fill-color: inherit;
    mix-blend-mode: normal;
    background-color: #fe330a;
    background-clip: border-box;
    border-radius: 999em;
    position: absolute;
    top: 13.3em;
    bottom: auto;
    left: 10.5em;
    right: auto;
    transform-style: preserve-3d;
    will-change: transform;
  }
`;

export default RotatingBalls;
