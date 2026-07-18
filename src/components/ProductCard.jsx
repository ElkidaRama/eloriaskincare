import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Rating from "./Rating";

// Card used in product grids across the Home and Products pages.
function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  function handleQuickAdd(e) {
    e.preventDefault();
    addToCart(product, 1);
  }

  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-beige dark:bg-ink-800 aspect-[4/5] max-w-[320px] mx-auto">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover grayscale-[15%] sepia-[10%] transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {product.tags?.includes("bestseller") && (
          <span className="absolute top-3 left-3 bg-ink/85 text-cream text-[10px] uppercase tracking-widest px-3 py-1">
            Bestseller
          </span>
        )}
        {product.tags?.includes("new") && (
          <span className="absolute top-3 left-3 bg-olive text-cream text-[10px] uppercase tracking-widest px-3 py-1">
            New
          </span>
        )}

        {/* Quick add button revealed on hover */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 text-black text-xs uppercase tracking-widest py-3 opacity-0 group-hover:opacity-100 transition duration-300"
        >
          Quick Add
        </button>
      </div>

      <div className="mt-3 space-y-1 pl-10">
        <p className="text-[11px] uppercase tracking-widest text-ink/50 dark:text-cream/50">
          {product.category}
        </p>
        <h3 className="font-display text-xl md:text-1.6xl text-ink dark:text-cream leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center justify-between pt-0.5 pl-1 pr-7">
          <span className="text-sm text-ink/80 dark:text-cream/80">
            ${product.price}
          </span>
          <Rating value={product.rating} />
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
