import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./LoginPage.css"

export default function Login() {
  const navigate = useNavigate();

  const [count, setCount] = useState(false);

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [errorLogin, setErrorLogin] = useState("");

  useEffect(() => {
    setErrorLogin("");
  }, []);

  const validate = (info) => {
    let errors = {};

    if (!info.email) {
      errors.email = "Ingresar un email";
    }
    if (!info.password) {
      errors.password = "Ingresar la contraseña";
    }
    return errors;
  };

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setInfo(
      e.target.name === "email"
        ? {
            ...info,
            [e.target.name]: e.target.value,
          }
        : { ...info, [e.target.name]: e.target.value }
    );
    setErrors(
      validate({
        ...info,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <main className="container">
      <h1
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Inicio de sesión
      </h1>
      <p>Ingresa con tu cuenta</p>

      <section className="inputs">
        <p>Ingresa tu email</p>
        <input
          className="input-login"
          type="text"
          placeholder="Correo"
          name="email"
          onChange={handleChange}
        ></input>
        {!errorLogin && !errors.email ? (
          <p className="errors1">soy un error</p>
        ) : info.email.length > 0 && !errorLogin && !errors.email ? (
          <p className="errors1">soy un error</p>
        ) : errorLogin === "Email inválido" ? (
          <p className="errors">{errorLogin}</p>
        ) : errorLogin === "Contraseña inválida" ? (
          <p className="errors1">soy un error</p>
        ) : (
          errors.email && <p className="errors">{errors.email}</p>
        )}
        <p>Ingresa tu contraseña</p>
        <input
          className={`input-login`}
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        ></input>
        {!errorLogin && !errors.password ? (
          <p className="errors1">soy un error</p>
        ) : info.password.length > 0 && !errorLogin && !errors.password ? (
          <p className="errors1">soy un error</p>
        ) : errorLogin === "Contraseña inválida" ? (
          <p className="errors">{errorLogin}</p>
        ) : errorLogin === "Email inválido" ? (
          <p className="errors1">soy un error</p>
        ) : (
          errors.password && <p className="errors1">{errors.password}</p>
        )}
        <br />
        {!errors.email &&
        info.email.length > 0 &&
        info.password.length > 0 &&
        !errors.password ? (
          <button className="button" onClick={() => LoginUser(info)}>
            Iniciar Sesion
          </button>
        ) : (
          <button
            className="button"
            onClick={() => swal(
              "Atención!",
              "Verifica que tus datos esten correctos",
              "warning"
            )}
          >
            Iniciar Sesion
          </button>
        )}
        <br />
      </section>
    </main>
  );
}
