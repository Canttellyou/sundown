"use client";
import { projects } from "@/utils/constants";
import React, { useState } from "react";
import "animate.css";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { defaultStyles } from "@/utils/styling";
import Image from "next/image";
import { defaultColors } from "@/utils/colors";
import CustomButton from "../CustomButton";
import Link from "next/link";
import { nextIcon, nextIconHover } from "@/images";

const Projects = () => {
  const [inFocusId, setInFocusId] = useState(0);
  return (
    <StyledProjectsContainer>
      {projects.map((project) => (
        <>
          <AnimatePresence>
            {inFocusId === project.id && (
              <motion.div
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(5px)" }}
                className="preview-container"
              >
                {project.sourceType === "photo" && (
                  <Image src={project.source} alt={project.title} />
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
              className="background"
            />
            <motion.h1
              initial={{ transform: "translateY(1rem)", opacity: 0 }}
              whileInView={{ transform: "translateY(0)", opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {project.title}
            </motion.h1>
          </motion.div>
        </>
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
  .project {
    overflow-y: hidden;
    padding: 1.5rem ${defaultStyles.paddingHorizontal};
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
    background-color: #ff9831;
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
  }

  .btn-container {
    width: 100%;
    padding: 2rem ${defaultStyles.paddingHorizontal};
  }
`;

export default Projects;
