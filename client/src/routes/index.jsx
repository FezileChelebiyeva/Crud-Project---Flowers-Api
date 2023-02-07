import React from "react";
import { Route, Routes } from "react-router-dom";
import AddFlowersPage from "../pages/add-page";
import DetailsPage from "../pages/details";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/not-found";
import WishlistPage from "../pages/wishlist";

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/add-flowers" element={<AddFlowersPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
