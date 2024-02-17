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
  margin-top: 5vw;
  .video-container {
    object-fit: cover;
    border-radius: ${defaultStyles.boxBorderRadius};
    overflow: hidden;
  }
`;

export default VideoBox;
