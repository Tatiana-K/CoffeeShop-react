import React from "react";

const NumberField = (props) => {

  const handleChange = (event) => {
    props.setter(event.target.value);
    console.log("value is:", event.target.value);
    props.calculateResult(props.item, props.active, +event.target.value)
  };

  return (
    <input
      type="number"
      placeholder="0"
      min="0"
      disabled={!props.active}
      onChange={handleChange}
      value={props.val}
    />
  );
};

export default NumberField;
