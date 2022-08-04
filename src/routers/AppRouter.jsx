import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import AddMoviePage from "../pages/AddMoviePage";
import DetailPage from "../pages/DetailPage";
import EditMoviePage from "../pages/EditMoviePage";
import FavPage from "../pages/FavPage";
import GridPage from "../pages/GridPage";
import HomePage from "../pages/HomePage";
import MyMoviesPage from "../pages/MyMoviesPage";
import NotTopMoviePage from "../pages/NotTopMoviePage";
import UserPage from "../pages/UserPage";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route end path="/home" element={<HomePage />} />
        <Route end path="/notop" element={<NotTopMoviePage />} />
        <Route end path="/search" element={<GridPage />} />
        <Route end path="/detail/:idMovie" element={<DetailPage />} />
        <Route
          end
          path="/user/*"
          element={
            <PrivateRouter>
              <Routes>
              <Route end path="/favorites" element={<FavPage />} />
              <Route end path="/addMovie" element={<AddMoviePage />} />
              <Route end path="/myMovies" element={<MyMoviesPage />} />
              <Route end path="/edit/movie/:idMovie" element={<EditMoviePage />} />
              </Routes>
            </PrivateRouter>
          }
        />
        <Route end path={"/user"} element={<UserPage />} />
        <Route path="*" element={<Navigate to={"/home"} replace/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
