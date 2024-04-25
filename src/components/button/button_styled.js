import styled from "styled-components";

import "./../fonts/fonts.css";

export const StyledBtn = styled.button`
  font-family: "Nunito", sans-serif;
  font-size: large;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  outline: none;
  color: #31363F;
  padding: 8px;
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
