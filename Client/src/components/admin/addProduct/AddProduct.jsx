import { useEffect, useState } from "react"
import swal from "sweetalert"
import "./AddProduct.css"
import { useNavigate } from "react-router-dom"
import { useJwt } from "react-jwt"
import { useAddProduct, useGetBrands, useGetProducts } from "../../../store/store"
import { AccesoDenegado } from "../../accesoDenegado/AccesoDenegado"

export function AddProduct () {

    const navigate = useNavigate()

    const { decodedToken } = useJwt(localStorage.getItem("Usuario"));

    const admin = decodedToken?.isAdmin;

    const {addProduct} = useAddProduct()

    const {getAllProducts} = useGetProducts()

    const {getBrands} = useGetBrands()

    const brands = useGetBrands((state) => state.brands)

    useEffect(() => {
        getBrands()
      }, []);

    const [input, setInput] = useState({
        name: "",
        description: "",
        image: [],
        price: "",
        brands: ""
    })

    const [errors, setErrors] = useState({})
    const [errorTrue, setErrorTrue] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const validate = (input) => {
        let errors = {}
        if (!input.name || input.name.length > 15) {
            errors.name = "El nombre del producto no es valido"
        }
        if (!input.description) {
            errors.description = "Agrega una descripción para el producto"
        }
        if (!input.image) {
            errors.image = "Se requiere una imagen"
        }
        if (!input.price) {
            errors.price = "El producto no tiene precio"
        }
        if (!input.brands) {
            errors.brands = "El producto debe tener marca"
        }
        return errors
    }

    const handleimage = async (e) => {
        let theImage = input.image
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
        theImage.push(file.secure_url)
        setInput({...input, image: theImage})
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("name", input.name)
        data.append("description", input.description)
        data.append("image", input.image)
        data.append("price", input.price)
        data.append("brands", input.brands)
        await addProduct({
            name: input.name,
            description: input.description,
            image_url: input.image,
            price: input.price,
            brand: input.brands

        })
        setInput({
            name: "",
            price: "",
            image: [],
            brands: "",
            description: "",
        })
       getAllProducts()
        swal("Ya está", "El producto fue agregado con éxito", "success")
        navigate("/")
    }

    return (
        <main>
           { 
           admin === true ? 
           <>
        <div className="formPositioning">
            <input className="input-form" type="text" value={input.name} name="name" placeholder="Nombre del producto" onChange={(e) => handleChange(e)}></input>
            {
                errors.name && errorTrue && (
                    <p className="errors">*{errors.name}</p>
                )
            }
            <input className="input-form" type="number" value={input.price} name="price" placeholder="Precio" onChange={(e) => handleChange(e)}></input>
            {
                errors.price && errorTrue && (
                    <p className="errors">*{errors.price}</p>
                )
            }
            <label className="label">Imagen Principal:</label> 
            <input type="file" name="mainImage" onChange={(e) => handleimage(e)}></input>
            {
                brands ? <select onChange={(e) => setInput({...input, brands : e.target.value})}>
                    <option defaultValue={""}>Seleccionar una marca</option>
                    {
                        brands.map((e) => <option key={e._id}value={e._id}>{e.name}</option>)
                    }
                </select>
                :
                <></>
            }
            <textarea rows="20" type="text" value={input.description} style={{ resize: "none" }} name="description" aria-multiline="true" placeholder="Añade una descripción" onChange={(e) => handleChange(e)}></textarea>
            {
                errors.description && errorTrue && (
                    <p className="errors">*{errors.description}</p>
                )
            }
            {
                !input.name || !input.price || !input.image || !input.description || !input.brands
                    ?
                    <button className="button" onClick={() => { swal("Error", "Debes completar todos los campos", "error"); setErrorTrue(!false) }}>Añadir producto</button>
                    :
                    <button className="button" onClick={(e) => handleSubmit(e)}>Añadir producto</button>
            }
        </div>
        </> : <AccesoDenegado></AccesoDenegado>}
    </main>
    )
}