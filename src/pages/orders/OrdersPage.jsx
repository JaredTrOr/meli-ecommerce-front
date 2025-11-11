import { useFetchOrders } from "../../hooks/useFetchOrders";

export default function OrdersPage() {
  const { orders, loading, error } = useFetchOrders();

  console.log('orders data')
  console.log(orders)

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error loading orders 😢</p>;

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <strong>{order.status}</strong> - {order.totalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}