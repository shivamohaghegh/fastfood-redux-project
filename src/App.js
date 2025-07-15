import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProductsPage from "./Pages/ProductsPage";
import MainLayout from "./Components/MainLayout/MainLayout";
import UserPage from "./Pages/UserPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<MainLayout />}>
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
