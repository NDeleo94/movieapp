import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { auth } = useSelector((state) => state);
  return auth.token ? children : <Navigate to="/login" replace />;
};

export default PrivateRouter;
