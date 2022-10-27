import { useEffect, useState } from "react";
import { useProvider } from "../../provider/Provider";
import { logo, profile, search } from "../img/index";
import {
  TextField,
  Autocomplete,
  createFilterOptions,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import Content from "../content.json";
import Footer from "../Footer/Footer";
import "./Store.css";
import Navbar from "../Navbar/Navbar"

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

export default function Store() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAllProducts } = useProvider();

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
  });

  useEffect(() => {
    async function getAllData() {
      try {
        const {
          data: { products },
        } = await getAllProducts();
        setDatas(products);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

    getAllData();
  }, []);

  console.log(datas);

  return (
    <>
      {/* Navbar */}
      <Navbar/>

      {/* End Navbar */}

      {/* Content */}

      <div className="all-products">
        <h2>All Products</h2>
        <p>Semua produk disini sudah terverifikasi oleh ahlinya</p>
      </div>

      <div className="main-products">
        <div className="top-products">
          <Autocomplete
            className="filter"
            id="filter-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Custom filter" />
            )}
          />
        </div>
        {loading ? (
          <CircularProgress />
        ) : (
          <div className="products">
            {datas.map((d) => {
              return (
                <Link
                  style={{ color: "black", cursor: "pointer" }}
                  className="box"
                  to={`/store/detail/${d._id}`}
                >
                  <img src={d.images[0]} alt="" />
                  <p>{d.title}</p>
                  <p style={{ fontWeight: "bold" }}>
                    Rp.{d.price.toLocaleString()}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* End Content */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
}
