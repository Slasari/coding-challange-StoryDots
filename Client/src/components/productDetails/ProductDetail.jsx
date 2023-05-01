import { Link, useParams } from "react-router-dom";
import { useGetProduct } from "../../store/store";
import { useEffect } from "react";

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
      <h1>{product.name}</h1>
    </main>
  );
}