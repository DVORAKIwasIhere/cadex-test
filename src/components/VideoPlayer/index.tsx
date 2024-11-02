import { StyledVideoPlayer, VideoPlayerWrapper } from "./styles";

const VideoPlayer = () => (
  <VideoPlayerWrapper>
    <StyledVideoPlayer
      width="460"
      height="255"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=RmWM_Nw2rnscvsUw"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </VideoPlayerWrapper>
);

export default VideoPlayer;
