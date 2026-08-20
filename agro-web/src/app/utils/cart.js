export const getCart = () => {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getPrice = (price) => {
  if (typeof price === "number") return price;

  return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
};

export const getCartSubtotal = (cart) => {
  return cart.reduce(
    (total, item) => total + getPrice(item.price) * (item.quantity || 1),
    0,
  );
};
