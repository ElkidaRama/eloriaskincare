// Displays a row of stars for a given rating (out of 5) plus an
// optional review count next to it.
function Rating({ value = 0, reviews }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5 text-brown dark:text-olive-light">
        {stars.map((star) => (
          <span key={star}>{value >= star ? "★" : "☆"}</span>
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-ink/50 dark:text-cream/50">({reviews})</span>
      )}
    </div>
  );
}

export default Rating;
