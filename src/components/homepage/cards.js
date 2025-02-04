import React from "react";
import Car from "../../assets/logo/Parking-Logo.png";
import Luggage from "../../assets/logo/Luggage-Round.png";
import Shuttle from "../../assets/logo/Shuttle-logo.png";
const cards = () => {
  return (
    <div className="cards_main_div">
      <h3>Services</h3>
      <p>You’ll get these service complementry with Parking spot</p>
      <div className="cards_partition_div">
        <div className="cards_1">
          <img className="log_icon" src={Luggage} />
          <h4 className="cards_heading">Luggage Assistance</h4>
          <p>
            Travel light! Our team will assist you with loading and unloading
            your luggage at no extra cost.
          </p>
        </div>
        <div className="cards_1">
          <img className="log_icon" src={Shuttle} />
          <h4 className="cards_heading">Shuttle Wash</h4>
          <p>
            Return to a spotless vehicle! Take advantage of our free car wash
            and detailing service while you're away.
          </p>
        </div>
        <div className="cards_1">
          <img className="log_icon" src={Car} />
          <h4 className="cards_heading">Valet Parking</h4>
          <p>
            Skip the hassle of finding a parking spot. Let our professional
            valet team handle your vehicle with care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default cards;
