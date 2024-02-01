import { Route, Routes } from "react-router-dom";
import "./App.css";
import Vendors from "./pages/Vendors";
import Navbar from "./components/Navbar";
import List from "./pages/List";
import Blog from "./pages/Blog";
import VendorPage from "./pages/VendorPage";
import Footer from "./components/Footer";
import { useState } from "react";
import Privacy from "./pages/Privacy";
// import Home from "./pages/Home";

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <div
        className={`container bg-white transition-all ${
          openNav ? "blur-[2px]" : ""
        } `}
      >
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Vendors />} />
          <Route path="/list" element={<List />} />
          <Route path="/vendors/:id" element={<VendorPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
