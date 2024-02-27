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
import Terms from "./pages/Terms";
// import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Blog1 from "./components/blog/Blog1";
import Blog2 from "./components/blog/Blog2";
import Blog3 from "./components/blog/Blog3";

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <div
        className={` bg-white container transition-all ${
          openNav ? "blur-[2px] " : ""
        }`}
        onClick={() => setOpenNav(false)}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/list" element={<List />} />
          <Route path="/vendors/:id" element={<VendorPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Fallback route if not found */}
          {/* <Route path="*" element={<NotFound />} /> */}

          {/* Blogs */}
          <Route
            path="/navigating-the-wedding-planning-maze"
            element={<Blog1 />}
          />
          <Route path="/ten-on-the-day-wedding-tips" element={<Blog2 />} />
          <Route
            path="/tips-for-a-stress-free-celebration"
            element={<Blog3 />}
          />
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
