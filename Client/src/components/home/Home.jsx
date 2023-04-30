import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProducts } from "../../store/store";
import { ProductCard } from "../card/ProductCard";
import Style from "./Home.css?inline"

export default function Home() {
  const products = useGetProducts((state) => state.products);
  const { getAllProducts } = useGetProducts();
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <header>
        <section className={Style.buttonSection}>
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
          <Link to="/login">
            <button>Iniciar sesion</button>
          </Link>
        </section>
        <nav>
          <ul>
            <li>ordenar</li>
            <li>precio</li>
            <li>marca</li>
            <li>popularidad</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {products?.map((e) => {
            return (
              <article>
                <ProductCard
                  image={e.image_url}
                  name={e.name}
                  price={e.price}
                ></ProductCard>
              </article>
            );
          })}
        </section>
      </main>

      <footer>email: soyunapagina@hotmail.com Contactanos!</footer>
    </>
  );
}
