import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export async function getOrders() {
  const response = await api.get("/orders");
  return response.data;
}

export async function safeGetOrders() {
  try {
    return await getOrders();
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}

export async function createOrder(orderPayload) {
  const res = await api.post("/orders", orderPayload);
  return res.data;
}
