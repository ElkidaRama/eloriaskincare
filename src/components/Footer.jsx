import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer className="bg-beige dark:bg-ink-900 border-t border-ink/10 dark:border-cream/10 mt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl text-ink dark:text-cream mb-3">
            Stay in the know
          </h3>
          <p className="text-sm text-ink/60 dark:text-cream/60 mb-5 max-w-sm">
            Join our list for early access to new formulas, skincare notes, and
            seasonal offers.
          </p>
          {subscribed ? (
            <p className="text-sm text-brown dark:text-olive-light">
              Thank you — you're on the list.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent border-b border-ink/30 dark:border-cream/30 py-2 text-sm text-ink dark:text-cream placeholder:text-ink/40 dark:placeholder:text-cream/40 outline-none focus:border-brown dark:focus:border-olive-light"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest text-ink dark:text-cream border-b border-ink dark:border-cream pb-2"
              >
                Join
              </button>
            </form>
          )}
        </div>

        {/* Shop links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mb-4">
            Shop
          </h4>
          <ul className="space-y-2 text-sm text-ink/70 dark:text-cream/70">
            <li>
              <Link
                to="/products"
                className="hover:text-brown dark:hover:text-olive-light"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=Serums"
                className="hover:text-brown dark:hover:text-olive-light"
              >
                Serums
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=Moisturizers"
                className="hover:text-brown dark:hover:text-olive-light"
              >
                Moisturizers
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=Hair+Care"
                className="hover:text-brown dark:hover:text-olive-light"
              >
                Hair Care
              </Link>
            </li>
          </ul>
        </div>

        {/* Account links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mb-4">
            Account
          </h4>
          <ul className="space-y-2 text-sm text-ink/70 dark:text-cream/70">
            <li>
              <Link
                to="/login"
                className="hover:text-brown dark:hover:text-olive-light"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="hover:text-brown dark:hover:text-olive-light"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-brown dark:hover:text-olive-light"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10 dark:border-cream/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-display text-xl lowercase text-ink dark:text-cream">
            eloria
          </p>
          <p className="text-xs text-ink/50 dark:text-cream/50">
            © {new Date().getFullYear()} Eloria Botanicals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
