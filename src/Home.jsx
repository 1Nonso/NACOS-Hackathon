import AirpodImage from "./assets/airpodImage.jpg";

const Home = () => {
  return (
    <>
      <section className="Home">
        <img className="homeImg" src={AirpodImage} alt="" />
        <div className="multipleText">
          <p className="firstText">NON-STOP MUSIC FOR LONG TIME</p>
          <h1>Sound, that sounds better!</h1>
          <p className="secondText">
            With lots of unique blocks, you can easily build a page without
            coding <br /> Build your next consultancy website within few minutes
          </p>
          <button className="homeButton">Buy now - Starting at $99</button>
          <p className="thirdText">WATCH IN ACTION</p>
        </div>
      </section>
    </>
  );
};

export default Home;
