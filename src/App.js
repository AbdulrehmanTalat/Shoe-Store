import React, { useEffect, useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import GlobalContext from "./state/GlobalContext";
import { products as mockProducts } from "./Data";
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import ProductIndex from './components/Product/ProductIndex/ProductIndex';
import Products from './components/Product/Products/Products';
import NotFound from './components/NotFound/NotFound';


function App() {
  const { recieveProducts, products } = useContext(GlobalContext);
  useEffect(() => {
    console.log();
    recieveProducts(mockProducts);
    //   fetch(dataURL)
    //     .then((res) => res.json())
    //     .then((products) => recieveProducts(products))
    //     .catch((err) => {
    //       console.error("Error: ", err);
    //       setError(true);
    //     });
    //eslint-disable-next-line
  }, []);

  return (

    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="product">Product</Link>
      </nav>
      {products.length > 0 ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} >
            <Route path="/" element={<ProductIndex />} />
            <Route path=":slug" element={<Products />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
          <p>Fetching data...</p>
        )}
    </Router>

  );
}

export default App;
