"use client";
import styled from "styled-components";
import { defaultColors } from "../colors";
import { fonts } from "../styling";

const MyComponent = styled.div`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  .follow-cursor {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-family: ${fonts.secondary};
    font-size: 1.2rem;
    color: ${defaultColors.primaryWhite};
    background-color: ${defaultColors.primaryOrange};
    overflow: hidden;
    pointer-events: none;
  }

  .element {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    position: relative;

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }
  }

  .chevron-container {
    width: 15%;
    img {
      width: 100%;
    }
  }
`;

export default MyComponent;
