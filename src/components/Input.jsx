// Reusable text input with a floating label style, used across
// login, register, checkout and profile forms.
function Input({ label, type = "text", value, onChange, name, required = false, placeholder = "", error = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-xs uppercase tracking-wide text-ink/60 dark:text-cream/60 mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-ink/30 dark:border-cream/30 py-2 text-ink dark:text-cream placeholder:text-ink/30 dark:placeholder:text-cream/30 focus:border-brown dark:focus:border-olive-light outline-none transition-colors"
      />
      {error && <p className="text-xs text-red-700 dark:text-red-400 mt-1">{error}</p>}
    </div>
  );
}

export default Input;
