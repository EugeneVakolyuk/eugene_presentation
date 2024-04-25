import styled from "styled-components";

import "./../fonts/fonts.css";

export const MainBox = styled.div`
  max-width: 408px;
  margin: 0 auto 20px;
  display: flex;
  gap: 20px;
`;

export const DisabledInput = styled.input`
  display: none;
  opacity: 0;
  visibility: hidden;
`;

export const FaceInput = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: large;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  outline: none;
  color: black;
  padding: 8px 0;
  border: none;
  border-radius: 8px;
  box-shadow: 5px 5px 10px #3d3d3d30;
  cursor: pointer;
  background-color: #EEEEEE;
  transition: 0.3s;
  &:hover {
    box-shadow: 10px 10px 15px #3d3d3d40;
    transform: translateY(-5px);
  }

  svg {
    height: 20px;
    width: 20px;
    margin-left: 10px;
  }
`;
