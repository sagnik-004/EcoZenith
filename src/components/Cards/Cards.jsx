import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Vehicles</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c1-content">
        <div className="lg-value">No. of Vehicles</div>
        <div>
          <p>Value</p>
        </div>
        <div className="card-wrapper">
          <span className="lg-value">Total CO₂ Emitted </span>
        </div>
        <div className="card-logo-wrapper">
          <div>
            <p>Expires</p>
          </div>
          <div className="card-logo">
            <img
              className="truck"
              src={iconsImgs.vehicles}
              alt="profile image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
