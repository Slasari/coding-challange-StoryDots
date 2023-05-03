import { Link, useParams, useNavigate } from "react-router-dom";
import { useGetProduct, useEditProduct } from "../../store/store";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import "./ProductDetail.css";
import { Header } from "../header/Header";
import swal from "sweetalert";
import { LoadingPage } from "../loadingPage/LoadingPage";

export default function ProductDetail(props) {
  const product = useGetProduct((state) => state.product);

  const { decodedToken } = useJwt(localStorage.getItem("Usuario"));

  const admin = decodedToken?.isAdmin;

  const { id } = useParams();

  const navigate = useNavigate();

  const { getProduct } = useGetProduct();

  const { editProduct } = useEditProduct();

  const [edit, setEdit] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [showInputs, setShowInputs] = useState("");

  const handleInputState = (e) => {
    e.preventDefault();
    setShowInputs(e.target.value);
  };

  const handleChange = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit.name) {
      edit.name = product.name;
    }
    if (!edit.price) {
      edit.price = product.price;
    }
    if (!edit.description) {
      edit.description = product.description;
    }
    editProduct(edit, id);
    swal(
      "Operación completada",
      "El producto fue modificado correctamente",
      "success"
    );
    navigate("/");
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <main>
      <Header></Header>
      <section className="containerAll">
        {(product?.brand?.name.length > 0 && product?.brand.logo_url.length > 0) ? (
          <>
            <section className="container1">
              <section className="positioning">
                <h1 className="name">{product.name}</h1>
                <h1 className="price">$ {product.price}</h1>
                <h1 className="brand">{product.brand?.name}</h1>
                <img
                  src={product.brand?.logo_url}
                  width={"150px"}
                  height={"150px"}
                ></img>
              </section>
              {admin && (
                <section>
                  <section className="editProductButtons">
                    <button
                      className="editButtonStyle"
                      onClick={(e) => handleInputState(e)}
                      value={product.name}
                    >
                      Cambiar Nombre
                    </button>
                    <button
                      className="editButtonStyle"
                      onClick={(e) => handleInputState(e)}
                      value={product.price}
                    >
                      Cambiar Precio
                    </button>
                    <button
                      className="editButtonStyle"
                      onClick={(e) => handleInputState(e)}
                      value={product.description}
                    >
                      Cambiar Descripción
                    </button>
                    <button onClick={(e) => handleSubmit(e)}>
                      Guardar cambios
                    </button>
                  </section>
                  <section className="editInputs">
                    {showInputs === product.name && (
                      <input
                        className="input"
                        placeholder="Modificar nombre"
                        name="name"
                        value={edit.name}
                        onChange={(e) => handleChange(e)}
                      ></input>
                    )}
                    {Number(showInputs) === product.price && (
                      <input
                        className="input"
                        placeholder="Modificar Precio"
                        name="price"
                        value={edit.price}
                        type="number"
                        onChange={(e) => handleChange(e)}
                      ></input>
                    )}
                    {showInputs === product.description && (
                      <input
                        className="input"
                        placeholder="Modificar Descripción"
                        name="description"
                        value={edit.description}
                        onChange={(e) => handleChange(e)}
                      ></input>
                    )}
                  </section>
                </section>
              )}
            </section>
            <section className="imageContainer">
              <img className="imgRender" src={product.image_url}></img>
            </section>
            <section className="descriptionContainer">
              <section className="description">
                {product.description?.split("\n").map((ren) => {
                  return <p>{ren}</p>;
                })}
              </section>
            </section>
          </>
        ) : (
          <LoadingPage></LoadingPage>
        )}
      </section>
    </main>
  );
}
