"use client";
import { CarouselProps } from "@/interfaces/consts";
import { getRelativeCoordinates } from "@/utils/functions/GetMouseCoordinates";
import { defaultStyles, fonts } from "@/utils/styling";
import Image from "next/image";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultColors } from "@/utils/colors";
import MyComponent from "@/utils/functions/HideScrollbar";
import { chevronLeft, chevronRight } from "@/images";

const Carousel = ({ data }: { data: Array<CarouselProps> }) => {
  type MousePosition = {
    x: number;
    y: number;
    // width: number;
    // height: number;
    // centerX: number;
    // centerY: number;
  };

  const [mousePosition, setMousePosition] =
    React.useState<MousePosition | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (boxRef.current) {
      const { clientX, clientY } = e;
      const { left, top } = boxRef.current.getBoundingClientRect();

      setMousePosition({
        x: clientX - left,
        y: clientY - top,
      });
    }
  };

  const [elementEntered, setElementEntered] = useState<boolean>(false);
  // const [sideKeysPressed, setSideKeysPressed] = useState<boolean>(false);

  const ballVariant = {
    minWidth: elementEntered ? "6rem" : 0,
    minHeight: elementEntered ? "6rem" : 0,
    maxWidth: elementEntered ? "6rem" : 0,
    maxHeight: elementEntered ? "6rem" : 0,
  };

  return (
    <MyComponent className="main-container relative  h-[24rem]  w-full ">
      <div
        className="h-full w-screen scrollbar-hide absolute top-0 right-0 bg-[transparent]"
        ref={boxRef}
      >
        <motion.div
          initial={{ minWidth: 0, minHeight: 0, maxWidth: 0, maxHeight: 0 }}
          animate={{
            ...ballVariant,
            x: mousePosition ? mousePosition.x : 0,
            y: mousePosition ? mousePosition.y : 0,
          }}
          transition={{
            x: { type: "keyframes", duration: 0 },
            y: { type: "keyframes", duration: 0 },
          }}
          className="follow-cursor z-20 absolute"
        >
          <div className="chevron-container">
            <Image src={chevronLeft} alt="chevron-left" />
          </div>
          <div className="chevron-container">
            <Image src={chevronRight} alt="chevron-right" />
          </div>
        </motion.div>
      </div>
      <div className="overflow-x-auto w-full element ">
        <StyledCarouselContainer
          onMouseEnter={() => setElementEntered(true)}
          onMouseLeave={() => setElementEntered(false)}
          className="relative z-10"
          onMouseMove={(e) => handleMouseMove(e)}
        >
          {data.map((item, index) => (
            <motion.div className="carousel-item" key={index}>
              <Image priority={true} src={item.image} alt="brand logo" />
              <div>{item.description}</div>
            </motion.div>
          ))}
        </StyledCarouselContainer>
      </div>
    </MyComponent>
  );
};

const StyledCarouselContainer = styled.div`
  width: fit-content;
  cursor: none;

  display: flex;
  padding-top: 1rem;

  .hide-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    position: relative;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }

  .carousel-item {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    padding-left: 1.5rem;
    min-width: 16rem;
    margin-left: ${defaultStyles.paddingHorizontalBig};
    height: fit-content;
    img {
      margin-bottom: 1.5rem;
      width: 10rem;
    }
    font-family: ${fonts.secondary};
    font-size: 0.9rem;
  }

  .follow-cursor {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-family: ${fonts.secondary};
    font-size: 1.2rem;
    color: ${defaultColors.primaryWhite};
    background-color: ${defaultColors.primaryBlue};
    overflow: hidden;
    pointer-events: none;
    font-weight: 300;
  }
`;

export default Carousel;
