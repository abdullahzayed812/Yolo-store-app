import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProductViewModal } from "./ProductViewModal";
import { RoutesComponent } from "../routes/Routes";
import { BrowserRouter } from "react-router-dom";

export function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <section className="container">
        <main className="main-content">
          <RoutesComponent />
        </main>
      </section>
      <Footer />
      <ProductViewModal />
    </BrowserRouter>
  );
}
