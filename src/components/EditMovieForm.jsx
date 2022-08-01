import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputDate from "./InputDate";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import InputUrl from "./InputUrl";
import { useParams, useNavigate } from "react-router-dom";
import { editMovie } from "../actions/movieActions";

const EditMovieForm = () => {
  const { auth } = useSelector((state) => state);
  const { idMovie } = useParams();
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

  const [editMovieData, setEditMovieData] = useState(initialState);

  const { title, image, language, genre, premiered, summary } = editMovieData;

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEditMovieData({
      ...editMovieData,
      [e.target.id]: value,
    });
    console.log(editMovieData);
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

      dispatch(editMovie(body, idMovie));
      navigate(-1)
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movies/" + idMovie)
      .then(({ data }) => {
        console.log(data);
        setEditMovieData(data)
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <form className="col-12" onSubmit={handleSubmit}>
      <InputText
        id={"title"}
        placeHolder={"Superman"}
        onChangeFn={handleChange}
        value={title}
      />
      <InputUrl
        id={"image"}
        placeHolder={"http://"}
        onChangeFn={handleChange}
        value={image}
      />
      <InputText
        id={"language"}
        placeHolder={"English"}
        onChangeFn={handleChange}
        value={language}
      />
      <InputText
        id={"genre"}
        placeHolder={"Science-fiction"}
        onChangeFn={handleChange}
        value={genre}
      />
      <InputDate id={"premiered"} onChangeFn={handleChange} value={premiered} />
      <InputTextArea
        id={"summary"}
        placeHolder={"Superman the first superhero..."}
        onChangeFn={handleChange}
        value={summary}
      />
      <div className="d-grid m-3">
        <button type="submit" className="btn btn-danger">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditMovieForm;
