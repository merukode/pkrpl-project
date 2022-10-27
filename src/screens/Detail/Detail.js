import React, { useState, useEffect } from "react";
import { useProvider } from "../../provider/Provider";
import "./Detail.css";
import Navbar from "../Navbar/Navbar"
import { Link, useParams } from "react-router-dom";
import { persona, logo, profile } from "../img/index";
import { CircularProgress } from "@mui/material";

function Detail() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
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

  console.log(data);

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

              <div className="button-bottom">
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
