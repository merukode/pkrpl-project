import React from "react";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { cartAtom } from "../../states/Cart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Cart() {
  const [cart, setCart] = useAtom(cartAtom);

  function deleteCart(id) {
    setCart(cart.filter((c) => c.id !== id));
  }

  return (
    <>
      <Navbar />

      <div className="center">
        {/* <h3>Your Cart</h3>
        <p>Go checkout some items.</p>
        <button>Continue Shopping</button> */}
        {cart.length > 0 && cart
          ? cart.map((x) => (
              <>
                <div className="cart">
                  <img src={x.img[0]} />
                  <div className="cart-child">
                    <p>{x.title}</p>
                    <p>{x.price}</p>
                  </div>
                  <DeleteOutlineIcon onClick={() => deleteCart(x.id)} />
                </div>
              </>
            ))
          : null}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
