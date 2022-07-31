import React from 'react'

const InputUrl = ({ id, placeHolder, onChangeFn, value }) => {
  return (
    <div className="m-1">
      <label htmlFor={id} className="form-label">
        {id[0].toUpperCase() + id.substring(1)}
      </label>
      <input
        type="url"
        className="form-control"
        id={id}
        placeholder={placeHolder}
        onChange={onChangeFn}
        value={value}
      />
    </div>
  )
}

export default InputUrl