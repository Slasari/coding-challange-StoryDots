import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h5>BIENVENIDO</h5>
      <Link to="/home"><button>comenzar</button></Link>
      
    </div>
  );
}
