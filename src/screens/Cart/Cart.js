import React from "react";
import { useAtom } from "jotai";
import { cartAtom } from "../../states/Cart";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ReactWhatsapp from "react-whatsapp";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useAtom(cartAtom);

  function deleteCart(id) {
    setCart(cart.filter((c) => c.id !== id));
  }

  const price =
    cart.length === 0 ? 0 : cart.map((c) => c.price).reduce((a, b) => a + b);
  const message = `Hai Admin, Saya mau beli ${cart.map(
    (c) => c.title
  )}. Jadi berapa ya?`;

  return (
    <>
      <Navbar />
      <div className="center">
        {cart.length > 0 ? (
          cart.map((x) => (
            <>
              <div className="cart">
                <img src={x.img[0]} alt={x.title} />
                <div className="cart-child">
                  <p>{x.title}</p>
                  <p>Rp {x.price.toLocaleString("en-US")}</p>
                </div>
                <DeleteOutlineIcon onClick={() => deleteCart(x.id)} />
              </div>
            </>
          ))
        ) : (
          <h1>Please add some products first!</h1>
        )}
        {cart && (
          <>
            <h3>Total : Rp{price.toLocaleString("en-US")}</h3>
            <ReactWhatsapp number="+6281393973121" message={message} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
