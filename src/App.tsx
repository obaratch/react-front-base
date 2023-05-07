import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components/HeaderFooter";
import { Home } from "./components/Home";

export const App = () => {
  return (
    <div className="app-outer">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
