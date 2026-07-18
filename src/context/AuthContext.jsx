import { createContext, useState, useEffect } from "react";

// Context that stores the currently logged-in user and exposes
// register / login / logout actions. Users are persisted in localStorage.
export const AuthContext = createContext(null);

const USERS_KEY = "sage_users";
const SESSION_KEY = "sage_current_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first load, check if a user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem(SESSION_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Read all registered users from localStorage
  function getUsers() {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  // Register a new user. Returns { success, message }
  function register(name, email, password) {
    const users = getUsers();
    const alreadyExists = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (alreadyExists) {
      return { success: false, message: "An account with this email already exists." };
    }

    const newUser = { id: Date.now(), name, email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

    // Log the new user in automatically
    const { password: _pw, ...safeUser } = newUser;
    setUser(safeUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser));

    return { success: true, message: "Account created successfully." };
  }

  // Log an existing user in. Returns { success, message }
  function login(email, password) {
    const users = getUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!found) {
      return { success: false, message: "Incorrect email or password." };
    }

    const { password: _pw, ...safeUser } = found;
    setUser(safeUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser));

    return { success: true, message: "Welcome back!" };
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  }

  const value = { user, loading, register, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
