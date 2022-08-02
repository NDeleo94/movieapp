import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newMovie } from "../actions/movieActions";
import { useNavigate } from "react-router-dom";
import InputDate from "./InputDate";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import InputFile from "./InputFile";
import { initialState } from "../utils/initialStateMovie";

const AddMovieModalForm = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newMovieData, setNewMovieData] = useState(initialState);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const { title, image, language, genre, premiered, summary } = newMovieData;

  const handleChangeFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
    }
    const value = e.target.files[0];
    setNewMovieData({
      ...newMovieData,
      [e.target.id]: value,
    });

    setSelectedFile(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewMovieData({
      ...newMovieData,
      [e.target.id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = new FormData();

    body.append("title", title);
    body.append("image", image);
    body.append("language", language);
    body.append("genre", genre);
    body.append("premiered", premiered);
    body.append("summary", summary);
    body.append("id_user", auth.user.id);

    dispatch(newMovie(body));
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

  return (
    <>
      <form
        className="col-12"
        onSubmit={handleSubmit}
        encType={"multipart/form-data"}
      >
        <InputText
          id={"title"}
          placeHolder={"Superman"}
          onChangeFn={handleChange}
        />
        <InputFile
          id={"image"}
          onChangeFn={handleChangeFile}
          preview={preview}
          selectedFile={selectedFile}
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
      </form>
      <div className="d-grid my-3 col-4 offset-4">
        <button className="btn btn-dark" onClick={handleClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default AddMovieModalForm;
