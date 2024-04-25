import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-bottom: 10px;
  & :last-child {
    margin-top: 10px;
  }
  div {
    display: flex;
    gap: 8px;
    flex-direction: column;

    p {
      text-align: center;
      font-size: large;
      span {
        text-decoration: underline;
      }
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 4px;
`;
export const SubTitle = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;
