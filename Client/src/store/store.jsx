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

const optionDelete = {
  method: "DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Origin: "",
    authorization: "Barrer",
  },
};

export const useGetProducts = create((set) => ({
  products: [],

  productsCopy: [],

  getAllProducts: async () => {
    await fetch("http://localhost:3001/products", optionGet)
      .then((response) => response.json())
      .then((response) =>
        set((state) => ({ products: response, productsCopy: response }))
      );
  },

  getFiltersProducts: (nameSearch, products) => {
    let result = products.filter((e) => {
      if (e.name.toString().toLowerCase().includes(nameSearch.toLowerCase())) {
        return e;
      }
    });
    set((state) => ({ products: result }));
  },
}));

export const useGetProduct = create((set) => ({
  product: [],

  getProduct: async (id) => {
    await fetch("http://localhost:3001/product/" + id, optionGet)
      .then((response) => response.json())
      .then((response) => set((state) => ({ product: response })));
  },
}));

export const useGetBrands = create((set) => ({
  brands: "",

  getBrands: async () => {
    await fetch("http://localhost:3001/brands", optionGet)
      .then((response) => response.json())
      .then((response) => set((state) => ({ brands: response })));
  },
}));

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
    })
      .then((r) => console.log({ then: r }))
      .catch((r) => console.log({ catch: r }))
      .finally((r) => console.log({ finally: r }));
  },
}));

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
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    })
      .then((r) => console.log({ then: r }))
      .catch((r) => console.log({ catch: r }))
      .finally((r) => console.log({ finally: r }));
  },
}));

export const useDeleteProduct = create((set) => ({
  deleteProduct: async (id) => {
    await fetch("http://localhost:3001/products/" + id, optionDelete).then(
      (r) => {
        if (r.status === 200) {
          return swal("Operación completada", "Producto eliminado", "success");
        } else {
          return swal(
            "Error",
            "Ha occurrido un error en la operación",
            "error"
          );
        }
      }
    );
    window.location.href = "/";
  },
}));

export const useLoginUser = create((set) => ({
  loginUser: async (email, password) => {
    await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    })
      .then((r) => {
        if (r.status === 200) {
          r.json().then((e) => localStorage.setItem("Usuario", e.tokenSession));
          return swal("Listo!", "Iniciaste Sesión", "success");
        } else if (r.status === 400) {
          return swal("Error", "Contraseña incorrecta", "error");
        } else if (r.status === 405) {
          return swal("Error", "Usuario no encontrado", "error");
        } else {
          return swal("Error", "Oh no! ha ocurrido un error :(", "error");
        }
      })
      .catch((r) => console.log({ catch: r }))
      .finally((r) => console.log({ finally: r }));
      if(r.status === 200) {window.location.href = "/";}
    },
}));
