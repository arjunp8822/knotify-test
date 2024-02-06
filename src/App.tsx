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
import ScrollToTop from "./components/ScrollToTop";
// import NotFound from "./pages/NotFound";
// import Home from "./pages/Home";

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <div
        className={`container bg-white transition-all ${
          openNav ? "blur-[2px]" : ""
        }`}
        onClick={() => setOpenNav(false)}
      >
        <Routes>
          {/* <Route path="/test" element={<Home />} /> */}
          <Route path="/" element={<Vendors />} />
          <Route path="/list" element={<List />} />
          <Route path="/vendors/:id" element={<VendorPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* Fallback route if not found */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
      {/* footer */}
      <div className="bg-gray-100">
        <Footer />
      </div>

      {/* scroll to top */}
      <ScrollToTop />
    </div>
  );
}

export default App;
