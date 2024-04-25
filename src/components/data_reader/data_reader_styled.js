import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 4px;
`;
export const SubTitle = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

export const Forma = styled.form`
  width: 400px;
  margin: 0 auto 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    padding: 8px;
    outline: none;
    border: 2px solid black;
    border-radius: 8px;
  }
  button {
    outline: none;
    color: black;
    padding: 8px;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    background-color: white;

    &:hover {
      background-color: darkgray;
      color: white;
    }
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;
`;
