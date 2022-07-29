import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomePage = () => {
  return (
    <div className="container bg-primary h-100">
      <div className="row-fluid align-items-center">
        <div className="col">
        <FontAwesomeIcon
          icon={faTicket}
          size={"10x"}
          style={{ color: "red" }}
          className="rounded mx-auto d-block mt-5"
        />
        <h1 className="text-center">MovieApp</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
