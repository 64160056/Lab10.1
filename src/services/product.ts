import http from "./axios";

function getProducts() {
  return http.get("/products");
}

export default { getProducts };
