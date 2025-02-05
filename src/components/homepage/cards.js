import React from "react";
import { useInView } from "react-intersection-observer";
import Car from "../../assets/logo/Parking-Logo.png";
import Luggage from "../../assets/logo/Luggage-Round.png";
import Shuttle from "../../assets/logo/Shuttle-logo.png";

const Cards = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="cards_main_div">
      <h3>Services</h3>
      <p>You’ll get these services complimentary with a parking spot</p>
      <div className="cards_partition_div">
        {[ 
          { img: Luggage, title: "Luggage Assistance", desc: "Travel light! Our team will assist you with loading and unloading your luggage at no extra cost." },
          { img: Shuttle, title: "Shuttle Wash", desc: "Return to a spotless vehicle! Take advantage of our free car wash and detailing service while you're away." },
          { img: Car, title: "Valet Parking", desc: "Skip the hassle of finding a parking spot. Let our professional valet team handle your vehicle with care." }
        ].map((card, idx) => (
          <div 
            key={idx}
            ref={ref}
            className={`cards_1 ${inView ? "show-card" : "hide-card"}`}
          >
            <img className="log_icon" src={card.img} alt={card.title} />
            <h4 className="cards_heading">{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
