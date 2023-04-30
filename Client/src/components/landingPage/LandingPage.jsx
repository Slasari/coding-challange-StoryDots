import React from "react";
import { Link } from "react-router-dom";
import Style from "./LandingPage.css?inline"

export default function LandingPage() {
  return (
    <main className={Style.LandingPage}>
      <h1>BIENVENIDO</h1>
      <Link to="/home">
        <button>comenzar</button>
      </Link>
    </main>
  );
}
