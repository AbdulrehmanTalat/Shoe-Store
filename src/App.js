import React from "react";
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import ProductIndex from './components/Product/ProductIndex/ProductIndex';
import Products from './components/Product/Products/Products';
import NotFound from './components/NotFound/NotFound';
import { GlobalDataProvider } from "./state/GlobalDataProvider";


function App() {
  return (

    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="product">Product</Link>
      </nav>
     <GlobalDataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} >
            <Route path="/" element={<ProductIndex />} />
            <Route path=":slug" element={<Products />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </GlobalDataProvider>
    </Router>

  );
}

export default App;
