import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProducts } from "../../store/store";
import { ProductCard } from "../card/ProductCard";
import "./Home.css"

export default function Home() {
  const products = useGetProducts((state) => state.products);
  const { getAllProducts } = useGetProducts();
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <header>
        <section className="buttonSection">
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
          <Link to="/login">
            <button>Iniciar sesion</button>
          </Link>
        </section>
        <nav>
          <ul className="nav">
            <li>Categorias</li>
            <li>Precios</li>
            <li>Marcas</li>
            <li>Mas Vistos</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {products?.map((e) => {
            return (
              <article className="cards">
                <ProductCard
                  image={e.image_url}
                  name={e.name}
                  price={e.price}
                  description={e.description}
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
