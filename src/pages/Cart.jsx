import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

function Cart() {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleCheckout() {
    navigate(user ? "/checkout" : "/login");
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-28 text-center">
        <h1 className="font-display text-4xl text-ink dark:text-cream mb-4">
          Your cart is empty
        </h1>
        <p className="text-sm text-ink/60 dark:text-cream/60 mb-8">
          Looks like you haven't added anything yet. Explore the collection to
          find your next skincare ritual.
        </p>
        <Link to="/products">
          <Button>Shop All Products</Button>
        </Link>
      </div>
    );
  }

  const shipping = cartTotal >= 75 ? 0 : 8;
  const total = cartTotal + shipping;

  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-16">
      <h1 className="font-display text-4xl text-ink dark:text-cream mb-10">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Items */}
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button
            onClick={clearCart}
            className="mt-6 text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 hover:text-brown dark:hover:text-olive-light underline underline-offset-4"
          >
            Clear cart
          </button>
        </div>

        {/* Summary */}
        <div className="bg-beige dark:bg-ink-800 p-6 h-fit">
          <h2 className="font-display text-xl text-ink dark:text-cream mb-6">
            Order Summary
          </h2>
          <div className="space-y-3 text-sm text-ink/80 dark:text-cream/80">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-ink/50 dark:text-cream/50">
                Free shipping on orders over $75
              </p>
            )}
          </div>
          <div className="hairline my-5" />
          <div className="flex justify-between text-ink dark:text-cream font-medium mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button fullWidth onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
