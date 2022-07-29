import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LogginContext } from "../context/LogginContext";

const PrivateRouter = ({ children }) => {
  const { isLogged } = useContext(LogginContext);
  return isLogged ? children : <Navigate to="/login" replace />;
};

export default PrivateRouter;