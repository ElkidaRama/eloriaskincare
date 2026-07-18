import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Input from "../components/Input";
import Button from "../components/Button";

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const result = register(form.name, form.email, form.password);
    if (result.success) {
      navigate("/profile");
    } else {
      setError(result.message);
    }
  }

  return (
    <div className="max-w-md mx-auto px-5 py-24">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-widest text-brown dark:text-olive-light mb-3">
          Join Sage
        </p>
        <h1 className="font-display text-4xl text-ink dark:text-cream">Create Account</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input label="Full Name" name="name" value={form.name} onChange={handleChange} required />
        <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
        <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
        <Input label="Confirm Password" type="password" name="confirm" value={form.confirm} onChange={handleChange} required />

        {error && <p className="text-sm text-red-700 dark:text-red-400">{error}</p>}

        <Button type="submit" fullWidth>
          Create Account
        </Button>
      </form>

      <p className="text-sm text-ink/60 dark:text-cream/60 text-center mt-8">
        Already have an account?{" "}
        <Link to="/login" className="text-brown dark:text-olive-light underline underline-offset-4">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
