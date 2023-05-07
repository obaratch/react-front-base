import React from "react";
import { Link } from "react-router-dom";
import { APP_VERSION, BUILD_TIME } from "../config";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">Micro Vite App Example</div>
        <span className="version">v{APP_VERSION}</span>
        <span className="buildtime">build: {BUILD_TIME.toISOString()}</span>
      </Link>
    </header>
  );
};

export const Footer = () => <footer>(c) Obalab 2023</footer>;
