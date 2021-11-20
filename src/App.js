import React from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import Cart from './pages/CartPage.jsx'
import Home from './pages/HomePage.jsx'


function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </HashRouter >
    </div>
  );
}

export default App;
