import { create } from "zustand";

import swal from "sweetalert";


const optionGet = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Origin: "",
    authorization: "Barrer",
  },
};

export const useGetProducts = create((set) => ({
  products: [],

  getAllProducts: async () => {
    await fetch("http://localhost:3001/products", optionGet)
      .then((response) => response.json())
      .then((response) => set((state) => ({ products: response })));
  },
}));

export const useGetProduct = create((set) => ({
  product: [],

  getProduct: async (id) => {
    await fetch("http://localhost:3001/product/"+id, optionGet)
    .then((response) => response.json())
    .then((response) => set((state) => ({product: response})))
  },
}))

export const useGetBrands = create((set) => ({
  brands: "",

  getBrands: async() => {
    await fetch("http://localhost:3001/brands", optionGet)
    .then((response) => response.json())
    .then((response) => set((state) => ({brands: response})))
  }
}))

export const useAddProduct = create((set) => ({

  addProduct: async (data) => {
    await fetch("http://localhost:3001/products/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then(r => console.log({then:r})).catch(r => console.log({catch:r})).finally(r => console.log({finally:r}))
  }
}))

export const useGetUsers = create((set) => ({
  users: [],

  getAllUsers: async () => {
    await fetch("http://localhost:3001/users", optionGet)
      .then((response) => response.json())
      .then((response) => set((state) => ({ users: response })));
  },
}));

export const usePostUser = create((set) => ({

  postUser: async (username, email, password) => {
    await fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify({username: username, email: email, password: password}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then(r => console.log({then:r})).catch(r => console.log({catch:r})).finally(r => console.log({finally:r}))
  },
}));

export const useLoginUser = create((set) => ({

  loginUser: async (email, password) => {
    await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({email: email, password: password}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then(r => {
      if(r.status === 200){
        swal(
          "Listo!",
          "Iniciaste Sesión",
          "success",
          )
         
          r.json().then(e =>  localStorage.setItem("Usuario", e.tokenSession))
          window.location.href="/home"
      } else if (r.status === 400){
        swal(
          "Error",
          "Contraseña incorrecta",
          "error"
        )
      } else if (r.status === 405){
        swal(
          "Error",
          "Usuario no encontrado",
          "error"
        )
      } else {
        swal(
          "Error",
          "Oh no! ha ocurrido un error :(",
          "error"
        )
      }
    }).catch(r => console.log({catch:r})).finally(r => console.log({finally:r}))
  }
}))
