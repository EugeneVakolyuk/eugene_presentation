import React from "react";
import { StyledBtn } from "./button_styled";

import { TbArrowBarUp } from "react-icons/tb";

const Button = ({ onClick, children, disabled = false }) => {
  return (
    <StyledBtn disabled={disabled} type="button" onClick={onClick}>
      {children}
      <TbArrowBarUp />
    </StyledBtn>
  );
};

export default Button;
