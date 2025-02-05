import React, { useContext } from 'react';
import Form from "react-bootstrap/Form";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { FormContext } from '../../context/formcontext';  // Import the context
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const { formData, setFormData, handleInputChange } = useContext(FormContext);  // Access form data and handler
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the data in the context on submit (if needed)
    setFormData(formData);  // This is where we pass the form data to context

    // Redirect to /form and pass form data as state
    navigate('/form', { state: { formData } });
  };

  return (
    <div className="main_section">
      <div className='banner_main_div'>
        <h3>Airport Parking in Italy</h3>
        <p>premium parking at  airport starting from €14 per day</p>
      </div>

      <div className="form_black">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form_label_banner">Select Location</Form.Label>
          <Form.Control
            className="inputs_forms"
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}  // Update the context
            placeholder="Location"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form_label_banner">CheckIn Date</Form.Label>
          <Flatpickr
            className="form-control"
            value={formData.checkInDate}
            options={{
              dateFormat: "m/d/Y",
              disableMobile: true,
            }}
            onChange={(date) => handleInputChange('checkInDate', date[0])}  // Update the context
            placeholder="Select Date"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form_label_banner">CheckIn Time</Form.Label>
          <Flatpickr
            className="form-control"
            value={formData.checkInTime}
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: "H:i",
              disableMobile: true,
            }}
            onChange={(time) => handleInputChange('checkInTime', time[0].toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }))}  // Update the context
            placeholder="Select Time"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form_label_banner">Check-Out Date</Form.Label>
          <Flatpickr
            className="form-control"
            value={formData.checkOutDate}
            options={{
              dateFormat: "m/d/Y",
              disableMobile: true,
            }}
            onChange={(date) => handleInputChange('checkOutDate', date[0])}  // Update the context
            placeholder="Select Date"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form_label_banner">Check-Out Time</Form.Label>
          <Flatpickr
            className="form-control"
            value={formData.checkOutTime}
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: "H:i",
              disableMobile: true,
            }}
            onChange={(time) => handleInputChange('checkOutTime', time[0].toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }))}    // Update the context
            placeholder="Select Time"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <button onClick={handleSubmit} className="button_form_black">Submit</button> {/* Submit button triggers the form submission */}
          </Form.Group>
      </div>
    </div>
  );
}

export default Banner;
