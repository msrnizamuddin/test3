"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [mounted, setMounted] = useState(false);

  /* =====================================================
     LOAD CART
  ===================================================== */

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          localStorage.removeItem("cart");
        }
      } catch {
        localStorage.removeItem("cart");
      }
    }

    setMounted(true);
  }, []);

  /* =====================================================
     SAVE CART
  ===================================================== */

  useEffect(() => {
    if (!mounted) {
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems, mounted]);

  /* =====================================================
     ADD TO CART
     
     Normal cart behavior:
     - New product → quantity 1
     - Existing product → quantity + 1
  ===================================================== */

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingProduct = currentItems.find(
        (item) => item.name === product.name,
      );

      if (existingProduct) {
        return currentItems.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item,
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  /* =====================================================
     BUY NOW
     
     Buy Now means:
     - Ignore existing cart items
     - Checkout ONLY this product
     - Always start with quantity 1
  ===================================================== */

  const buyNow = (product) => {
    setCartItems([
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  /* =====================================================
     REMOVE FROM CART
  ===================================================== */

  const removeFromCart = (productName) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.name !== productName),
    );
  };

  /* =====================================================
     UPDATE QUANTITY
  ===================================================== */

  const updateQuantity = (productName, quantity) => {
    if (quantity <= 0) {
      setCartItems((currentItems) =>
        currentItems.filter((item) => item.name !== productName),
      );

      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.name === productName
          ? {
              ...item,
              quantity,
            }
          : item,
      ),
    );
  };

  /* =====================================================
     CLEAR CART
  ===================================================== */

  const clearCart = () => {
    setCartItems([]);
  };

  /* =====================================================
     CART COUNT
  ===================================================== */

  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );

  /* =====================================================
     CART TOTAL
  ===================================================== */

  const cartTotal = cartItems.reduce((total, item) => {
    const price = Number(String(item.price).replace(/[^0-9.]/g, ""));

    return total + price * (item.quantity || 0);
  }, 0);

  /* =====================================================
     PROVIDER
  ===================================================== */

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,

        // Cart actions
        addToCart,
        buyNow,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* =====================================================
   HOOK
===================================================== */

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
