"use client";
import { projects } from "@/utils/constants";
import React, { useState } from "react";
import "animate.css";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { defaultStyles, fonts } from "@/utils/styling";
import Image from "next/image";
import { defaultColors } from "@/utils/colors";
import CustomButton from "../CustomButton";
import Link from "next/link";
import { nextIcon, nextIconHover } from "@/images";

const Projects = () => {
  const [inFocusId, setInFocusId] = useState(0);

  const screenWidth = window.screen.width;
  return (
    <StyledProjectsContainer>
      {/* -----Desktop View-----  */}
      {screenWidth > 500 &&
        projects.map((project, index) => (
          <div key={index}>
            <AnimatePresence>
              {inFocusId === project.id && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(5px)" }}
                  className="preview-container"
                >
                  {project.sourceType === "photo" && (
                    <Image
                      priority={true}
                      src={project.source}
                      alt={project.title}
                    />
                  )}
                  {project.sourceType === "video" && (
                    <video autoPlay loop muted playsInline>
                      <source src={project.source} type="video/mp4" />
                    </video>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              key={project.id}
              className="project"
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.2)",
              }}
              onMouseEnter={() => setInFocusId(project.id)}
              onMouseLeave={() => setInFocusId(0)}
              onDragEnter={() => setInFocusId(project.id)}
              onDragLeave={() => setInFocusId(0)}
            >
              <motion.div
                initial={{ top: "-100%" }}
                animate={
                  inFocusId === project.id ? { top: "0" } : { top: "-100%" }
                }
                transition={{ duration: 0.3 }}
                className="background "
              />
              <div className="flex items-center justify-between relative z-10">
                <motion.h1
                  initial={{ transform: "translateY(3rem)", opacity: 0 }}
                  whileInView={{ transform: "translateY(0)", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.title}
                </motion.h1>

                <div className="exhibit-type">
                  <h2>{project.brand}</h2>
                  <p>{project.type}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}

      {/* -----Mobile View-----  */}
      {screenWidth <= 500 &&
        projects.map((project, index) => (
          <motion.div
            initial={{ transform: "translateY(6rem)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            key={project.id}
            style={{
              padding: `0 ${defaultStyles.paddingHorizontal}`,
            }}
          >
            <div className="preview-container_mobile">
              {project.sourceType === "photo" && (
                <Image
                  priority={true}
                  src={project.source}
                  alt={project.title}
                />
              )}
              {project.sourceType === "video" && (
                <video autoPlay loop muted playsInline>
                  <source src={project.source} type="video/mp4" />
                </video>
              )}
            </div>

            <motion.h1 className="text-3xl mt-3">{project.title}</motion.h1>

            <div className="exhibit-type">
              <h2>{project.brand}</h2>
              <p>{project.type}</p>
            </div>
          </motion.div>
        ))}

      <div className="btn-container">
        <Link href={"/"}>
          <CustomButton
            title="All Projects"
            icon={nextIcon}
            iconPosition="right"
            hoverIcon={nextIconHover}
          />
        </Link>
      </div>
    </StyledProjectsContainer>
  );
};

const StyledProjectsContainer = styled.div`
  width: 100%;
  margin-top: 4.7vw;
  position: relative;
  z-index: 20;
  .project {
    overflow-y: hidden;
    padding: 1rem ${defaultStyles.paddingHorizontal};
    cursor: pointer;
    /* transition: background-color 0.2 ease;
    &:hover {
      background-color: #ff9831;
    } */
    position: relative;

    h1 {
      font-weight: 500;
      font-size: 3.15rem;
    }
  }
  .background {
    width: 100%;
    height: 100%;
    background-color: #009191;
    position: absolute;
    left: 0;
  }

  .preview-container {
    position: fixed;
    height: 60vh;
    width: 25vw;
    background-color: ${defaultColors.primaryBlack};
    top: 15%;
    right: 20%;
    z-index: 10;
    border-radius: 20px;
    overflow: hidden;
    pointer-events: none;
    & > * {
      object-fit: cover;
      object-position: center;
      height: 100%;
    }

    &_mobile {
      border-radius: 20px;
      height: 55vh;
      width: 100;
      overflow: hidden;
      & > * {
        object-fit: cover;
        object-position: center;
        height: 100%;
      }
    }
  }

  .btn-container {
    width: 100%;
    padding: 2rem ${defaultStyles.paddingHorizontal};
  }

  .exhibit-type {
    font-family: ${fonts.secondary};
    line-height: 1.1;
    font-size: 0.9rem;
    text-align: right;
    @media screen and (max-width: 500px) {
      text-align: left;
      margin-top: 0.3rem;
      margin-bottom: 3.2rem;
    }
    p {
      color: rgba(0, 0, 0, 0.4);
      font-size: 0.8rem;
    }
  }
`;

export default Projects;
