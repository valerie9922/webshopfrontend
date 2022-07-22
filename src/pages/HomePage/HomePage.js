import { HeroBanner } from "../../components";
import { ProductCard } from "../../components/OtherComponent/ProductCard";
import Footer from "../../components/OtherComponent/Footer";
const HomePage = () => {
  return (
    <div>
      <div>
        {" "}
        <HeroBanner />
      </div>
      <div>
        {" "}
        <ProductCard />
      </div>
    </div>
  );
};

export { HomePage };
