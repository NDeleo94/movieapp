import { faTicket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FooterItem from "./FooterItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const style = {
    backgroundColor: "white",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
  };

  return (
    <footer className="footer mt-3" style={style}>
      <div className="container d-flex flex-wrap justify-content-between align-items-center mb-3 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>
        <FontAwesomeIcon
          icon={faTicket}
          size={"2x"}
          style={{ color: "red" }}
          className="col-md-4 d-inline-block align-middle"
        />
        <ul className="nav col-md-4 justify-content-end">
          <FooterItem ruta={"/home"} texto={"Home"} />
          <FooterItem ruta={"/search"} texto={"Search"} />
          <FooterItem ruta={"/login"} texto={"Profile"} />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
