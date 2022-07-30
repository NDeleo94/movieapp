import React, { useContext, useState } from "react";
import axios from "axios";
import { LogginContext } from "../context/LogginContext";

const LoginForm = () => {
  const { setIsLogged } = useContext(LogginContext);

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

    const body = {
      username: username,
      password: password,
    };

    axios
      .post("http://127.0.0.1:8000/api/auth/login/", body)
      .then(({ data }) => {
        console.log(data);
        setIsLogged(true);
        localStorage.setItem("token", data.access_token);
      })
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
      <div className="d-grid m-3">
        <button className="btn btn-danger " type="sumbit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
