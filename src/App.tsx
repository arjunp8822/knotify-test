import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Vendors from "./pages/Vendors";
import Blog from "./pages/Blog";
import VendorPage from "./pages/VenuePage";
import Footer from "./components/Footer";
import { useState } from "react";
import FilterContainer from "./components/FilterContainer";

function App() {
  const [openNav, setOpenNav] = useState(false);
  const [showFilterContainer, setShowFilterContainer] = useState(false);

  return (
    <div>
      {/* overlays */}

      {showFilterContainer && (
        <FilterContainer setShowFilterContainer={setShowFilterContainer} />
      )}

      <Navbar
        openNav={openNav}
        setOpenNav={setOpenNav}
        showFilterContainer={showFilterContainer}
      />

      <div
        className={`container bg-white transition-all ${
          openNav ? "blur-[2px]" : ""
        } ${showFilterContainer ? "brightness-50" : ""}`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                showFilterContainer={showFilterContainer}
                setShowFilterContainer={setShowFilterContainer}
              />
            }
          />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/venues/:id" element={<VendorPage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <div
        className={`bg-gray-100 h-[300px] flex justify-center items-center ${
          showFilterContainer ? "brightness-50" : ""
        }`}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
