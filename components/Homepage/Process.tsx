/* eslint-disable @next/next/no-img-element */
"use client";
import { defaultColors } from "@/utils/colors";
import { processes } from "@/utils/constants";
import { defaultStyles, fonts } from "@/utils/styling";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Footer from "../Footer";

const Process = () => {
  const [index, setIndex] = useState<number>(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const springYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ transform: "translateY(0)", opacity: 1 });
    }
  }, [controls, inView]);

  const translateY = useTransform(springYProgress, [0, 1], [0, 200]);

  return (
    <>
      <StyledProcess
        ref={ref}
        initial={{ transform: "translateY(5rem)", opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <div ref={targetRef} className="process-content">
          <div className="first-part">
            {processes.map((process, i) => (
              <div key={i}>
                <div
                  onClick={() => setIndex(i)}
                  className="titles flex gap-4 items-center cursor-pointer"
                >
                  <div
                    className="title-line"
                    style={{
                      border:
                        index === i
                          ? "1.5px solid #00A8A4"
                          : "1.5px solid #504A45",
                    }}
                  ></div>
                  <h2
                    style={{
                      color:
                        index === i ? defaultColors.primaryWhite : "#504A45",
                    }}
                  >
                    {process.title}
                  </h2>
                </div>
              </div>
            ))}

            {processes.map((process, i) => (
              <div key={i} className="process-desc">
                {i === index && (
                  <AnimatePresence>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.75 }}
                    >
                      {process.description}
                    </motion.p>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="second-part">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75 }}
              className="img-container"
              style={{
                translateY,
              }}
            >
              <Image
                //   key={index}
                priority={true}
                src={processes[index].img}
                alt={processes[0].title}
              />
            </motion.div>
          </div>
        </div>
      </StyledProcess>
    </>
  );
};

const StyledProcess = styled(motion.div)`
  margin-top: 4rem;
  padding: 0 ${defaultStyles.paddingHorizontal};
  width: 100%;

  .process-content {
    width: 100%;
    height: 110vh;
    border-radius: ${defaultStyles.boxBorderRadius};
    background-color: ${defaultColors.primaryBlack};

    display: flex;
    @media only screen and (max-width: 700px) {
      flex-direction: column;
      height: fit-content;
    }

    .title-line {
      /* width: 2px; */
      height: 4.2rem;
    }

    h2 {
      font-size: 4rem;
      line-height: 1.05;
    }

    .process-desc {
      margin-top: 2rem;
      font-family: ${fonts.secondary};
      color: ${defaultColors.primaryWhite};
    }
  }

  .first-part {
    max-width: 45%;
    padding: 0 8%;
    padding-top: 15%;
    @media only screen and (max-width: 700px) {
      max-width: 100%;
    }
    p {
      font-size: 0.9rem;
    }
  }

  .second-part {
    border-radius: ${defaultStyles.boxBorderRadius};
    height: 100%;
    width: 55%;
    overflow: hidden;

    .img-container {
      border-radius: ${defaultStyles.boxBorderRadius};
    }
    @media only screen and (max-width: 700px) {
      width: 100%;
      padding-top: 3rem;
      height: 60vh;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.25);
      border-radius: ${defaultStyles.boxBorderRadius};
    }
  }
`;

export default Process;
