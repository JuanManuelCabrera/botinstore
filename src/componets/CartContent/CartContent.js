import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../NavBar/NavBar";

import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(DataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className='cart-message-center'>El carro esta vacio</h2>
      )}
    </>
  );
};

export default CartContent;