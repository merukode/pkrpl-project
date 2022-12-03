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
  const initialValue = 1;

  function deleteCart(id) {
    setCart(cart.filter((c) => c.id !== id));
  }

  console.log(cart.length === 1);

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
            <h3>
              Total : Rp{" "}
              {cart.length === 0
                ? "0"
                : cart.length === 1
                ? cart[0].price.toLocaleString("en-US")
                : cart
                    .reduce((a, b) => a.price + b.price)
                    .toLocaleString("en-US")}
            </h3>
            <ReactWhatsapp
              number="+6285782231103"
              message={`
      Hai Admin, Saya mau beli ${
        cart.length === 0 ? 0 : cart.map((c) => c.title)
      }. Jadi berapa ya?
    `}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

// <>
//   <Navbar />
//   <div className="center">
//     <>
//     {cart.length > 0 ? (
//       cart.map((x) => (
//           <div className="cart">
//             <img src={x.img[0]} alt={x.title} />
//             <div className="cart-child">
//               <p>{x.title}</p>
//               <p>Rp {x.price.toLocaleString("en-US")}</p>
//             </div>
//             <DeleteOutlineIcon onClick={() => deleteCart(x.id)} />
//           </div>
//       ))
//     ) : (
//       <h1>Please add some products first!</h1>
//     )}
//     {cart && (
//         <h3>
//           Total : Rp{" "}
//           {cart.length === 0
//             ? "0"
//             : cart
//                 .reduce((a, b) => a.price + b.price)
//                 .toLocaleString("en-US")}
//         </h3>
//     )}
//   </div>
//   <Footer />
// </>

export default Cart;
{
  /* <ReactWhatsapp
              number="+6285782231103"
              message={`
    Hai Admin, Saya mau beli ${
      cart.length === 0 ? 0 : cart.map((c) => c.title)
    }. Jadi berapa ya?
  `}
            /> */
}
