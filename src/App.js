import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:slug" element={<ProductDetails/>}/>
        <Route path="/product/cart" element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
