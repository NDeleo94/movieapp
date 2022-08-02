import React from "react";
import styles from "../components styles/InputFile.module.css";

const InputFile = ({ id, onChangeFn, value, preview, selectedFile }) => {
  return (
    <>
      <div className="m-1">
        <label htmlFor={id} className="form-label">
          {id[0].toUpperCase() + id.substring(1)}
        </label>
        <input
          type="file"
          className="form-control"
          id={id}
          onChange={onChangeFn}
          defaultValue={value}
        />
      </div>
      <div className="col-6 m-1">
      {selectedFile && (
        <img src={preview} className={`card-img-top ${styles.objetfit}`} />
      )}
      </div>
      </>
  );
};

export default InputFile;
