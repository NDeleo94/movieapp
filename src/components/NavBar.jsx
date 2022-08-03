import {
  faTicket,
  faHouseChimney,
  faSearch,
  faUser,
  faArrowLeft,
  faHeart,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import styles from "../components styles/NavBar.module.css";
import { useMatch } from "react-router-dom";

import { useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "../utils/baseURL";

const NavBar = () => {
  const { auth } = useSelector((state) => state);
  const [topMovie, setTopMovie] = useState(null);

  const matchDetail = useMatch("/detail/:idMovie");

  const linkActivo = (active) => {
    let estilo = ``;
    active
      ? (estilo += `${styles.colorB} `)
      : (estilo += `${styles.colorActive} `);
    matchDetail ? (estilo += `${styles.hidden} `) : (estilo += ``);
    return estilo;
  };

  const isMatchDetail = () => {
    return matchDetail ? styles.colorB : styles.hidden;
  };

  const isAuth = (active) => {
    let estilo = linkActivo(active);
    !auth.token ? (estilo += `${styles.hidden} `) : (estilo += ``);
    return estilo;
  };

  useEffect(() => {
    axios
      .get(baseURL + "ratings/top")
      .then(({ data }) => {
        setTopMovie(data[0].id);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <FontAwesomeIcon
            icon={faTicket}
            size={"2x"}
            className="mx-2 d-inline-block align-middle"
            style={{ color: "red" }}
          />
          <span className="d-inline-block align-middle">MovieApp</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavBarItem
              ruta={"/home"}
              icono={faHouseChimney}
              fnStyle={linkActivo}
            />
            <NavBarItem
              ruta={"/detail/" + topMovie}
              icono={faMoneyBill1Wave}
              fnStyle={linkActivo}
            />
            <NavBarItem
              ruta={"/search"}
              icono={faSearch}
              fnStyle={linkActivo}
            />
            <NavBarItem
              ruta={"/user/favorites"}
              icono={faHeart}
              fnStyle={isAuth}
            />
            <NavBarItem ruta={"/user"} icono={faUser} fnStyle={linkActivo} />
            <NavBarItem ruta={-1} icono={faArrowLeft} fnStyle={isMatchDetail} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
