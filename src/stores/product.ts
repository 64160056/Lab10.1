import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type Product from "@/types/Product";
import productService from "@/services/product";

export const useProductStore = defineStore("Product", () => {
  const dialog = ref(false);
  const products = ref<Product[]>([]);
  const editedProduct = ref<Product>({ name: "", price: 0 });
  async function getProducts() {
    try {
      const res = await productService.getProducts();
      products.value = res.data;
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  async function saveProduct() {
    try {
      const res = await productService.saveProducts(editedProduct.value);
      dialog.value = false;
    } catch (e) {
      console.log(e);
    }
  }
  function clearProduct() {
    
  }
  return { products, getProducts, dialog, editedProduct, saveProduct };
});
