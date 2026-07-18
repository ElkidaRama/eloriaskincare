import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { cartCount } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Shop" },
  ];

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false);
      setSearchTerm("");
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/95 dark:bg-ink-950/95 backdrop-blur-sm border-b border-ink/10 dark:border-cream/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-ink dark:text-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-4 h-px bg-current" />
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm uppercase tracking-widest text-ink/80 dark:text-cream/80 hover:text-brown dark:hover:text-olive-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link
          to="/"
          className="font-display text-3xl lowercase tracking-tight text-ink dark:text-cream absolute left-1/2 -translate-x-1/2"
        >
          eloria
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            className="text-ink dark:text-cream hover:text-brown dark:hover:text-olive-light transition-colors"
          >
            ⌕
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="hidden sm:block text-ink dark:text-cream hover:text-brown dark:hover:text-olive-light transition-colors text-sm"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <Link
            to={user ? "/profile" : "/login"}
            aria-label="Account"
            className="hidden sm:block text-ink dark:text-cream hover:text-brown dark:hover:text-olive-light transition-colors"
          >
            ⚇
          </Link>

          <Link
            to="/cart"
            aria-label="Cart"
            className="relative text-ink dark:text-cream hover:text-brown dark:hover:text-olive-light transition-colors"
          >
            ⛃
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brown dark:bg-olive text-cream text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-7xl mx-auto px-5 md:px-8 pb-4"
        >
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-transparent border-b border-ink/30 dark:border-cream/30 py-2 text-ink dark:text-cream placeholder:text-ink/30 dark:placeholder:text-cream/30 outline-none focus:border-brown dark:focus:border-olive-light"
          />
        </form>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-5 pb-5 border-t border-ink/10 dark:border-cream/10 pt-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm uppercase tracking-widest text-ink/80 dark:text-cream/80"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={user ? "/profile" : "/login"}
            onClick={() => setMenuOpen(false)}
            className="py-2 text-sm uppercase tracking-widest text-ink/80 dark:text-cream/80"
          >
            {user ? "My Profile" : "Login"}
          </Link>
          <button
            onClick={toggleTheme}
            className="py-2 text-left text-sm uppercase tracking-widest text-ink/80 dark:text-cream/80"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
