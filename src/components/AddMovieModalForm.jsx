import React, { useState } from "react";
import InputDate from "./InputDate";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import axios from "axios";
import InputUrl from "./InputUrl";

const AddMovieModalForm = () => {
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
      id_user: 1,
    };

    axios
      .post("http://127.0.0.1:8000/api/movies/", body)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.log(error));

    setNewMovieData(initialState);
  };

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
          Add Movie
        </button>
      </div>
    </form>
  );
};

export default AddMovieModalForm;
