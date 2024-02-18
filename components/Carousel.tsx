"use client";
import { CarouselProps } from "@/interfaces/consts";
import { defaultStyles, fonts } from "@/utils/styling";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Carousel = ({ data }: { data: Array<CarouselProps> }) => {
  return (
    <StyledCarouselContainer>
      {data.map((item, index) => (
        <div className="carousel-item" key={index}>
          <Image src={item.image} alt="brand logo" />
          <div>{item.description}</div>
        </div>
      ))}
    </StyledCarouselContainer>
  );
};

const StyledCarouselContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  .carousel-item {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    padding-left: 1.5rem;
    min-width: 16rem;
    margin-left: 5rem;
    height: fit-content;
    img {
      margin-bottom: 1.5rem;
      width: 10rem;
    }
    font-family: ${fonts.secondary};
    font-size: 0.9rem;
  }
`;

export default Carousel;
