import { Link } from "react-router-dom";
import hero from "../assets/images/hero2.jpg";

function Hero() {
  return (
    <section className="relative h-[55vh] min-h-[450px] overflow-hidden rounded-2xl mx-6 mt-6">
      <img
        src={hero}
        alt="Luxury skincare"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-16">
        <h1 className="font-display text-5xl md:text-7xl leading-none uppercase tracking-wide text-white">
          ELORIA
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-6">
          <p className="text-white/90 max-w-sm text-sm leading-6">
            Botanical formulas for healthy skin and hair — thoughtful
            ingredients, gentle rituals, made for everyday care.
          </p>

          <Link
            to="/products"
            className="px-6 py-3 border border-white text-white uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
