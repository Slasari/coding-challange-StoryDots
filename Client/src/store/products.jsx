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

export const useGetProducts = create((set) => ({
  products: [],

  getAllProducts: async () => {
    await fetch("http://localhost:3001/products", optionGet)
      .then((response) => response.json())
      .then((response) => set((state) => ({ products: response })));
  },
}));
