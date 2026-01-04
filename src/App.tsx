import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BoundarEase from "./pages/BoundarEase";
import HiNeighbor from "./pages/HiNeighbor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boundarease" element={<BoundarEase />} />
      <Route path="/hi-neighbor" element={<HiNeighbor />} />
    </Routes>
  );
}

export default App;
