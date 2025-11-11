import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ProductsPage from "../pages/products/ProductsPage";
import CartPage from "../pages/cart/CartPage";
import { CartProvider } from "../context/CartContext";

export default function AppRouter() {
  return (
    <CartProvider>
      <BrowserRouter>
        <nav className="flex justify-center gap-6 p-4 border-b border-gray-700 bg-secondary">
          <NavLink to="/" className="text-gray-300 hover:text-primary">
            Products
          </NavLink>
          <NavLink to="/cart" className="text-gray-300 hover:text-primary">
            Cart
          </NavLink>
        </nav>

        <main className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}
