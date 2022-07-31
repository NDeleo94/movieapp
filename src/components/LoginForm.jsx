import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UsernameAndPasswordLogin } from "../actions/authActions";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UsernameAndPasswordLogin(username, password));
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
      <div className="d-grid m-3">
        <button className="btn btn-danger " type="sumbit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
