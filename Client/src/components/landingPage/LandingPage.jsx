import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"

export default function LandingPage() {
  return (
    <main className="LandingPage">
      <h1>Los mejores precios y la mejor calidad</h1>
      <Link to="/home">
        <button>Comenzar</button>
      </Link>
    </main>
  );
}
