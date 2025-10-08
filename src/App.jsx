import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("signup");

  return (
    <BrowserRouter>
      <Navbar
        showForm={showForm}
        setShowForm={setShowForm}
        formType={formType}
        setFormType={setFormType}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setShowForm={setShowForm}
              setFormType={setFormType}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
