import React from "react";

const InputDate = ({ id, placeHolder, onChangeFn, value }) => {
  return (
    <div className="m-1">
      <label htmlFor={id} className="form-label">
        {id[0].toUpperCase() + id.substring(1)}
      </label>
      <input
        type="date"
        className="form-control"
        id={id}
        placeholder={placeHolder}
        onChange={onChangeFn}
        defaultValue={value}
        required
      />
    </div>
  );
};

export default InputDate;
