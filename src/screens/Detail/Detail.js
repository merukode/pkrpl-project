import React, { useState, useEffect } from "react";
import { useProvider } from "../../provider/Provider";
import "./Detail.css";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { persona, logo, profile } from "../img/index";
import { CircularProgress, Stack } from "@mui/material";
import { useAtom } from "jotai";
import { cartAtom } from "../../states/Cart";

function Detail() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useAtom(cartAtom);
  const [defaultImage,setDefaultImage] = useState()
  const { getSpecificProduct } = useProvider();
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
  

  function addCart() {
    const cartItem = {
      img: data.images,
      title: data.title,
      price: data.price,
      id: data._id,
    };
    setCart((item) => [...item, cartItem]);
  }

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="circular">
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
                {
                  data.images.map((i,d) => (
                <div className="sub-child">
                  <img
                    src={data.images[d + 1]}
                  />
                </div>
                  ))
                }
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
