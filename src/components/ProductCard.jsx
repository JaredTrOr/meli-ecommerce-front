export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-secondary p-4 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
      <p className="text-sm text-gray-400 mb-1">Category: {product.category}</p>
      <p className="text-primary font-medium mb-3">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAdd(product)}
        className="bg-primary text-surface px-4 py-2 rounded-lg hover:bg-green-400 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
