/* eslint-disable @next/next/no-img-element */
"use client";
import { defaultColors } from "@/utils/colors";
import { processes } from "@/utils/constants";
import { defaultStyles, fonts } from "@/utils/styling";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

const Process = () => {
  const [index, setIndex] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  return (
    <StyledProcess
      initial={{ transform: "translateY(5rem)", opacity: 0 }}
      whileInView={{ transform: "translateY(0)", opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="process-content ">
        <section className="first-part">
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
                      index === i ? "1.5px solid red" : "1.5px solid #504A45",
                  }}
                ></div>
                <h2
                  style={{
                    color: index === i ? defaultColors.primaryWhite : "#504A45",
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
        </section>

        <section className="second-part">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
            className="img-container"
            style={{
              translateY: scrollYProgress,
              backgroundImage: `url('/process-${index + 1}.webp')`,
            }}
          >
            {/* <Image src={processes[index].img} alt={processes[0].title} /> */}
          </motion.div>
        </section>
      </div>
    </StyledProcess>
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
    p {
      font-size: 0.9rem;
    }
  }

  .second-part {
    border-radius: ${defaultStyles.boxBorderRadius};
    height: 100%;
    width: 55%;
    overflow: hidden;
    object-fit: cover;

    .img-container {
      transform: scale(1.35);
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-size: cover;
    }
  }
`;

export default Process;
