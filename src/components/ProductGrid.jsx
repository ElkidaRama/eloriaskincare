import ProductCard from "./ProductCard";

// Renders a responsive grid of ProductCards. Shows an empty state
// message when there are no products to display.
function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="font-display text-2xl text-ink dark:text-cream mb-2">
          No products found
        </p>
        <p className="text-sm text-ink/60 dark:text-cream/60">
          Try adjusting your search or category filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
