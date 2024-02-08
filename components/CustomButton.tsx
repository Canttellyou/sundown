"use client";
import { fonts } from "@/utils/styling";
import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

interface ButtonProps {
  title: string;
}

const CustomButton = ({ title }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <StyledButtonContainer>
      <StyledButton
        initial={{ transform: "scale(1)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={
          isHovered ? { transform: "scale(1.02)" } : { transform: "scale(1)" }
        }
        transition={{ delay: 0.15, duration: 0.35 }}
      >
        <div className="title"> {title}</div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ top: "100%" }}
              animate={{ top: "-2rem" }}
              exit={{ top: "100%" }}
              className="black-hover"
              transition={{ duration: 0.85, type: "spring" }}
            />
          )}
        </AnimatePresence>
      </StyledButton>
    </StyledButtonContainer>
  );
};

const StyledButtonContainer = styled.div``;

const StyledButton = styled(motion.button)`
  border: 1px solid rgba(11, 5, 0, 0.2);
  padding: 0.625rem 1.5rem;
  border-radius: 27px;
  font-family: ${fonts.secondary}, sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  color: #0b0500;
  transform: color 0.25s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    color: white;
  }

  .title {
    position: relative;
    z-index: 10;
  }

  .black-hover {
    background-color: black;
    position: absolute;
    left: -0.1rem;
    width: 110%;
    height: 6rem;
    border-radius: 48%;
    z-index: 5;
  }
`;

export default CustomButton;
