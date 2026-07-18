import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const result = login(form.email, form.password);
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
          Welcome back
        </p>
        <h1 className="font-display text-4xl text-ink dark:text-cream">Login</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        {error && <p className="text-sm text-red-700 dark:text-red-400">{error}</p>}

        <Button type="submit" fullWidth>
          Login
        </Button>
      </form>

      <p className="text-sm text-ink/60 dark:text-cream/60 text-center mt-8">
        Don't have an account?{" "}
        <Link to="/register" className="text-brown dark:text-olive-light underline underline-offset-4">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
