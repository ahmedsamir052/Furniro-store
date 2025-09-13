import axios from "axios";
const api = axios.create({
  baseURL: "https://furniture-api.fly.dev/v1",
});
export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data.data;
};
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data.data;
};
