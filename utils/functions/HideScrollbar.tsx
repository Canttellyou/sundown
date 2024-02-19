"use client";
import styled from "styled-components";

const MyComponent = styled.div`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`;

export default MyComponent;
