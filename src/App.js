import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Routes, Route } from 'react-router-dom';

import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Products from './pages/products/Products';
import Hero from './pages/home/Hero'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductsSection from './components/ProductsOverview';
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import AboutDetails from './components/AboutDetails';
import NaturalProcess from './components/NaturalProcess';
import OrganicProducts from './components/OrganicProducts';
import BiologicallySafe from './components/BiologicallySafe';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products-overview" element={<ProductsSection />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-details" element={<AboutDetails />} />
        <Route path="/natural-process" element={<NaturalProcess />} />
        <Route path="/organic-products" element={<OrganicProducts />} />
        <Route path="/biologically-safe" element={<BiologicallySafe />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
