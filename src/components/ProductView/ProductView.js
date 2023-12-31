import { useNavigate } from "react-router-dom";

const SingleProduct = ({ data }) => {
  const navigate = useNavigate();
  const { ID } = data;
  return (
    <div className="md:mx-28 border-[#dee2e6] border p-5 border-solid">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <img src={`product/${data.productimage}`} height="200px" width="200px" alt="" />
        </div>
        <div className="flex lg:items-start items-center justify-center space-y-5 flex-col lg:w-[50%]">
          <div>
            <h5 className="text-[20px] font-bold ">
              {`${data.productname.toUpperCase()} (${data.productcolor} , ${
                data.productrom
              } GB)`}
            </h5>
          </div>
          <div className="flex flex-col space-y-1">
            <span>{` ${data.productram}GB RAM | ${data.productrom}GB ROM`}</span>
            <span>{data.productdisplay}</span>
            <span>{data.productcamera}</span>
            <span>{data.productbattery}</span>
            <span>{data.productpprocessor}</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{data.productprice}₹</span>
          <button
            className="buttons"
            onClick={() => {
              navigate(`/products/single-product/${ID}`);
            }}
          >
            Details
          </button>
          <button className="buttons">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
