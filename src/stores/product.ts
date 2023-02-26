import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import type Product from "@/types/Product";
import productService from "@/services/product";

export const useProductStore = defineStore("Product", () => {
  const dialog = ref(false);
  const products = ref<Product[]>([]);
  const editedProduct = ref<Product>({ name: "", price: 0 });

  watch(dialog, (newDialog, oldDialog) => {
    console.log(newDialog);
    if (!newDialog) {
      editedProduct.value = { name: "", price: 0 };
    }
  });
  async function getProducts() {
    try {
      const res = await productService.getProducts();
      products.value = res.data;
    } catch (e) {
      console.log(e);
    }
  }

  async function saveProduct() {
    try {
      const res = await productService.saveProducts(editedProduct.value);
      dialog.value = false;
      await getProducts();
    } catch (e) {
      console.log(e);
    }
  }
  function editProduct(product: Product) {
    editedProduct.value = product;
  }

  return {
    products,
    getProducts,
    dialog,
    editedProduct,
    saveProduct,
    editProduct,
  };
});
