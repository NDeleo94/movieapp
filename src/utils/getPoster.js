import unavailable from "../images/unavailable.jpeg";

export function getPoster(path) {
  const devAPI = "http://127.0.0.1:8000/api/movies/image/";
  console.log(path);
  if (path === "") {
    return unavailable;
  }
  return devAPI + path;
}
