import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Product } from "@/types/Product";

export const useProductStore = defineStore("product", () => {
  const products = ref<Product[]>([]);
  return { products };
});
