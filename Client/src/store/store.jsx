import { create } from "zustand";

const optionGet = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Origin: "",
    authorization: "Barrer",
  },
};

const optionPost = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Origin: "",
    authorization: "Barrer",
  },
}

export const useGetProducts = create((set) => ({
  products: [],

  getAllProducts: async () => {
    await fetch("http://localhost:3001/products", optionGet)
      .then((response) => response.json())
      .then((response) => set((state) => ({ products: response })));
  },
}));

export const useGetUsers = create((set) => ({
  users: [],

  getAllUsers: async () => {
    await fetch("http://localhost:3001/users", optionGet)
    .then((response) => response.json())
    .then((response) => set((state) => ({users: response})));
  }
}));

export const usePostUser = create((set) => ({
  user: [],

  postUser: async () => {
    await fetch("http://localhost:3001/register", optionPost)
  }
}))
