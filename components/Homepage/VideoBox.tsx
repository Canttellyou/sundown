"use client";
import { defaultStyles } from "@/utils/styling";
import React from "react";
import styled from "styled-components";

const VideoBox = () => {
  return (
    <StyledVideoBox>
      <div className="video-container">
        <video autoPlay loop muted controls={false} playsInline>
          <source
            src="https://download-video.akamaized.net/v3-1/playback/bdb3a683-9706-4177-8ca4-48dfe2703fac/c72af10b?__token__=st=1707563484~exp=1707577884~acl=%2Fv3-1%2Fplayback%2Fbdb3a683-9706-4177-8ca4-48dfe2703fac%2Fc72af10b%2A~hmac=abb18b6f2c57eecaf0307fb8c8713e48c74ef7b78cf62f2a820a74274b6ee730&r=dXMtd2VzdDE%3D"
            type="video/mp4"
          />
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
  }
`;

export default VideoBox;
