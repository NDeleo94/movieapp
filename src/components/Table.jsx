import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import TableRow from "./TableRow";

const Table = () => {
  const { auth } = useSelector((state) => state);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movies/user/" + auth.user.id)
      .then(({ data }) => {
        console.log(data);
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => alert(error));
  }, [auth]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered caption-top align-middle text-center mt-3">
        <caption>Your movies</caption>
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">#ID Movie</th>
            <th scope="col">Movie</th>
            <th scope="col">Added</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <TableRow key={index} movie={movie} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
