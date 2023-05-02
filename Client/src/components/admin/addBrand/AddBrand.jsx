import { useEffect, useState } from "react";
import swal from "sweetalert";
import { useJwt } from "react-jwt";
import "./AddBrand.css";
import {
  useAddBrand,
  useAddProduct,
  useGetBrands,
  useGetProducts,
} from "../../../store/store";
import { AccesoDenegado } from "../../accesoDenegado/AccesoDenegado";

export function AddBrand() {

  const { addBrand } = useAddBrand();

  const { getBrands } = useGetBrands();

  const { decodedToken } = useJwt(localStorage.getItem("Usuario"));

  const admin = decodedToken?.isAdmin;

  useEffect(() => {
    getBrands();
  }, []);

  const [input, setInput] = useState({
    name: "",
    image: [],
  });

  const [errors, setErrors] = useState({});
  const [errorTrue, setErrorTrue] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const validate = (input) => {
    let errors = {};
    if (!input.name || input.name.length > 15) {
      errors.name = "El nombre de la Marca no es valido";
    }
    if (!input.image) {
      errors.image = "Se requiere una imagen";
    }
    return errors;
  };

  const handleimage = async (e) => {
    let theImage = input.image;
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "vayssr63");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dva6dmzv3/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setInput({ ...input, image: file.secure_url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", input.name);
    data.append("image", input.image);
    console.log(data);
    await addBrand({
      name: input.name,
      logo_url: input.image,
    });
    setInput({
      name: "",
      image: [],
    });
    getBrands();
    swal("Ya está", "La marca fue agregada con Éxito", "success");
  };

  return (
    <main>
        {
            admin === true ? 
            <>
      <div className="formPositioning">
        <input
          className="input-form"
          type="text"
          value={input.name}
          name="name"
          placeholder="Nombre de la Marca"
          onChange={(e) => handleChange(e)}
        ></input>
        {errors.name && errorTrue && <p className="errors">*{errors.name}</p>}
        <label className="label">Imagen Principal:</label>
        <input
          type="file"
          name="mainImage"
          onChange={(e) => handleimage(e)}
        ></input>
        {!input.name || !input.image ? (
          <button
            className="button"
            onClick={() => {
              swal("Error", "Debes completar todos los campos", "error");
              setErrorTrue(!false);
            }}
          >
            Añadir Marca
          </button>
        ) : (
          <button className="button" onClick={(e) => handleSubmit(e)}>
            Añadir Marca
          </button>
        )}
      </div>
      </> : <AccesoDenegado></AccesoDenegado> }
    </main>
  );
}
