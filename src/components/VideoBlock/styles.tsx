import styled from "styled-components";

export const StyledVideoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid lightgrey;
  background-color: #F5F5F5;

  @media screen and (max-width: 768px) {
    flex-direction: column; 
  }
`;

export const StyledTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 40%;
  height: 100%;
  flex-grow: 1;
`;

export const StyledVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 40%;
  height: 100%;
  padding: 20px;
  background-color: #F5F5F5;
  flex-grow: 1;
`;