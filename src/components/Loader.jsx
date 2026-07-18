// Simple, minimal loading indicator used while data "loads"
// (e.g. simulated fetch delays).
function Loader({ label = "Loading" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <div className="w-10 h-10 border border-ink/20 dark:border-cream/20 border-t-brown dark:border-t-olive-light rounded-full animate-spin" />
      <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50">
        {label}
      </p>
    </div>
  );
}

export default Loader;
