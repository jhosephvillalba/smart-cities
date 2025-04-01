import React from "react";

const InputForm = ({label, type, place}) => {
  return (
    <>
      <div className="w-100">
        <label for={label} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control form-control-sm"
          id={label}
          placeholder={place}
        />
      </div>
    </>
  );
};

export default InputForm; 
