import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar, ProductCard } from "./components";
import { HomePage, DetailsPage, ShopPage } from "./pages";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
