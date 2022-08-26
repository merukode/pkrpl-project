import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Login,Register,Store } from "./screens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register/>} />
      <Route path="/store" element={<Store/>} />
    </Routes>
  );
}

export default App;
