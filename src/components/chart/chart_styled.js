import styled from "styled-components";

import "./../fonts/fonts.css";

export const Title = styled.h1`
  display: flex;
  font-size: 75px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  color: #222831;
  //background: -webkit-linear-gradient(75deg, #00BCD4, #3F51B5);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  font-family: "Nunito", sans-serif;
  text-shadow: 5px 5px 15px #3d3d3d40;

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    display: none;
    margin-left: 30px;
    animation: rotateAnimation 4s ease-in-out infinite;
    filter: drop-shadow(5px 5px 15px #3d3d3d40);
  }
`;

export const CartBox = styled.div`
  max-width: 1600px;
`;

export const DashBox = styled.div`
  position: relative;
`;

