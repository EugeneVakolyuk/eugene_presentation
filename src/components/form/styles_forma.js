import styled from "styled-components";

import "./../fonts/fonts.css";

export const StyledForm = styled.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  input {
    font-family: "Nunito", sans-serif;
    color: #31363F;
    background-color: #EEEEEE;
    font-size: 16px;
    width: 100%;
    padding: 10px 90px 10px 10px;
    outline: none;
    border: none;
    border-radius: 8px;
    box-shadow: 5px 5px 10px #3d3d3d30;
    transition: 0.3s;
  }

  &:focus-within {
    margin-bottom: 16px;
  }
  &:focus-within input {
    border: 2px solid #6499E9;
    transform: translateY(-5px);
    box-shadow: 10px 10px 15px #3d3d3d40;
    transition: 0s;
  }
  &:focus-within button {
    padding: 10px 0 9px 10px;
    transform: translateY(-5px);
  }

  &:hover button {
    transform: translateY(-5px);
  }
  &:hover input {
    box-shadow: 10px 10px 15px #3d3d3d40;
    transform: translateY(-5px);
  }

  button {
    font-family: "Nunito", sans-serif;
    color: #31363F;
    font-weight: 700;
    font-size: 18px;
    // text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    border: none;
    border-radius: 0 8px 8px 0;
    background-color: inherit;
    padding: 8px 0 7px 10px;
    top: 0;
    right: 0;
    transition: 0.3s;
    
    &:hover {
      background: #6499E9;
      color: white;
      
      svg {
        stroke: white;
        transition: 0.3s;
      }
    }

    svg {
      width: 30px;
      height: 27px;
      transition: 0.05s;
    }
  }
`;
