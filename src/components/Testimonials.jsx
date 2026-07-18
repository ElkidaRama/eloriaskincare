import { testimonials } from "../data/testimonials";
import Rating from "./Rating";

function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-widest text-brown dark:text-olive-light mb-3">
          Words from our community
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-cream">
          Loved by skin of every kind
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center px-4">
            <Rating value={t.rating} />
            <p className="font-display text-lg text-ink dark:text-cream mt-4 leading-relaxed">
              "{t.quote}"
            </p>
            <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mt-4">
              {t.name} — {t.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
