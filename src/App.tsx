import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Vendors from "./pages/Vendors";
import Blog from "./pages/Blog";
import VendorPage from "./pages/VenuePage";
import Footer from "./components/Footer";
import { useState } from "react";
import FilterContainer, { FilterData } from "./components/FilterContainer";

function App() {
  const [openNav, setOpenNav] = useState(false);
  const [showFilterContainer, setShowFilterContainer] = useState(false);
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);
  const [filterData, setFilterData] = useState<FilterData>({
    categories: null,
    minimumRating: null,
    guests: null,
    budget: null,
    features: null,
  });

  return (
    <div>
      {/* overlays */}

      {showFilterContainer && (
        <FilterContainer
          setShowFilterContainer={setShowFilterContainer}
          setFilterData={setFilterData}
          setFilterButtonClicked={setFilterButtonClicked}
        />
      )}

      <div
        className={`bg-white transition-all ${
          showFilterContainer ? "sm:brightness-50" : ""
        }`}
      >
        <Navbar
          openNav={openNav}
          setOpenNav={setOpenNav}
          showFilterContainer={showFilterContainer}
        />

        <div
          className={`container bg-white transition-all ${
            openNav ? "blur-[2px]" : ""
          } ${showFilterContainer ? "brightness-50 sm:brightness-100" : ""}`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  showFilterContainer={showFilterContainer}
                  setShowFilterContainer={setShowFilterContainer}
                  filterData={filterData}
                  filterButtonClicked={filterButtonClicked}
                  setFilterButtonClicked={setFilterButtonClicked}
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
    </div>
  );
}

export default App;
