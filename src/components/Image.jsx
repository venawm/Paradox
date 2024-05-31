import futureImage from "/assets/original.jpg";
import featureImage from "/assets/work culture.png";
import stairsImage from "/assets/1542298796.jpg";
import earthImage from "/assets/earth.png";
import natureImage from "/assets/nature.jpg";
import "./Image.css";

const Image = () => {
  return (
    <div className="main">
      <div className="image-container">
        <img
          src={futureImage}
          alt="Building the future"
          className="work"
          style={{ width: "100%", height: "400px" }}
        />
        <div className="text-overlay">
          <p>Building the future</p>
        </div>
      </div>
      <div className="feature">
        <img className="feature-img" src={featureImage} alt="Features" />
        <div style={{ width: "40rem" }}>
          <p className="feature-p">
            Features <span className="orange">Ought</span> to partake
          </p>
        </div>
      </div>
      <div className="feature-2">
        <img className="feature-img" src={stairsImage} alt="Features" />
        <img className="feature-img" src={earthImage} alt="Features" />
      </div>
      <div className="nature">
        <img className="nature-img" src={natureImage} alt="Features" />
        <div className="blurred-card">
          <p className="card-heading">Every Inspiration From Nature</p>
          <p className="card-subtitle">
            Get started using out services with 30 days free trial
          </p>
          <button className="card-button">Try it now</button>
        </div>
      </div>
    </div>
  );
};

export default Image;
