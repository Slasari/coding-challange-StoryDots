import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"

export default function LandingPage() {
  return (
    <main className="LandingPage">
      <h1>BIENVENIDO</h1>
      <Link to="/home">
        <button>comenzar</button>
      </Link>
    </main>
  );
}
