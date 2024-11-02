import { ButtonWrapper, StyledBottomTitle } from "./styles";
import ContactUsButton from "../ContactUsButton";

const BottomTitle = () => {
  return (
    <StyledBottomTitle>
      <h1>Less important title</h1>
      <ButtonWrapper>
        <ContactUsButton />
      </ButtonWrapper>
    </StyledBottomTitle>
  );
};

export default BottomTitle;
