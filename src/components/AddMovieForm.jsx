import React, { useState } from "react";
import InputDate from "./InputDate";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import InputUrl from "./InputUrl";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../actions/movieActions";
import { useNavigate } from "react-router-dom";

const AddMovieModalForm = () => {
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    title: "",
    image: "",
    language: "",
    genre: "",
    premiered: "",
    summary: "",
  };

  const [newMovieData, setNewMovieData] = useState(initialState);

  const { title, image, language, genre, premiered, summary } = newMovieData;

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setNewMovieData({
      ...newMovieData,
      [e.target.id]: value,
    });
    console.log(newMovieData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      title: title,
      image: image,
      language: language,
      genre: genre,
      premiered: premiered,
      summary: summary,
      id_user: auth.user.id,
    };

    dispatch(addMovie(body));
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <form className="col-12" onSubmit={handleSubmit}>
      <InputText
        id={"title"}
        placeHolder={"Superman"}
        onChangeFn={handleChange}
      />
      <InputUrl
        id={"image"}
        placeHolder={"http://"}
        onChangeFn={handleChange}
      />
      <InputText
        id={"language"}
        placeHolder={"English"}
        onChangeFn={handleChange}
      />
      <InputText
        id={"genre"}
        placeHolder={"Science-fiction"}
        onChangeFn={handleChange}
      />
      <InputDate id={"premiered"} onChangeFn={handleChange} />
      <InputTextArea
        id={"summary"}
        placeHolder={"Superman the first superhero..."}
        onChangeFn={handleChange}
      />
      <div className="d-grid m-3">
        <button type="submit" className="btn btn-danger">
          Add Movie
        </button>
      </div>
      <div className="d-grid my-3 col-4 offset-4">
        <button className="btn btn-dark" onClick={handleClose}>
          Close
        </button>
      </div>
    </form>
  );
};

export default AddMovieModalForm;
