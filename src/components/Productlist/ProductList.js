import React, { useEffect, useState } from "react";
import ProductData from "./ProductData";
const ProductList = () => {
    const [data,setData]=useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json))
  },[]);
  return (
    <>
    <div className="outer-product-container">
    {  data.map(datas=><ProductData data={datas}/>)}
    </div>
    </>
  );
};

export default ProductList;
