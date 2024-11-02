import {
  StyledTextBlock,
  StyledVideoBlock,
  StyledVideoContainer,
} from "./styles";
import VideoPlayer from "../VideoPlayer";
import TextBlock from "../TextBlock";

const VideoBlock = () => {
  return (
    <StyledVideoBlock>
      <StyledTextBlock>
        <TextBlock
          title={"Most important title on the page"}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
        leo et condimentum ultricies, sem urna convallis metus, vel suscipit
        nibh lacus tincidunt ante`}
        />
      </StyledTextBlock>
      <StyledVideoContainer>
        <VideoPlayer />
      </StyledVideoContainer>
    </StyledVideoBlock>
  );
};

export default VideoBlock;
