import React, { useState, useEffect } from "react";
import { useProvider } from "../../provider/Provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css";
import { ads } from "../img";
import { useParams } from "react-router-dom";

export default function SlideItems() {
  const [item, setItem] = useState({});
  const [defaultImage, setDefaultImage] = useState();
  const { getAllProducts } = useProvider();

  useEffect(() => {
    async function getSpecific() {
      try {
        const data = await getAllProducts();
        console.log("item ==> ", data.data.products);
        setItem(data.data.products);
        // setDefaultImage(product.images[0]);
      } catch (e) {
        console.log(e);
      }
    }

    getSpecific();
  }, []);

  console.log(defaultImage);

  console.log(" images ==>", item);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="main-box">
      <h2> Multiple items </h2>
      <Slider {...settings}>
        {item && item.length > 0 ? item?.map((item, index) => {
          return (
            <div className="box" key={index}>
              <img src={item?.images[0]} />
              <p>deskripsi</p>
            </div>
          );
        }): null}
      </Slider>
    </div>
  );
}
