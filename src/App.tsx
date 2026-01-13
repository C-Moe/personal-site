import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BoundarEase from "./pages/BoundarEase";
import HiNeighbor from "./pages/HiNeighbor";
import ShopGreen from "./pages/ShopGreen";
import CountryAtAGlance from "./pages/CountryAtAGlance";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boundarease" element={<BoundarEase />} />
        <Route path="/hi-neighbor" element={<HiNeighbor />} />
        <Route path="/shopgreen" element={<ShopGreen />} />
        <Route path="/country-at-a-glance" element={<CountryAtAGlance />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;
