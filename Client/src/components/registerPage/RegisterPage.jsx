import React, { useEffect, useState } from "react";
import { useGetUsers } from "../../store/store";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./RegisterPage.css"

export default function Register() {
  const users = useGetUsers((state) => state.users);
  const { getAllUsers } = useGetUsers();
  

  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  const validate = (input) => {
    let errors = {};

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let number = document.getElementById("number");
    let upper = document.getElementById("upper");
    let lower = document.getElementById("lower");
    let length = document.getElementById("length");
    let user = document.getElementById("user");
    let mail = document.getElementById("mail");
    let repeated = document.getElementById("repeated");
    let conform = document.getElementById("conform");

    if (input.username.length < 4 || input.username.length > 15) {
      errors.username =
        "El Nombre de Usuario debe tener entre 4 y 15 caracteres";
      user.style.color = "red";
    } else {
      user.style.color = "green";
    }
    if (!input.email.match(pattern)) {
      errors.email = "Ingresa un correo válido";
      mail.style.color = "red";
    } else {
      mail.style.color = "green";
    }
    if (users.map((e) => e.email).includes(input.email)) {
      errors.repeated = "El correo no existe";
      repeated.style.color = "red";
    } else {
      repeated.style.color = "green";
    }
    if (input.password.match(/[0-9]/)) {
      number.style.color = "green";
    } else {
      errors.password = "Debe contener al menos un número";
      number.style.color = "red";
    }
    if (input.password.match(/[a-z]/)) {
      lower.style.color = "green";
    } else {
      errors.password = "Debe contener al menos una letra minúscula";
      lower.style.color = "red";
    }
    if (input.password.match(/[A-Z]/)) {
      upper.style.color = "green";
    } else {
      errors.password = "Debe contener al menos una letra mayúscula";
      upper.style.color = "red";
    }
    if (input.password.length < 8 || input.password.length > 30) {
      errors.password = "Debe tener entre 8 y 30 caracteres";
      length.style.color = "red";
    } else {
      length.style.color = "green";
    }
    if (input.password === input.password2) {
      conform.style.color = "green";
    } else {
      conform.style.color = "red";
      errors.password2 = "Las contraseñas deben coincidir";
    }
    return errors;
  };

  const [errors, setErrors] = useState({});

  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
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
        Bienvenido!
      </h1>
      <form
        className="inputs"
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        <input
          className="input-register"
          value={info.username}
          type="text"
          placeholder="Nombre de Usuario"
          name="username"
          onChange={(e) => handleChange(e)}
        ></input>
        <>
          <ul>
            <li className="li" id="user">
              El Nombre de Usuario debe tener entre 4 y 15 caracteres
            </li>
          </ul>
        </>
        <input
          className="input-register"
          value={info.email}
          type="text"
          placeholder="Correo"
          name="email"
          onChange={handleChange}
        ></input>
        <>
          <ul>
            <li className="li" id="mail">
              Ingresa un correo válido
            </li>
            <li className="li" id="repeated">
              El correo no debe estar registrado aún
            </li>
          </ul>
        </>
        <section className="password">
        <input
          className="input-register"
          value={info.password}
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        ></input>
        <input
          className="input-register"
          value={info.password2}
          type="password"
          placeholder="Confirmar Contraseña"
          name="password2"
          onChange={handleChange}
        ></input>
        </section>
        <>
          <ul>
            <li className="li" id="number">
              Debe contener al menos un número
            </li>
            <li className="li" id="upper">
              Debe contener al menos una letra mayúscula
            </li>
            <li className="li" id="lower">
              Debe contener al menos una letra minúscula
            </li>
            <li className="li" id="length">
              Debe tener entre 8 y 30 caracteres
            </li>
            <li className="li" id="conform">
              Las contraseñas deben coincidir
            </li>
          </ul>
        </>
        {!errors.username &&
        !errors.email &&
        !errors.password &&
        !errors.password2 ? (
          <button
            className="button"
            onClick={() => {
              
              swal(
                "Bienvenido/a!",
                "Su cuenta fue creada con exito",
                "success"
              );
              navigate("/login");
            }}
          >
            Registrarse
          </button>
        ) : (
          <button
          onClick={() => {
            swal(
              "Atención!",
              "Verifica que tus datos sean correctos!",
              "warning"
            );
          }}>
            hola
          </button>
        )}
        <br />
      </form>
    </main>
  );
}
