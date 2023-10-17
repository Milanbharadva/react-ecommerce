import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import SingleProductView from "./SingleProductView";
const SingleProduct = () => {
  const dataurl = useParams();
  const { productid } = dataurl;
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
      {product
        .filter((items) => items.ID === productid)
        .map((item) => (
          <SingleProductView data={item} key={item.ID} />
        ))}
    </>
  );
};

export default SingleProduct;
