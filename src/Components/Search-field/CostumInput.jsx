import React from "react";

const CostumInput = ({placeholder}) => {
  return (
    <div className="w3-half">
      <label>enter symptom</label>
      <input
        className="w3-input w3-border w3-border-teal w3-animate-bottom"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CostumInput;
