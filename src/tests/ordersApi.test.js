jest.mock("axios", () => {
  const mockGet = jest.fn();
  const mockPost = jest.fn();

  const actualAxios = jest.requireActual("axios");
  return {
    ...actualAxios,
    create: jest.fn(() => ({
      get: mockGet,
      post: mockPost,
      defaults: {
        baseURL: 'http://localhost:8080/api/v1',
        headers: { "Content-Type": "application/json" },
      },
    })),
    
    __mockGet: mockGet,
    __mockPost: mockPost,
  };
});

// Import *after* jest.mock
import axios from "axios";
import { api, getOrders, safeGetOrders, createOrder } from "../api/ordersApi";

describe("ordersApi", () => {
  let mockGet, mockPost;

  beforeEach(() => {
    // ✅ retrieve mocks from axios mock
    mockGet = axios.__mockGet;
    mockPost = axios.__mockPost;
    jest.clearAllMocks();
  });

  test("axios instance has correct baseURL and headers", () => {
    expect(api.defaults.baseURL).toBe("http://localhost:8080/api/v1");
    expect(api.defaults.headers["Content-Type"]).toBe("application/json");
  });

  test("getOrders returns data when request succeeds", async () => {
    const mockData = [{ id: 1, totalPrice: 200 }];
    mockGet.mockResolvedValueOnce({ data: mockData });

    const result = await getOrders();
    expect(mockGet).toHaveBeenCalledWith("/orders");
    expect(result).toEqual(mockData);
  });

  test("safeGetOrders handles network error gracefully", async () => {
    const error = new Error("Network Error");
    mockGet.mockRejectedValueOnce(error);

    await expect(safeGetOrders()).rejects.toThrow("Network Error");
  });

  test("createOrder sends POST request with correct payload", async () => {
    const payload = { productId: 1, quantity: 2 };
    const mockResponse = { id: 99, ...payload };
    mockPost.mockResolvedValueOnce({ data: mockResponse });

    const result = await createOrder(payload);

    expect(mockPost).toHaveBeenCalledWith("/orders", payload);
    expect(result).toEqual(mockResponse);
  });

  test("createOrder throws when POST fails", async () => {
    const error = new Error("Server Error");
    mockPost.mockRejectedValueOnce(error);

    await expect(createOrder({})).rejects.toThrow("Server Error");
  });
});
