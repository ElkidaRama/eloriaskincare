import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button";

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-24">
      <p className="text-xs uppercase tracking-widest text-brown dark:text-olive-light mb-3">
        My Account
      </p>
      <h1 className="font-display text-4xl text-ink dark:text-cream mb-10">
        Hello, {user?.name?.split(" ")[0]}
      </h1>

      <div className="bg-beige dark:bg-ink-800 p-8 space-y-5">
        <div>
          <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mb-1">
            Name
          </p>
          <p className="text-ink dark:text-cream">{user?.name}</p>
        </div>
        <div className="hairline" />
        <div>
          <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mb-1">
            Email
          </p>
          <p className="text-ink dark:text-cream">{user?.email}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-10">
        <Link to="/products">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
        <Link to="/cart">
          <Button variant="outline">View Cart</Button>
        </Link>
        <Button variant="ghost" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Profile;
