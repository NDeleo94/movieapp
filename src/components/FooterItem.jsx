import React from "react";
import { NavLink } from "react-router-dom";

const FooterItem = ({ ruta, texto }) => {
  return (
    <li className="nav-item">
      <NavLink to={ruta} className="nav-link px-2 text-muted">{texto}</NavLink>
    </li>
  );
};

export default FooterItem;
