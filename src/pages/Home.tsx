import Banner from "../components/home/Banner";
import Blog from "../components/home/Blog";
import VendorTypes from "../components/home/VendorTypes";
import Featured from "../components/home/Featured";
import Reviews from "../components/home/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <VendorTypes />
      <Blog />
      <Reviews />
    </div>
  );
};

export default Home;
