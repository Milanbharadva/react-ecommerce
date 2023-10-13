import { useParams } from "react-router-dom";
import MobileData from "../../data/MobileData";
import SingleProductView from "./SingleProductView";
const SingleProduct = () => {
  const dataurl = useParams();
  const { productid } = dataurl;
  return (
    <>
      {MobileData.filter(items =>items.ID===productid)
      .map(item=><SingleProductView data={item} key={item.ID}/>)}
    </>
  );
};

export default SingleProduct;
