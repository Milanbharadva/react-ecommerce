import "./ProductData.css";

const ProductData = (props) => {
  console.log(props.data);
  return (
    <>
      <div className="product-container-main">
        <div className="img-container-product">
          <img src={props.data.image} alt="" />
        </div>
        <div className="data-container-product">
          <span>{props.data.title}</span>
          <span>{props.data.price}₹</span>
          <span>{props.data.category}</span>
          <span>
            {props.data.rating.rate}&#9734;({props.data.rating.count})
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductData;
