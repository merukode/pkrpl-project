import React, { useState, useEffect } from "react";
import { useProvider } from "../../provider/Provider";
import "./Detail.css";
import Navbar from "../Navbar/Navbar"
import { Link, useParams } from "react-router-dom";
import { persona, logo, profile } from "../img/index";
import { CircularProgress } from "@mui/material";
import { useAtom } from "jotai";
import { cartAtom } from "../../states/Cart";

function Detail() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { getSpecificProduct } = useProvider();
  const [cart, setCart] = useAtom(cartAtom)
  const { id } = useParams();

  useEffect(() => {
    async function getSpecific() {
      try {
        const {
          data: { product },
        } = await getSpecificProduct(id);
        setData(product);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

    getSpecific();
  }, [id]);

  console.log(data);

  function addCart (){
    const cartItem = {
      img: data.images,
      title: data.title,
      price: data.price
    }
    setCart(item => [...item,cartItem])
  }
  

  return (
    <>
      <Navbar/>
      {loading ? (
        <div className="main-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="main-container">
          <div className="detail">
            <div className="detail-img">
              <img src={data.images[0]} />
            </div>

            <div className="detail-text">
              <p className="poster">{data.categories}</p>
              <h1>{data.title}</h1>
              <div className="price">
                <p>RP.{data.price.toLocaleString()}</p>
              </div>

              <div className="sub-img">
                <div className="sub-child"></div>
                <div className="sub-child"></div>
                <div className="sub-child"></div>
              </div>

              <div className="button-top">
                <p>BUY NOW</p>
              </div>

              <div onClick={addCart} className="button-bottom">
                <p>ADD TO CART</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
