import { useEffect, useState } from "react";
import { safeGetOrders } from "../api/ordersApi";

export function useFetchOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    safeGetOrders()
      .then(data => setOrders(data.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { orders, loading, error };
}
