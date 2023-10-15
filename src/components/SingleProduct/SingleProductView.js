const SingleProductView = ({ data }) => {
  return (
    <div className="flex mt-5 lg:flex-row flex-col mx-5 items-center justify-center  lg:justify-around lg:mx-28">
      <div>
        <img src={data.productimage} height="315px" width="415px" alt="" />
      </div>
      <div className=" text-xl font-bold flex flex-col space-y-5">
        <h2 className="text-4xl font-bold">{data.productname.toUpperCase()}</h2>
        <p>Price : {data.productprice}₹</p>
        <p>RAM : {data.productram}GB</p>
        <p>ROM : {data.productrom}GB</p>
        <p>Color : {data.productcolor}</p>
        <p>Camera : {data.productcamera}</p>
        <p>Battery Capacity : {data.productbattery}</p>
        <p>Display : {data.productdisplay}</p>
        <p>Processor : {data.productprocessor}</p>
        <p>Category : {data.categoryname}</p>
      </div>
    </div>
  );
};

export default SingleProductView;
