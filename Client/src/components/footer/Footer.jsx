import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


export function Footer() {
  return (
    <div className="container">
      <div className="containerAll">
        <div className="containerGrid">
          <div className="containerLinks">
            <div className="products">
              <p className="titlep">Navegar</p>
            </div>
            <div className="products">
              <p className="titlep">Te ayudamos</p>
              <ul>
                <Link className="styles.text" to="/help">
                  <li>Centro de ayuda</li>
                </Link>
                <Link className="styles.text" to="/help">
                  <li>Tipos de entrega</li>
                </Link>
                <Link className="styles.text" to="/help">
                  <li>Cambios y devoluciones</li>
                </Link>
                <Link className="styles.text" to="/help">
                  <li>Términos y condiciones</li>
                </Link>
                <Link className="styles.text" to="/help">
                  <li>Comprobantes electrónicos</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="styles.socialApps">
            <p className="styles.titlep">Síguenos</p>
            <div className="styles.icons">
              <a
                className="styles.icon"
                rel="noreferrer"
                href="https://www.facebook.com"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                className="styles.icon"
                rel="noreferrer"
                href="https://www.instagram.com"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                className="styles.icon"
                rel="noreferrer"
                href="https://www.twitter.com"
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;