"use client";
import { projects } from "@/utils/constants";
import React, { useState } from "react";
import "animate.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultStyles, fonts } from "@/utils/styling";

const Projects = () => {
  const [inFocusId, setInFocusId] = useState(0);
  return (
    <StyledProjectsContainer>
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="project"
          style={{
            borderTop: project.id != 1 ? "1px solid rgba(0,0,0,0.2)" : "",
          }}
          onMouseEnter={() => setInFocusId(project.id)}
          onMouseLeave={() => setInFocusId(0)}
        >
          <motion.div
            initial={{ top: "-100%" }}
            animate={inFocusId === project.id ? { top: "0" } : { top: "-100%" }}
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
      ))}
    </StyledProjectsContainer>
  );
};

const StyledProjectsContainer = styled.div`
  width: 100%;
  .project {
    overflow-y: hidden;
    padding: 2rem ${defaultStyles.paddingHorizontal};
    cursor: pointer;
    /* transition: background-color 0.2 ease;
    &:hover {
      background-color: #ff9831;
    } */
    position: relative;

    h1 {
      font-weight: 500;
      font-size: 3.5rem;
    }
  }
  .background {
    width: 100%;
    height: 100%;
    background-color: #ff9831;
    position: absolute;
    left: 0;
  }
`;

export default Projects;
