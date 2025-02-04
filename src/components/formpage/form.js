import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";
import Formright from "./formrightcomponent";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


const BookingForm = () => {
  const [phone, setPhone] = useState('');
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    location: "",
    carType: "",
    model: "",
    plate: "",
    brand: "",
    carDescription: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://your-api-endpoint.com/book", formData);

      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Your booking has been completed successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });

        setFormData({
          fullName: "",
          email: "",
          contact: "",
          location: "",
          carType: "",
          model: "",
          plate: "",
          brand: "",
          carDescription: "",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="form_main_div">
      <form onSubmit={handleSubmit}>
        <div className="input_feilds_div">
          <h2>Enter Your Data Here</h2>

          <div className="input_inner_div">
            <Form.Group className="mb-3">
              <Form.Label className="form_label_banner2">Full Name</Form.Label>
              <Form.Control
                className="inputs_forms"
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form_label_banner2">Email</Form.Label>
              <Form.Control
                className="inputs_forms"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>

          <div className="input_inner_div">
            <Form.Group className="mb-3">
              <Form.Label className="form_label_banner2">Contact Info</Form.Label>
              <PhoneInput
        defaultCountry="ua"
        value={formData.contact}
        onChange={(phone) => setPhone(phone)}
      />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form_label_banner2">Location</Form.Label>
              <Form.Control
                className="inputs_forms"
                type="text"
                placeholder="Select Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>

          <div className="input_inner_div">
          <Form.Group className="mb-3">
  <Form.Label className="form_label_banner2">Car Type</Form.Label>
  <Form.Select
    className="inputs_forms"
    name="carType"
    value={formData.carType}
    onChange={handleChange}
    required
  >
    <option value="">Select Car Type</option>
    <option value="SUV">SUV</option>
    <option value="Sedan">Sedan</option>
    <option value="Coupe">Coupe</option>
    <option value="Convertible">Convertible</option>
    <option value="Off-Roader">Off-Roader</option>
    <option value="Hatchback">Hatchback</option>
    <option value="Pickup Truck">Pickup Truck</option>
    <option value="Luxury">Luxury</option>
    <option value="Sports Car">Sports Car</option>
  </Form.Select>
</Form.Group>


            <Form.Group className="mb-3">
              <Form.Label className="form_label_banner2">Model</Form.Label>
              <Form.Control
                className="inputs_forms"
                type="text"
                placeholder="Model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>

          <div className="input_inner_div">
            <Form.Group className="mb-3">
              <Form.Label className="form_label_banner2">Plate</Form.Label>
              <Form.Control
                className="inputs_forms"
                type="text"
                placeholder="Plate Number"
                name="plate"
                value={formData.plate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
  <Form.Label className="form_label_banner2">Brand</Form.Label>
  <Form.Select
    className="inputs_forms"
    name="brand"
    value={formData.brand}
    onChange={handleChange}
    required
  >
    <option value="">Select a Brand</option>
    <option value="Audi">Audi</option>
    <option value="Bentley">Bentley</option>
    <option value="BMW">BMW</option>
    <option value="Cadillac">Cadillac</option>
    <option value="Ferrari">Ferrari</option>
    <option value="Jaguar">Jaguar</option>
    <option value="Lamborghini">Lamborghini</option>
    <option value="Land Rover">Land Rover</option>
    <option value="Mercedes-Benz">Mercedes-Benz</option>
    <option value="Porsche">Porsche</option>
    <option value="Rolls-Royce">Rolls-Royce</option>
  </Form.Select>
</Form.Group>

          </div>

          <div className="input_inner_div">
            <Form.Group className="mb-3">
              <Form.Label className="form_label_banner2">Car Description</Form.Label>
              <Form.Control
                className="inputs_forms"
                as="textarea"
                placeholder="Description of Car"
                name="carDescription"
                value={formData.carDescription}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>

          <div className="input_inner_div">
            <button type="submit" className="button_form_page">
              Complete Your Booking
            </button>
          </div>
        </div>
      </form>

      <div className="form_right_side_main_div">
        <Formright />
      </div>
    </div>
  );
};

export default BookingForm;
