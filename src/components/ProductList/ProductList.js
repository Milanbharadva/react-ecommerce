import { useEffect, useState, useCallback } from "react";
import ProductView from "../ProductView/ProductView";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://ecommerce-project-d04f8-default-rtdb.firebaseio.com/product.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setProduct(data);
      fetchMoviesHandler();
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  return (
    <>
      {product.map((item) => (
        <ProductView key={item.ID} data={item} />
      ))}
    </>
  );
};

export default ProductList;
