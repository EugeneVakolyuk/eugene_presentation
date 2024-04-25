import styled from "styled-components";

import './../fonts/fonts.css'

export const DesBox = styled.div`
  max-width: 375px;
  height: 875px;
  line-height: 1.5;
  padding: 50px 16px 16px;
  background-color: #EEEEEE;
  border-radius: 8px;
  color: #31363F;
  font-family: "Nunito", sans-serif;
  box-shadow: 10px 10px 15px #3d3d3d30;

  h2 {
    text-align: center;
    margin-bottom: 16px;
    color: #222831;
  }
  ul {
    li {
      margin-bottom: 4px;
      display: flex;
      gap: 8px;
      align-items: start;
      svg {
        padding: 4px 4px 0 0;
        width: 20px;
        height: 20px;
        fill: #6499E9;
      }
      p {
        width: 300px;
      }
    }
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledSpanFirst = styled.span`
  // color: #00bcd4;
  background: -webkit-linear-gradient(120deg, #0061ff, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const StyledSpanSecond = styled.span`
  // color: #448aff;
  background: -webkit-linear-gradient(35deg, #696eff, #f8acff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CartBox = styled.div`
  max-width: 1600px;
`;
