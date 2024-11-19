import bitmap from "./assets/Bitmap.jpg";
import Earbuds from "./assets/earbuds.jpg";
import Soundwave from "./assets/soundwave.jpg";
import ovalOne from "./assets/oval.png";
import ovalTwo from './assets/OvalRed.png'


const Properites = () => {
  return (
    <>
      <section className="properties">
        <img
          className="propImage"
          src={bitmap}
          alt="Man running with earbuds"
        />
        <div className="div">
          <h1>Listen to music anytime, anywhere</h1>
          <p className="pFirstPara">
            We share common trends and strategies for improving your rental
            incomes
          </p>
          <div className="propDivs">
            <div className="PropDiv">
              <div className="ovalDiv">
                <img src={Earbuds} alt="Earbuds" />
                <img className="oval" src={ovalOne} alt="" />
              </div>
              <div>
                <h3>Comfortable Buds</h3>
                <p>
                  With lots of unique blocks, you can easily build a page
                  without coding
                </p>
              </div>
            </div>
            <div className="PropDiv">
              <div className="ovalDiv">
                <img src={Soundwave} alt="Soundwave" />
                <img className="oval" src={ovalTwo} alt="" />
              </div>
              <div>
                <h3>Powerful Bass</h3>
                <p>
                  With lots of unique blocks, you can easily build a page
                  without coding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Properites;
