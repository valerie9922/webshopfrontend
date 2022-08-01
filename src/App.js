import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar, ProductCard } from "./components";
import { HomePage, DetailsPage, ShopPage } from "./pages";
import ShoppingCard from "./pages/Shop/ShoppingCard";
import Footer from "./components/OtherComponent/Footer";
import Login from "./components/OtherComponent/Login";
import Signup from "./components/OtherComponent/Signup";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/myaccount/cart" element={<ShoppingCard />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
