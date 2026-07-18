# Sage — Premium Skincare E-Commerce (React 19 + Vite)

A modern, minimal skincare storefront built with React 19, Vite, React Router,
and Tailwind CSS v4. Pure JavaScript — no TypeScript.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Stack
- React 19 (functional components only)
- Vite
- React Router v7
- Tailwind CSS v4 (with dark mode via a `.dark` class)
- Context API for Auth, Cart, and Theme state
- localStorage for persistence (users, cart, session, theme)

## Folder Structure
```
src/
├── assets/
├── components/   Button, Input, Rating, Loader, Navbar, Footer, Hero,
│                 ProductCard, ProductGrid, CartItem, Testimonials
├── context/      AuthContext, CartContext, ThemeContext
├── data/         products.js (18 products), testimonials.js
├── layouts/      MainLayout, ProtectedRoute
├── pages/        Home, Products, ProductDetails, Cart, Login, Register,
│                 Profile, Checkout, NotFound
├── App.jsx
├── main.jsx
└── index.css
```

## Notes
- Auth is a local demo: accounts are stored (unencrypted) in `localStorage`
  under `sage_users`. This is for portfolio/demo purposes only — do not use
  this pattern for real user passwords in production.
- Product images are placeholder photography (Picsum) with a warm duotone
  filter applied for a consistent, editorial look. Swap `src/data/products.js`
  image URLs for real product photography when ready.
- Profile and Checkout pages are protected routes — logging in is required.
