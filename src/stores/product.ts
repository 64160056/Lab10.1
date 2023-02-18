import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type Product from "@/types/Product";
import axios from "axios";

export const useProductStore = defineStore("product", () => {
  const products = ref<Product[]>([]);
  async function getProducts() {
    try {
      const res = await axios.get("http://localhost:3000/products");
      products.value = res.data;
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  return { products, getProducts };
});
