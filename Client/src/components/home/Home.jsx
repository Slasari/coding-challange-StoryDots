import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetProduct, useGetProducts } from "../../store/store";
import { ProductCard } from "../card/ProductCard";
import "./Home.css";
import { Header } from "../header/Header";
import { Pagination } from "../Pagination/Pagination";
import { LoadingPage } from "../loadingPage/LoadingPage";

export default function Home() {
  const products = useGetProducts((state) => state.products);

  const { getAllProducts } = useGetProducts();

  const {resetProduct } = useGetProduct()

  const [page, setPage] = useState(1);

  const [page2, setPage2] = useState(1);

  const [userData, setUserdata] = useState(localStorage.getItem("Usuario"));

  useEffect(() => {
    getAllProducts();
    resetProduct();
  }, []);

  return (
    <>
      <Header></Header>
      <nav>
        <ul className="nav">
          <section className="pagination">
            <Pagination
              products={products}
              page={page}
              setPage={setPage}
              page2={page2}
              setPage2={setPage2}
            ></Pagination>
          </section>
        </ul>
      </nav>
      <main>
        {products.length > 0 ? (
          <section className="cardSection">
            {products?.slice((page - 1) * 5, page * 5).map((e) => {
              return (
                <article key={e._id} className="cards">
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
        ) : (
          <LoadingPage></LoadingPage>
        )}
      </main>
    </>
  );
}
