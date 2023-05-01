import { Link, useParams } from "react-router-dom";
import { useGetProduct } from "../../store/store";
import { useEffect } from "react";
import "./ProductDetail.css";
import { Header } from "../header/Header";

export default function ProductDetail(props) {
  const product = useGetProduct((state) => state.product);

  const { id } = useParams();

  const { getProduct } = useGetProduct();

  useEffect(() => {
    getProduct(id);
    console.log(product);
  }, []);

  return (
    <main>
      <Header></Header>
      <section className="containerAll">
        <section className="container1">
          <section className="positioning">
            <h1 className="name">{product.name}</h1>
            <h1 className="price">{product.price}</h1>
          </section>
        </section>
        <section className="imageContainer">
          <img className="imgRender" src={product.image_url}></img>
          <section className="descriptionContainer">
            <p className="description">{product.description}</p>
          </section>
        </section>
      </section>
    </main>
  );
}
