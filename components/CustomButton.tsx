"use client";
import { fonts } from "@/utils/styling";
import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  title: string;
  icon?: string | StaticImageData;
  iconPosition?: "left" | "right";
  hoverIcon?: string | StaticImageData;
}

const CustomButton = ({
  title,
  icon,
  iconPosition,
  hoverIcon,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <StyledButtonContainer>
      <StyledButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered && icon && iconPosition && iconPosition === "left" && (
          <Image src={icon} alt={title} className="title" />
        )}
        {isHovered &&
          icon &&
          iconPosition &&
          hoverIcon &&
          iconPosition === "left" && <Image src={hoverIcon} alt={title} />}
        <div className="title"> {title}</div>
        {!isHovered && icon && iconPosition && iconPosition === "right" && (
          <Image src={icon} alt={title} />
        )}
        {isHovered &&
          icon &&
          iconPosition &&
          hoverIcon &&
          iconPosition === "right" && (
            <Image className="title" src={hoverIcon} alt={title} />
          )}

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
  display: flex;
  align-items: center;
  gap: 10px;

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
