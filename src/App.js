import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Login,Register } from "./screens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register/>} />
    </Routes>
  );
}

export default App;
