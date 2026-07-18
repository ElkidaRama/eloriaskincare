import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Testimonials from "../components/Testimonials";
import { products } from "../data/products";
import hero from "../assets/images/home.jpg";

function Home() {
  const featured = products
    .filter((p) => p.tags.includes("bestseller"))
    .slice(0, 6);

  return (
    <div>
      <Hero />

      {/* Philosophy section */}
      <section className="max-w-6xl mx-auto px-4 mt-10 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-brown dark:text-olive-light mb-4">
              New philosophy of self-care
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-ink dark:text-cream leading-tight mb-5">
              Healthy skin &amp; hair, made simple
            </h2>
            <p className="text-sm text-ink/70 dark:text-cream/70 leading-7 mb-6 max-w-md">
              Eloria is about conscious simplicity — effective formulas,
              thoughtful ingredients, and self-care rituals designed for real
              everyday life. We believe skincare should support your skin, not
              overwhelm it, combining modern science with a calm, minimal
              approach.
            </p>
            <Link
              to="/products"
              className="text-xs uppercase tracking-widest text-ink dark:text-cream border-b border-ink dark:border-cream pb-1"
            >
              More about Eloria
            </Link>
          </div>
          <div className="aspect-[4/5] max-w-[260px] mx-auto overflow-hidden rounded-2xl shadow-lg">
            <img
              src={hero}
              alt="Eloria botanical skincare jar"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-brown dark:text-olive-light mb-3">
              Pure care by nature
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-cream">
              Best sellers
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden sm:block text-xs uppercase tracking-widest text-ink/70 dark:text-cream/70 hover:text-brown dark:hover:text-olive-light border-b border-ink/40 dark:border-cream/40 pb-1"
          >
            View all
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      {/* Banner strip */}
      <section className="bg-olive dark:bg-ink-900 py-20 mt-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">
            All-in-one skincare, simplified
          </h2>
          <p className="text-cream/80 max-w-lg mx-auto mb-8 text-sm md:text-base">
            Multifunctional skin care designed to simplify your daily routine
            without compromising results.
          </p>
          <Link
            to="/products"
            className="inline-block text-xs uppercase tracking-widest text-cream border-b border-cream pb-1 hover:opacity-70 transition-opacity"
          >
            Explore the complex
          </Link>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}

export default Home;
