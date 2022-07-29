import React, { useContext, useState } from "react";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import { LogginContext } from "../context/LogginContext";
import logo from "../logo.svg";

const DetailPage = () => {
  const { isLogged } = useContext(LogginContext);

  const [comments, setComments] = useState([1, 2, 3]);

  return (
    <div className="container text-center">
      <div className="col-8 offset-2">
        <img className="img-fluid" src={logo} alt="poster pelicula"></img>
      </div>

      <div className="">
        <h1>Spiderman</h1>
        <p>
          <strong>Lenguaje: </strong>
          English
        </p>
        <p>
          <strong>Géneros: </strong>
          Ciencia Ficcion
        </p>
        <p>
          <strong>Fecha de Estreno: </strong>
          20/12/2020
        </p>
        <h1>Sinopsis </h1>
        <p>Summary</p>
      </div>
      <hr />
      {comments.map((comment) => (
        <Comment />
      ))}
      {isLogged ? <CommentForm /> : ""}
    </div>
  );
};

export default DetailPage;
