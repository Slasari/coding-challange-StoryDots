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
    authorization: `Barrer ${localStorage.getItem("Usuario")}`,
  },
};

export const useGetProducts = create((set) => ({
  products: [],

  productsCopy: [],

  getAllProducts: async () => {
    await fetch(
      "https://story-dots-challange-api.vercel.app/products",
      optionGet
    )
      .then((response) => response.json())
      .then((response) =>
        set((state) => ({
          products: response.reverse(),
          productsCopy: response,
        }))
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
    await fetch(
      "https://story-dots-challange-api.vercel.app/product/" + id,
      optionGet
    )
      .then((response) => response.json())
      .then((response) => set((state) => ({ product: response })));
  },
}));

export const useGetBrands = create((set) => ({
  brands: "",

  getBrands: async () => {
    await fetch("https://story-dots-challange-api.vercel.app/brands", optionGet)
      .then((response) => response.json())
      .then((response) => set((state) => ({ brands: response })));
  },
}));

export const useAddProduct = create((set) => ({
  addProduct: async (data) => {
    await fetch("https://story-dots-challange-api.vercel.app/products/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: `Barrer ${localStorage.getItem("Usuario")}`,
      },
    });
  },
}));

export const useAddBrand = create((set) => ({
  addBrand: async (data) => {
    await fetch("https://story-dots-challange-api.vercel.app/brands/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: `Barrer ${localStorage.getItem("Usuario")}`,
      },
    });
  },
}));

export const useGetUsers = create((set) => ({
  users: [],

  getAllUsers: async () => {
    await fetch("https://story-dots-challange-api.vercel.app/users", optionGet)
      .then((response) => response.json())
      .then((response) => set((state) => ({ users: response })));
  },
}));

export const usePostUser = create((set) => ({
  postUser: async (username, email, password) => {
    await fetch("https://story-dots-challange-api.vercel.app/register", {
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
    });
  },
}));

export const useDeleteProduct = create((set) => ({
  deleteProduct: async (id) => {
    await fetch(
      "https://story-dots-challange-api.vercel.app/products/" + id,
      optionDelete
    ).then((r) => {
      if (r.status === 200) {
        return swal("Operación completada", "Producto eliminado", "success");
      } else {
        return swal("Error", "Ha occurrido un error en la operación", "error");
      }
    });
    window.location.href = "/";
  },
}));

export const useEditProduct = create((set) => ({
  editProduct: async (edit, id) => {
    await fetch("https://story-dots-challange-api.vercel.app/products/" + id, {
      method: "PUT",
      body: JSON.stringify(edit),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: `Barrer ${localStorage.getItem("Usuario")}`,
      },
    });
  },
}));

export const useLoginUser = create((set) => ({
  loginUser: async (email, password) => {
    await fetch("https://story-dots-challange-api.vercel.app/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then((r) => {
      if (r.status === 200) {
        r.json().then((e) => localStorage.setItem("Usuario", e.tokenSession));
        swal("Listo!", "Iniciaste Sesión", "success");
        window.location.href = "/";
      } else if (r.status === 400) {
        swal("Error", "Contraseña incorrecta", "error");
      } else if (r.status === 405) {
        swal("Error", "Usuario no encontrado", "error");
      } else {
        swal("Error", "Oh no! ha ocurrido un error :(", "error");
      }
    });
  },
}));
