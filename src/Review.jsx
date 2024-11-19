import happyMan from "./assets/Group.jpg";
import profilePIc from "./assets/oval.jpg";

const Review = () => {
  return (
    <>
      <section className="Review">
        <img className="happyMan" src={happyMan} alt="" />
        <div className="reviewText">
          <div className="r_heading">
            <h1>Comfortable Buds with better Sound</h1>
            <p className="r_text">
              We share common trends and strategies for improving your rental
              income
            </p>
          </div>
          <div className="comment">
            <img src={profilePIc} alt="" />
            <div>
              <p>
                "You made it so simple. My mew site is faster and easier to work
                with than my old site."
              </p>
              <p className="name">Rhoda Brady</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
