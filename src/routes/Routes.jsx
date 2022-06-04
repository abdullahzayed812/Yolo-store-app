import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { Product } from "../pages/Product";
import { Cart } from "../pages/Cart";

export function RoutesComponent() {
  return (
    <Routes>
      <Route exact path="/abdullahzayed812.github.io/Yolo-store-app/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:slug" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
