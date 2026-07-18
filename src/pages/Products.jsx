import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";
import { products, categories } from "../data/products";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const activeCategory = searchParams.get("category") || "All";
  const searchTerm = searchParams.get("search") || "";

  // Simulate a short loading state, as a real store would while fetching data
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm]);

  function handleCategoryClick(category) {
    const params = new URLSearchParams(searchParams);
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    setSearchParams(params);
  }

  function handleSearchChange(e) {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  }

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-brown dark:text-olive-light mb-3">
          The full collection
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink dark:text-cream">
          Shop All Products
        </h1>
      </div>

      {/* Search + category filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${
                activeCategory === cat
                  ? "bg-ink text-cream border-ink dark:bg-cream dark:text-ink dark:border-cream"
                  : "border-ink/20 text-ink/70 hover:border-ink dark:border-cream/20 dark:text-cream/70 dark:hover:border-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full md:w-64 bg-transparent border-b border-ink/30 dark:border-cream/30 py-2 text-sm text-ink dark:text-cream placeholder:text-ink/40 dark:placeholder:text-cream/40 outline-none focus:border-brown dark:focus:border-olive-light"
        />
      </div>

      {loading ? <Loader label="Loading products" /> : <ProductGrid products={filtered} />}
    </div>
  );
}

export default Products;
