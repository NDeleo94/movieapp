import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import Welcome from "../components/Welcome";
import { LogginContext } from "../context/LogginContext";

const UserPage = () => {
  const { isLogged } = useContext(LogginContext);

  return isLogged ? <Welcome /> : <UserForm />;
};

export default UserPage;
