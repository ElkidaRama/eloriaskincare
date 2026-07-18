import cleanser1 from "../assets/images/cleanser1.jpg";
import cleanser2 from "../assets/images/cleanser2.jpg";
import cleanser3 from "../assets/images/cleanser3.jpg";

import serum1 from "../assets/images/serum1.jpg";
import serum2 from "../assets/images/serum2.jpg";
import serum3 from "../assets/images/serum3.jpg";
import serum4 from "../assets/images/serum4.jpg";

import moisturizer1 from "../assets/images/moisturizer1.jpg";
import moisturizer2 from "../assets/images/moisturizer2.jpg";
import moisturizer3 from "../assets/images/moisturizer3.jpg";

import mask1 from "../assets/images/mask1.jpg";
import mask2 from "../assets/images/mask2.jpg";

import hair1 from "../assets/images/hair1.jpg";
import hair2 from "../assets/images/hair2.jpg";
import hair3 from "../assets/images/hair3.jpg";
import body1 from "../assets/images/body1.jpg";
import body2 from "../assets/images/body2.jpg";
import body3 from "../assets/images/body3.jpg";
export const categories = [
  "All",
  "Cleansers",
  "Serums",
  "Moisturizers",
  "Masks",
  "Hair Care",
  "Body Care",
];

export const products = [
  {
    id: 1,
    name: "Botanical Cream Cleanser",
    category: "Cleansers",
    price: 32,
    rating: 4.8,
    reviews: 214,
    tags: ["bestseller"],
    image: cleanser1,
    description:
      "A silken, low-foam cleanser that lifts away impurities without stripping the skin's natural moisture barrier. Formulated with oat extract and calendula.",
    ingredients: ["Oat Extract", "Calendula", "Glycerin", "Chamomile Water"],
    stock: 24,
  },
  {
    id: 2,
    name: "Clarifying Gel Wash",
    category: "Cleansers",
    price: 28,
    rating: 4.6,
    reviews: 132,
    tags: [],
    image: cleanser2,
    description:
      "A lightweight gel cleanser with willow bark and green tea to gently clarify congested, oily skin types.",
    ingredients: ["Willow Bark", "Green Tea", "Aloe Vera", "Panthenol"],
    stock: 31,
  },
  {
    id: 3,
    name: "Micellar Cleansing Milk",
    category: "Cleansers",
    price: 30,
    rating: 4.7,
    reviews: 98,
    tags: ["new"],
    image: cleanser3,
    description:
      "A creamy micellar milk that dissolves makeup and daily grime while leaving skin soft and comforted.",
    ingredients: ["Shea Butter", "Micellar Complex", "Vitamin E"],
    stock: 18,
  },
  {
    id: 4,
    name: "Vitamin C Radiance Serum",
    category: "Serums",
    price: 58,
    rating: 4.9,
    reviews: 342,
    tags: ["bestseller"],
    image: serum1,
    description:
      "A stabilized 15% vitamin C serum that brightens uneven tone and softens the look of fine lines over time.",
    ingredients: ["Vitamin C", "Ferulic Acid", "Vitamin E", "Hyaluronic Acid"],
    stock: 20,
  },
  {
    id: 5,
    name: "Hyaluronic Hydration Serum",
    category: "Serums",
    price: 46,
    rating: 4.8,
    reviews: 276,
    tags: ["bestseller"],
    image: serum2,
    description:
      "Multi-weight hyaluronic acid layers hydration deep into the skin for a plump, dewy finish that lasts all day.",
    ingredients: ["Hyaluronic Acid", "Panthenol", "Squalane"],
    stock: 27,
  },
  {
    id: 6,
    name: "Niacinamide Pore Refiner",
    category: "Serums",
    price: 42,
    rating: 4.5,
    reviews: 154,
    tags: [],
    image: serum3,
    description:
      "10% niacinamide and zinc work together to visibly refine pores and balance excess oil production.",
    ingredients: ["Niacinamide", "Zinc PCA", "Witch Hazel"],
    stock: 22,
  },
  {
    id: 7,
    name: "Retinol Renewal Drops",
    category: "Serums",
    price: 62,
    rating: 4.7,
    reviews: 87,
    tags: ["new"],
    image: serum4,
    description:
      "An encapsulated retinol treatment that supports gentle, gradual skin renewal overnight.",
    ingredients: ["Encapsulated Retinol", "Bakuchiol", "Squalane"],
    stock: 15,
  },
  {
    id: 8,
    name: "Daily Restore Moisturizer",
    category: "Moisturizers",
    price: 48,
    rating: 4.8,
    reviews: 301,
    tags: ["bestseller"],
    image: moisturizer1,
    description:
      "A lightweight, fast-absorbing cream that locks in moisture and strengthens the skin barrier throughout the day.",
    ingredients: ["Ceramides", "Shea Butter", "Jojoba Oil"],
    stock: 33,
  },
  {
    id: 9,
    name: "Overnight Repair Cream",
    category: "Moisturizers",
    price: 54,
    rating: 4.9,
    reviews: 198,
    tags: [],
    image: moisturizer2,
    description:
      "A rich, nourishing night cream infused with peptides and botanical oils to support overnight skin recovery.",
    ingredients: ["Peptide Complex", "Rosehip Oil", "Ceramides"],
    stock: 19,
  },
  {
    id: 10,
    name: "Matte Balance Fluid",
    category: "Moisturizers",
    price: 38,
    rating: 4.4,
    reviews: 76,
    tags: [],
    image: moisturizer3,
    description:
      "An oil-free, mattifying moisturizer designed for combination and oily skin that still craves hydration.",
    ingredients: ["Niacinamide", "Aloe Vera", "Silica"],
    stock: 26,
  },
  {
    id: 11,
    name: "Clay Detox Mask",
    category: "Masks",
    price: 36,
    rating: 4.6,
    reviews: 143,
    tags: [],
    image: mask1,
    description:
      "French green clay and charcoal draw out impurities and excess oil for a clearer, matte complexion.",
    ingredients: ["Green Clay", "Charcoal", "Tea Tree Oil"],
    stock: 21,
  },
  {
    id: 12,
    name: "Overnight Hydration Mask",
    category: "Masks",
    price: 44,
    rating: 4.8,
    reviews: 165,
    tags: ["bestseller"],
    image: mask2,
    description:
      "A gel-cream mask that works while you sleep, leaving skin visibly plumper and dewier by morning.",
    ingredients: ["Hyaluronic Acid", "Aloe Vera", "Honey Extract"],
    stock: 17,
  },
  {
    id: 13,
    name: "Botanical Repair Shampoo",
    category: "Hair Care",
    price: 34,
    rating: 4.7,
    reviews: 121,
    tags: [],
    image: hair1,
    description:
      "A sulfate-free shampoo with rosemary and biotin that gently cleanses while supporting healthy-looking hair.",
    ingredients: ["Rosemary Extract", "Biotin", "Coconut Oil"],
    stock: 29,
  },
  {
    id: 14,
    name: "Nourishing Hair Mask",
    category: "Hair Care",
    price: 40,
    rating: 4.8,
    reviews: 88,
    tags: ["new"],
    image: hair2,
    description:
      "A deep-conditioning weekly treatment that restores softness and shine to dry, damaged hair.",
    ingredients: ["Argan Oil", "Shea Butter", "Keratin"],
    stock: 14,
  },
  {
    id: 15,
    name: "Scalp Renewal Serum",
    category: "Hair Care",
    price: 46,
    rating: 4.5,
    reviews: 59,
    tags: [],
    image: hair3,
    description:
      "A lightweight leave-in serum that soothes the scalp and supports a healthy foundation for hair growth.",
    ingredients: ["Peppermint Oil", "Niacinamide", "Caffeine"],
    stock: 23,
  },
  {
    id: 16,
    name: "Whipped Body Butter",
    category: "Body Care",
    price: 36,
    rating: 4.9,
    reviews: 210,
    tags: ["bestseller"],
    image: body1,
    description:
      "An ultra-rich, fast-absorbing body butter that melts into skin for all-day softness with a warm, botanical scent.",
    ingredients: ["Shea Butter", "Cocoa Butter", "Sweet Almond Oil"],
    stock: 28,
  },
  {
    id: 17,
    name: "Exfoliating Body Wash",
    category: "Body Care",
    price: 26,
    rating: 4.5,
    reviews: 94,
    tags: [],
    image: body2,
    description:
      "A gentle exfoliating wash with bamboo powder that smooths and refines skin texture in the shower.",
    ingredients: ["Bamboo Powder", "Aloe Vera", "Oat Extract"],
    stock: 25,
  },
  {
    id: 18,
    name: "Dry Body Oil",
    category: "Body Care",
    price: 42,
    rating: 4.7,
    reviews: 132,
    tags: ["new"],
    image: body3,
    description:
      "A fast-absorbing, non-greasy dry oil that leaves skin silky soft with a subtle botanical glow.",
    ingredients: ["Jojoba Oil", "Rosehip Oil", "Vitamin E"],
    stock: 20,
  },
];

// Helper to find one product by id (string or number)
export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id));
}
