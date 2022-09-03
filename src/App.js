import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Store, Home } from "./screens";

function App() {
  return (
    <Routes>
      <Route exact path="/store" element={<Store/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
  );
}

export default App;
