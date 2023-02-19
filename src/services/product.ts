import type Product from "@/types/Product";
import http from "./axios";

function getProducts() {
  return http.get("/products");
}

function saveProducts(product: Product) {
  return http.post("/products", product);
}

export default { getProducts, saveProducts };
