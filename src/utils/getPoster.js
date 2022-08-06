import unavailable from "../images/unavailable.jpeg";

export function getPoster(path) {
  const API = "http://127.0.0.1:8000/storage/images/";
  if (path === "") {
    return unavailable;
  }
  return API + path;
}
