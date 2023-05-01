import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetProducts } from "../../store/store";
import { ProductCard } from "../card/ProductCard";
import "./Home.css";
import { Header } from "../header/Header";


export default function Home() {
  const products = useGetProducts((state) => state.products);

  const { getAllProducts } = useGetProducts();

  const [userData, setUserdata] = useState(localStorage.getItem("Usuario"));

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
       <Header></Header>
      <nav>
        <ul className="nav">
          <li>Precios</li>
          <li>Marcas</li>
          <li>Mas Vistos</li>
        </ul>
      </nav>
      <main>
        <section className="cardSection">
          {products?.map((e) => {
            return (
              <article className="cards">
                <ProductCard
                  _id={e._id}
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
    </>
  );
}
