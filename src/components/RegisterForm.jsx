import axios from "axios";
import React, { useState } from "react";

const RegisterForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });

  const { username, password, password_confirmation } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: username,
      password: password,
      password_confirmation: password_confirmation,
    };

    axios
      .post("http://127.0.0.1:8000/api/auth/register/", body)
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <form className="col-6 offset-3" onSubmit={handleSubmit}>
      <div className="m-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
      </div>
      <div className="m-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div className="m-3">
        <label htmlFor="password_confirmation" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password_confirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
      </div>
      <div className="d-grid m-3">
        <button className="btn btn-danger" type="sumbit">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
