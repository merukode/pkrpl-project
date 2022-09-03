import React from "react";
import { logo, profile, search } from "../img/index";
import "./store.css";
import { Link } from "react-router-dom";
import Content from '../content.json'
import Footer from '../Footer/Footer'
import { TextField, Autocomplete, createFilterOptions} from "@mui/material";

export default function Store() {
  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
  ]
  return (
    <>
    {/* Navbar */}
      <div className="navbar">
        <img src={logo} />

        <div className="middle">
          <Link to="/">
          <p>Home</p>
          </Link>
          <p>Store</p>
          <p>All Products</p>
        </div>

        <div className="right">
          
          <img src={profile} />
        </div>
      </div>

      {/* End Navbar */}

      {/* Content */}

      <div className="all-products">
        <h2>All Products</h2>
        <p>Semua produk disini sudah terverifikasi oleh ahlinya</p>
      </div>

      

      <div className="main-products">
      <div className="top-products">
      <input type="search" placeholder="Search..."/> 
      <Autocomplete
      className="filter"
      id="filter-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 200 }}
      
      renderInput={(params) => <TextField {...params} label="Custom filter" />}
    />
      </div>
      <div className="products">
        {
          Content.map(content => {
            return(
              <div className="box">
                <img src={content.Img}/>
                <p>{content.Title}</p>
                <p>{content.Price}</p>
              </div>
            )
          })
        }
      </div>
      </div>

      {/* End Content */}

      {/* Footer */}
      <Footer/>
      {/* End Footer */}
    </>
  );
}
