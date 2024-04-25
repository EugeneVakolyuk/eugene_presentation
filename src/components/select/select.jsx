import React, { useState } from "react";
import { StyledSelect } from "./select_styled";

const Select = ({ onChange, arr, isCompany = true }) => {
  const [disable, setDisable] = useState(false);
  const handleChange = (event) => {
    onChange(event);
    setDisable(true);
  };
  return (
    <StyledSelect onChange={(event) => handleChange(event)}>
      {isCompany ? (
        <option disabled={disable}>Компанії</option>
      ) : (
        <option disabled={disable}>Групи оголошень</option>
      )}
      {arr.map((el, indx) => (
        <option key={indx}>{el}</option>
      ))}
    </StyledSelect>
  );
};

export default Select;
