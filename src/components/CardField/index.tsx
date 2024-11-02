import {
  ButtonWrapper,
  StyledCardField,
  StyledCards,
  StyledTitle,
} from "./styles";
import ContactUsButton from "../ContactUsButton";

const mockData = [
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
];

const CardField = () => {
  return (
    <StyledCardField>
      <StyledTitle>Also very important title</StyledTitle>
      <StyledCards>
        {mockData.map((mock) => {
          return (
            <div>
              <h2>{mock.title}</h2>
              <p>{mock.description}</p>
            </div>
          );
        })}
      </StyledCards>
      <ButtonWrapper>
        <ContactUsButton />
      </ButtonWrapper>
    </StyledCardField>
  );
};

export default CardField;
