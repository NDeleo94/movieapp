import React from "react";
import { useSelector } from "react-redux";
import UserForm from "../components/UserForm";
import Welcome from "../components/Welcome";

const UserPage = () => {
  const { auth } = useSelector((state) => state);

  return auth.token ? <Welcome /> : <UserForm />;
};

export default UserPage;
