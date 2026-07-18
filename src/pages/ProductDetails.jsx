import { useState, useContext, useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById, products } from "../data/products";
import { CartContext } from "../context/CartContext";
import Rating from "../components/Rating";
import Button from "../components/Button";
import ProductGrid from "../components/ProductGrid";
function ProductDetails() {
  const { id } = useParams();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 text-center">
        <h1 className="font-display text-3xl text-ink dark:text-cream mb-4">
          Product not found
        </h1>
        <Button onClick={() => navigate("/products")}>Back to Shop</Button>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  function handleAddToCart() {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
      {/* Breadcrumb */}
      <div className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mb-10 flex gap-2">
        <Link to="/" className="hover:text-brown dark:hover:text-olive-light">
          Home
        </Link>
        <span>/</span>
        <Link
          to="/products"
          className="hover:text-brown dark:hover:text-olive-light"
        >
          Shop
        </Link>
        <span>/</span>
        <span className="text-ink dark:text-cream">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[500px_1fr] gap-10 items-center">
        {/* Image */}
        <div className="aspect-[4/5] max-w-[380px] mx-auto overflow-hidden rounded-2xl bg-beige dark:bg-ink-800">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover grayscale-[15%] sepia-[10%]"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-brown dark:text-olive-light mb-3">
            {product.category}
          </p>
          <h1 className="font-display text-4xl text-ink dark:text-cream mb-4">
            {product.name}
          </h1>
          <Rating value={product.rating} reviews={product.reviews} />
          <p className="text-2xl text-ink dark:text-cream mt-6">
            ${product.price}
          </p>

          <p className="text-sm md:text-base text-ink/70 dark:text-cream/70 leading-relaxed mt-6 max-w-md">
            {product.description}
          </p>

          {/* Ingredients */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mb-2">
              Key Ingredients
            </p>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="text-xs px-3 py-1 border border-ink/20 dark:border-cream/20 text-ink/70 dark:text-cream/70"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-ink/50 dark:text-cream/50 mt-6">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>

          {/* Quantity + Add to cart */}
          <div className="flex flex-col items-start gap-5 mt-8">
            <div className="flex items-center border border-ink/20 dark:border-cream/20">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-11 flex items-center justify-center text-ink dark:text-cream hover:bg-beige dark:hover:bg-ink-800"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center text-sm text-ink dark:text-cream">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-11 flex items-center justify-center text-ink dark:text-cream hover:bg-beige dark:hover:bg-ink-800"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <Button onClick={handleAddToCart} className="w-full max-w-xs h-10">
              {added ? "Added ✓" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-28">
          <h2 className="font-display text-3xl text-ink dark:text-cream mb-10">
            You may also like
          </h2>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
