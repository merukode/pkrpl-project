import { useContext, createContext } from "react";
import axios from "axios";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const URL = process.env.REACT_APP_API_URL;

  function getAllProducts() {
    return axios.get(`https://rich-puce-panda-garb.cyclic.app/products`);
  }

  return (
    <ProductContext.Provider value={{ getAllProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

function useProvider() {
  const auth = useContext(ProductContext);
  return { ...auth };
}

export { ProductProvider, useProvider };
