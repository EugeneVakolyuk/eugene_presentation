import styled from "styled-components";

import "./../fonts/fonts.css";

export const Box = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
`;

export const Button = styled.button`
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: #31363F;
  padding: 20px;
  cursor: pointer;
  background-color: #EEEEEE;
  border: none;
  border-radius: 8px;
  box-shadow: 5px 5px 10px #3d3d3d30;
  transition: ease-in-out 200ms;

  &:hover {
    color: #111111;
    transform: translateY(-5px);
    box-shadow: 10px 10px 15px #3d3d3d30;
  }
`;
