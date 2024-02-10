"use client";
import { defaultStyles } from "@/utils/styling";
import React from "react";
import styled from "styled-components";

const VideoBox = () => {
  return (
    <StyledVideoBox>
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </StyledVideoBox>
  );
};

const StyledVideoBox = styled.div`
  width: 100%;
  position: relative;
  z-index: 5;
  padding: 0 ${defaultStyles.paddingHorizontal};
  margin-top: 4rem;
  .video-container {
    object-fit: cover;
    border-radius: 1.25em;
    overflow: hidden;
    min-height: 100vh;
  }
`;

export default VideoBox;
