import React from "react";
import PropTypes from "prop-types";
import { InputContainer } from "./Input.styles";

const Input = ({ type = "text", value, onChange }) => {
  return <InputContainer type={type} value={value} onChange={onChange} />;
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Input;
