import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import Input from "../components/Input";
import Button from "../components/Button";

const steps = ["Shipping", "Payment", "Review"];

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [placed, setPlaced] = useState(false);
  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    zip: "",
  });
  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const shippingCost = cartTotal >= 75 ? 0 : 8;
  const total = cartTotal + shippingCost;

  function handlePlaceOrder() {
    setPlaced(true);
    clearCart();
  }

  if (placed) {
    return (
      <div className="max-w-xl mx-auto px-5 py-28 text-center">
        <p className="text-xs uppercase tracking-widest text-brown dark:text-olive-light mb-3">
          Order confirmed
        </p>
        <h1 className="font-display text-4xl text-ink dark:text-cream mb-4">
          Thank you, {user?.name?.split(" ")[0]}
        </h1>
        <p className="text-sm text-ink/60 dark:text-cream/60 mb-8">
          Your order has been placed and will ship to {shipping.address || "your address"}
          . A confirmation has been sent to {user?.email}.
        </p>
        <Button onClick={() => navigate("/products")}>Continue Shopping</Button>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-5 py-28 text-center">
        <h1 className="font-display text-3xl text-ink dark:text-cream mb-4">
          Your cart is empty
        </h1>
        <Button onClick={() => navigate("/products")}>Shop Products</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8 py-16">
      <h1 className="font-display text-4xl text-ink dark:text-cream mb-10">Checkout</h1>

      {/* Step indicator - a real sequence: shipping -> payment -> review */}
      <div className="flex items-center gap-4 mb-12">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`w-7 h-7 flex items-center justify-center text-xs rounded-full border ${
                  i <= step
                    ? "bg-ink text-cream border-ink dark:bg-cream dark:text-ink dark:border-cream"
                    : "border-ink/30 text-ink/40 dark:border-cream/30 dark:text-cream/40"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`text-xs uppercase tracking-widest ${
                  i <= step ? "text-ink dark:text-cream" : "text-ink/40 dark:text-cream/40"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && <span className="w-8 h-px bg-ink/20 dark:bg-cream/20" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          {step === 0 && (
            <div className="space-y-6">
              <Input
                label="Shipping Address"
                name="address"
                value={shipping.address}
                onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
                required
              />
              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="City"
                  name="city"
                  value={shipping.city}
                  onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                  required
                />
                <Input
                  label="ZIP Code"
                  name="zip"
                  value={shipping.zip}
                  onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
                  required
                />
              </div>
              <Button onClick={() => setStep(1)}>Continue to Payment</Button>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <Input
                label="Card Number"
                name="cardNumber"
                value={payment.cardNumber}
                onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                placeholder="1234 5678 9012 3456"
                required
              />
              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="Expiry"
                  name="expiry"
                  value={payment.expiry}
                  onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                  placeholder="MM/YY"
                  required
                />
                <Input
                  label="CVC"
                  name="cvc"
                  value={payment.cvc}
                  onChange={(e) => setPayment({ ...payment, cvc: e.target.value })}
                  required
                />
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(0)}>Back</Button>
                <Button onClick={() => setStep(2)}>Review Order</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mb-1">
                  Ship to
                </p>
                <p className="text-sm text-ink dark:text-cream">
                  {shipping.address}, {shipping.city} {shipping.zip}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mb-1">
                  Payment
                </p>
                <p className="text-sm text-ink dark:text-cream">
                  Card ending in {payment.cardNumber.slice(-4) || "0000"}
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                <Button onClick={handlePlaceOrder}>Place Order</Button>
              </div>
            </div>
          )}
        </div>

        {/* Order summary */}
        <div className="bg-beige dark:bg-ink-800 p-6 h-fit">
          <h2 className="font-display text-xl text-ink dark:text-cream mb-6">
            Order Summary
          </h2>
          <div className="space-y-3 mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-ink/80 dark:text-cream/80">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="hairline my-4" />
          <div className="flex justify-between text-sm text-ink/80 dark:text-cream/80 mb-2">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-ink/80 dark:text-cream/80 mb-4">
            <span>Shipping</span>
            <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
          </div>
          <div className="hairline my-4" />
          <div className="flex justify-between text-ink dark:text-cream font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
