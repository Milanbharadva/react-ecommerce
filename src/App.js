import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Signin from "./components/Signin/Signin";
import NoteState from "./Context/noteState";
import Signout from "./components/Signout/Signout";
import Register from "./components/Register/Register";
import Slider from "./components/Home/Slider/Slider";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Navbar />
        <Routes>
          <Route path="/" Component={Slider} />
          <Route path="/signin" Component={Signin} />
          <Route path="/register" Component={Register} />
          <Route path="/products" Component={ProductList} />
          <Route path="/signout" Component={Signout} />
          <Route
            path="/products/single-product/:productid"
            Component={SingleProduct}
          />
        </Routes>
      </NoteState>
    </div>
  );
}

export default App;
