import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  const handleCart = () => {
    return setCart();
  };
  const cartInfo = {
    cart,
    handleCart,
  };
  return (
    <div>
      <CartContext value={cartInfo}>{children}</CartContext>
    </div>
  );
};

export default CartProvider;
