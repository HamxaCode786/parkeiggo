import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Modal, Button } from 'react-bootstrap';
import Car from "../../assets/logo/Parking-Logo.png";
import Luggage from "../../assets/logo/Luggage-Round.png";
import Shuttle from "../../assets/logo/Shuttle-logo.png";

const Cards = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleShowModal = (card) => {
    setModalContent(card);
    setShowModal(true);  // Open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);  // Close the modal
  };

  return (
    <div className="cards_main_div">
      <h3>Services</h3>
      <p>You’ll get these services complimentary with a parking spot</p>
      <div className="cards_partition_div">
        {[ 
          { img: Luggage, title: "Luggage Assistance", desc: "Travel light! Our team will assist you with loading and unloading your luggage at no extra cost." },
          { img: Shuttle, title: "Car Wash", desc: "Return to a spotless vehicle! Take advantage of our free car wash and detailing service while you're away." },
          { img: Car, title: "Valet Parking", desc: "Skip the hassle of finding a parking spot. Let our professional valet team handle your vehicle with care." }
        ].map((card, idx) => (
          <div 
            key={idx}
            ref={ref}
            className={`cards_1 ${inView ? "show-card" : "hide-card"}`}
            onClick={() => handleShowModal(card)}  // Trigger modal on card click
          >
            <img className="log_icon" src={card.img} alt={card.title} />
            <h4 className="cards_heading">{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal for displaying service details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="log_icon" src={modalContent.img} alt={modalContent.title} style={{ width: "100px", marginBottom: "20px" }} />
          <p>{modalContent.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cards;
