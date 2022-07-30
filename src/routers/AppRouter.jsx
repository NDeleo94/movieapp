import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DetailPage from "../pages/DetailPage";
import FavPage from "../pages/FavPage";
import GridPage from "../pages/GridPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route end path="/home" element={<HomePage />} />
        <Route end path="/search" element={<GridPage />} />
        <Route end path="/detail/:idMovie" element={<DetailPage />} />
        <Route
          end
          path="/favorites"
          element={
            <PrivateRouter>
              <FavPage />
            </PrivateRouter>
          }
        />
        <Route end path="/login" element={<UserPage />} />
        <Route path="*" element={<Navigate to={"/home"} replace/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
