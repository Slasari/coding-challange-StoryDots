import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
import { useDeleteProduct} from "../../store/store";

export function ProductCard({ name, image, price, description, _id }) {

  const { decodedToken } = useJwt(localStorage.getItem("Usuario"));

  const admin = decodedToken?.isAdmin;

  const { deleteProduct} = useDeleteProduct()


  return (
    <main className="card">
       <Link to={"/product/" + _id}>
      <img src={image} width="100px" height="100px"></img>
     
      <h1 className="h1">{name}</h1>
      
      <p className="price">${price}</p>
      </Link>
      {
        decodedToken?.isAdmin && <section className="cardBottons">
      <button className="deleteButton" onClick={(e) => deleteProduct(_id)}>Borrar</button>
      <button className="editButton" >Editar</button>
      </section>}
      {

      }
    </main>
  );
}
