import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import "./Header.css";
import { SearchBar } from "../searchbar/Searchbar";

export function Header() {
  const [userData, setUserdata] = useState(localStorage.getItem("Usuario"));

  const { decodedToken } = useJwt(localStorage.getItem("Usuario"));

  const admin = decodedToken?.isAdmin;

  return (
    <header className="containerHeader">
      <SearchBar></SearchBar>
      {!userData ? (
        <section className="buttonSection">
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
          <Link to="/login">
            <button>Iniciar sesión</button>
          </Link>
        </section>
      ) : (
        <section className="buttonsContainer2">
          <article className="buttonSection">
            <Link>
              <button
                onClick={() => {
                  localStorage.removeItem("Usuario");
                  setUserdata("");
                  swal("Listo", "Cerraste sesión correctamente", "success");
                  window.location.href = "/";
                }}
              >
                Cerrar sesion
              </button>
            </Link>
          </article>
          {admin && (
            <section className="adminButtons">
              <Link to="/addProduct">
                <button>Crear nuevo producto</button>
              </Link>
              <Link to="/addBrand">
                <button>Agregar nueva marca</button>
              </Link>
            </section>
          )}
        </section>
      )}
    </header>
  );
}
