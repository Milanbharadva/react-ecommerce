import MobileData from "../../data/MobileData";
import ProductView from "../ProductView/ProductView";

const ProductList = () => {
    return ( <>
        {
            MobileData.map((item)=>(
               <ProductView key={item.ID} data={item}/>
            ))
        }
    </> );
}
 
export default ProductList;