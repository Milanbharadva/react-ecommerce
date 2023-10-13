import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/products" Component={ProductList} />
        <Route path="/products/single-product/:productid" Component={SingleProduct} />
      </Routes>
    </div>
  );
}

export default App;
