import React from "react";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="col-6 offset-3" onSubmit={handleSubmit}>
      <div className="m-3">
        <label htmlFor="inputUsername" className="form-label">
          Username
        </label>
        <input
          type="email"
          className="form-control"
          id="inputUsername"
          placeholder="Username"
        />
      </div>
      <div className="m-3">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
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
