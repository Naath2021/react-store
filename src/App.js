import React from 'react'
import './scss/app.scss';
import Navbar from './components/navbar/Navbar';
import ProductContainer from './components/products/productContainer/ProductContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductContainer />} />
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <div id='home'>
    //     <ProductContainer />
    //   </div>
    // </div>
  );
}

export default App;
