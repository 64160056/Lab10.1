import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type Product from "@/types/Product";
import productService from "@/services/product";

export const useProductStore = defineStore("Product", () => {
  const dialog = ref(false);
  const products = ref<Product[]>([]);
  async function getProducts() {
    try {
      const res = await productService.getProducts();
      products.value = res.data;
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  return { products, getProducts, dialog };
});
