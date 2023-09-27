import "./Slider.css";
import slider1 from "../../images/slider-1.jpg";
const Slider = () => {
  return (
    <>
      <section>
        <div className="slider-image">
          <img src={slider1} alt="" />
        </div>
        <div className="text-div">
        <div className="text-contsiner-slider">
          <h5>SUMMER COLLECTION</h5>
          <h2>fall - winter collection 2040</h2>
          <p>
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
        </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
