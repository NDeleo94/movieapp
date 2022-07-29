import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components styles/NavBarItem.module.css";

const NavBarItem = ({ ruta, icono, fnStyle }) => {
  return (
    <li className="nav-item">
      <NavLink
        to={ruta}
        className={({isActive})=>fnStyle(isActive)}
      >
        {" "}
        <FontAwesomeIcon icon={icono} size={"2x"} className={styles.icono} />
      </NavLink>
    </li>
  );
};

export default NavBarItem;

// className={({isActive})=>funcEstilo(isActive)}
