import { Routes, Route } from "react-router-dom";
import { Store, Home, Detail } from "./screens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/store" element={<Store />} />
      <Route path="/store/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
