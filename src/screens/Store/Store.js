import { useEffect, useState } from "react";
import { useProvider } from "../../provider/Provider";
import { createFilterOptions, CircularProgress, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Store.css";

export default function Store() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [filterPost, setFilterPost] = useState("");
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

  return (
    <>
      <Navbar />
      <div className="all-products">
        <h2>All Products</h2>
        <p>Semua produk disini sudah terverifikasi oleh ahlinya</p>
      </div>

      <div className="main-products">
        {loading ? (
          <Stack alignItems="center">
            <CircularProgress />
          </Stack>
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
      <Footer />
    </>
  );
}
