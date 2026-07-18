import { Link } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-5 py-32 text-center">
      <p className="font-display text-[10rem] leading-none text-beige-dark dark:text-ink-800 select-none">
        404
      </p>
      <h1 className="font-display text-3xl text-ink dark:text-cream mb-4 -mt-8">
        Page not found
      </h1>
      <p className="text-sm text-ink/60 dark:text-cream/60 mb-8">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
