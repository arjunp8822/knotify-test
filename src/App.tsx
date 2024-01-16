import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Vendors from "./pages/Vendors";
import Blog from "./pages/Blog";
import VendorPage from "./pages/VenuePage";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <div
        className={`container transition-all ${openNav ? "blur-[2px]" : ""}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/venues/:id" element={<VendorPage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <div className="bg-gray-100 h-[300px] flex justify-center items-center">
        <Footer />
      </div>
    </div>
  );
}

export default App;
