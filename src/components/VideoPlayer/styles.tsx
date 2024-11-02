import styled from "styled-components";

export const VideoPlayerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background-color:#F5F5F5;
`;

export const StyledVideoPlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;
