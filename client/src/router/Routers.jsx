import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import RegisterPage from "../views/RegisterPage";
import ItemDetail from "../views/ItemDetail";
import Error from "../views/Error";
import LoginPage from "../views/LoginPage";
import { ProfilePage } from "../views/ProfilePage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item-detail/:id" element={<ItemDetail />} />
      <Route path="*" element={<Error />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
export default Routers;
