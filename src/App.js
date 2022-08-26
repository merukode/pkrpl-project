import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Store } from "./screens";

function App() {
  return (
    <Routes>
      <Route path="/store" element={<Store/>} />
    </Routes>
  );
}

export default App;
