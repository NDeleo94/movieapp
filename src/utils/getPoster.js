import unavailable from "../images/unavailable.jpeg";
import { baseURL } from "./baseURL";

export function getPoster(path) {
  const API = baseURL + "movies/image/";
  if (path === "") {
    return unavailable;
  }
  return API + path;
}
