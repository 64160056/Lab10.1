import type Product from "@/types/Product";
import http from "./axios";

function getProducts() {
  return http.get("/products");
}

function saveProduct(product: Product) {
  return http.post("/products", product);
}

function updateProduct(id: number, product: Product) {
  return http.patch(`"/products/"${id}`, product);
}
function deleteProduct(id: number) {
  return http.delete(`"/products/"${id}`);
}

export default { getProducts, saveProduct, updateProduct, deleteProduct };
