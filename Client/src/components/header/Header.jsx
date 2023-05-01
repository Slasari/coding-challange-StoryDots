import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";

export function Header() {
  const [userData, setUserdata] = useState(localStorage.getItem("Usuario"));

  const { decodedToken } = useJwt(localStorage.getItem("Usuario"));

  const navigate = useNavigate();

  const admin = decodedToken?.isAdmin

  return (
    <header>
      {!userData ? (
        <section className="buttonSection">
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
          <Link to="/login">
            <button>Iniciar sesion</button>
          </Link>
        </section>
      ) : (
        <section className="buttonSection">
          <Link>
            <button
              onClick={() => {
                localStorage.removeItem("Usuario");
                setUserdata("");
                swal("Listo", "Cerraste sesión correctamente", "success");
                navigate("/home")
              }}
            >
              Cerrar sesion
            </button>
          </Link>
          {admin && (
            <Link to="/dashboardX">
              <button>Administración</button>
            </Link>
          )}
        </section>
      )}
    </header>
  );
}
