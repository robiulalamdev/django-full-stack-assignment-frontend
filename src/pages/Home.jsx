import HeroCarousel from "../components/Home/Carousel/HeroCarousel";
import Category from "../components/Home/Categories/Category";
import Features from "../components/Home/Features";
import Product from "../components/Products/Product";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Category />
      <Product />
      <Features />
    </div>
  );
};

export default Home;
