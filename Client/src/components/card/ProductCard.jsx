import "./ProductCard.css";
import { Link } from "react-router-dom";

export function ProductCard({ name, image, price, description, _id }) {
  return (
    <main className="card">
       <Link to={"/product/" + _id}>
      <img src={image} width="90%" height="60%"></img>
     
      <h1 className="h1">{name}</h1>
      
      <p className="price">${price}</p>
      </Link>
    </main>
  );
}
