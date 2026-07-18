import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// A single row in the shopping cart, with quantity controls and
// a remove action.
function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex gap-5 py-6 border-b border-ink/10 dark:border-cream/10">
      <Link to={`/products/${item.id}`} className="shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-28 object-cover grayscale-[15%] sepia-[10%]"
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between gap-4">
          <div>
            <Link to={`/products/${item.id}`}>
              <h3 className="font-display text-lg text-ink dark:text-cream hover:text-brown dark:hover:text-olive-light transition-colors">
                {item.name}
              </h3>
            </Link>
            <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mt-1">
              {item.category}
            </p>
          </div>
          <p className="text-sm text-ink dark:text-cream whitespace-nowrap">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          {/* Quantity selector */}
          <div className="flex items-center border border-ink/20 dark:border-cream/20">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="w-8 h-8 flex items-center justify-center text-ink dark:text-cream hover:bg-beige dark:hover:bg-ink-800 disabled:opacity-30"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-8 text-center text-sm text-ink dark:text-cream">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-ink dark:text-cream hover:bg-beige dark:hover:bg-ink-800"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 hover:text-brown dark:hover:text-olive-light underline underline-offset-4"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
