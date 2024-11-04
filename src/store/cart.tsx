import { create } from "zustand";
import { Carts, CartItem } from "../types/products";

interface CartStore {
  cart: Carts;
  getCart: () => Carts;
  addProduct: (product: CartItem) => void;
  inCart: (id: number) => boolean;
  updateCart: (cart: Carts) => void;
  removeProduct: (id: number) => void;
  changeQuantity: (id: number, quantity: number) => void;
  initializeCartFromLocalStorage: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: {
    products: []
  },
  getCart: () => {
    return get().cart;
  },
  inCart: (id: number) => {
    const products = get().cart.products;
    return products.some((product) => product.id === id);
  },
  addProduct: (product) => {
    set((state) => ({
      cart: {
        ...state.cart,
        products: [...state.cart.products, product],
      },
    }));
    localStorage.setItem("cart", JSON.stringify(get().cart));
  },

  updateCart: (cart) => {
    set((state) => ({
      cart: cart,
    }));
    localStorage.setItem("cart", JSON.stringify(get().cart));
  },
  removeProduct: (id) => {
    set((state) => ({
      cart: {
      ...state.cart,
      products: state.cart.products.filter((product) => product.id !== id),
      },
    }));
    localStorage.setItem("cart", JSON.stringify(get().cart));
  },
  changeQuantity: (id, quantity) => {
    set((state) => {
      if (quantity === 0) {
        return {
          cart: {
            ...state.cart,
            products: state.cart.products.filter(
              (product) => product.id !== id
            ),
          },
        };
      } else {
        return {
          cart: {
            ...state.cart,
            products: state.cart.products.map((product) =>
              product.id === id ? { ...product, quantity } : product
            ),
          },
        };
      }
    });
    localStorage.setItem("cart", JSON.stringify(get().cart));
  },
  initializeCartFromLocalStorage: () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartData: Carts = JSON.parse(cart);
      set({ cart: cartData });
    }
  },
}));
