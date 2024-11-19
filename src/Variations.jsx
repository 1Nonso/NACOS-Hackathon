import WhiteAirpod from "./assets/White.jpg";
import GreenAirpod from "./assets/Green.jpg";
import RedAirpod from "./assets/Pink.jpg";

const Variations = () => {
  return (
    <>
      <section className="variations">
        <div className="variationText">
          <h1>Get your airpods now.</h1>
          <p>
            We share common trends and strategies for improving your rental
            income
          </p>
        </div>
        <div className="airpodFlexContainer">
          <div className="airpodSection">
            <img src={GreenAirpod} alt="Picture of an airpod" />
            <div className="airpodText">
              <h1>Midnight Green</h1>
              <p>Airpods (2nd gen) iphone Colors with Wireless Charging Case</p>
              <button>Buy now - $99</button>
            </div>
          </div>
          <div className="airpodSection">
            <img src={WhiteAirpod} alt="Picture of an airpod" />
            <div className="airpodText">
              <h1>Silver</h1>
              <p>Airpods (2nd gen) iphone Colors with Wireless Charging Case</p>
              <button>Buy now - $99</button>
            </div>
          </div>
          <div className="airpodSection">
            <img src={RedAirpod} alt="Picture of an airpod" />
            <div className="airpodText">
              <h1>Gold</h1>
              <p>Airpods (2nd gen) iphone Colors with Wireless Charging Case</p>
              <button>Buy now - $99</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Variations;
