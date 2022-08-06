import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputDate from "./InputDate";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import { useParams, useNavigate } from "react-router-dom";
import { updateMovie } from "../actions/movieActions";
import InputFile from "./InputFile";
import { initialState } from "../utils/initialStateMovie";

const EditMovieForm = () => {
  const { movie } = useSelector((state) => state);
  const { idMovie } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editMovieData, setEditMovieData] = useState(initialState);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const { title, image, language, genre, premiered, summary } = editMovieData;

  const initialData = () => {
    movie.movies.forEach((item) => {
      if (item.id === parseInt(idMovie)) {
        setEditMovieData(item);
        return;
      }
    });
  };

  const handleChangeFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
    }
    const value = e.target.files[0];
    setEditMovieData({
      ...editMovieData,
      [e.target.id]: value,
    });

    setSelectedFile(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEditMovieData({
      ...editMovieData,
      [e.target.id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = new FormData();

    body.append("_method", "PUT");

    body.append("title", title);
    body.append("image", image);
    body.append("language", language);
    body.append("genre", genre);
    body.append("premiered", premiered);
    body.append("summary", summary);
    // const body = {
    //   title: title,
    //   language: language,
    //   genre: genre,
    //   premiered: premiered,
    //   summary: summary,
    // };

    dispatch(updateMovie(body, idMovie));
    navigate(-1);
  };

  const handleClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    initialData();
  }, [idMovie]);

  return (
    <>
      <form className="col-12" onSubmit={handleSubmit}>
        <InputText
          id={"title"}
          placeHolder={"Superman"}
          onChangeFn={handleChange}
          value={title}
        />
        <InputFile
          id={"image"}
          onChangeFn={handleChangeFile}
          value={""}
          preview={preview}
          selectedFile={selectedFile}
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
        <InputDate
          id={"premiered"}
          onChangeFn={handleChange}
          value={premiered}
        />
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
      <div className="d-grid my-3 col-4 offset-4">
        <button className="btn btn-dark" onClick={handleClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default EditMovieForm;
