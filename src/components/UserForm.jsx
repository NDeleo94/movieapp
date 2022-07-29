import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const UserForm = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      {toggle ? <LoginForm /> : <RegisterForm />}
      <div className="d-grid my-3 col-4 offset-4">
        <button className="btn btn-dark" onClick={handleClick}>
          {toggle ? "Sign in" : "Log in"}
        </button>
      </div>
    </div>
  );
};

export default UserForm;
