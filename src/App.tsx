import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BoundarEase from "./pages/BoundarEase";
import HiNeighbor from "./pages/HiNeighbor";
import ShopGreen from "./pages/ShopGreen";
import CountryAtAGlance from "./pages/CountryAtAGlance";
import BackToTop from "./components/BackToTop";
import TypeAtSea from "./pages/TypeAtSea";
import Typesetting from "./pages/Typesetting";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boundarease" element={<BoundarEase />} />
        <Route path="/hi-neighbor" element={<HiNeighbor />} />
        <Route path="/shopgreen" element={<ShopGreen />} />
        <Route path="/country-at-a-glance" element={<CountryAtAGlance />} />
        <Route path="/typesetting" element={<Typesetting />} />
        <Route path="/type-at-sea" element={<TypeAtSea />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;
