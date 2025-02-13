import React, { useContext } from 'react';
import Form from "react-bootstrap/Form";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useFormData  } from '../../context/formcontext';  // Import the context
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Banner = () => {
  
  const navigate = useNavigate();
  const { setFormData1 } = useFormData();

  const [formData, setFormData] = useState({
    location: '',
    checkInDate: '',
    checkInTime: '',
    checkOutDate: '',
    checkOutTime: '',
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Format the dates and times in the required format
    const formatDate = (date) => {
      // Check if the date is valid
      const d = new Date(date);
      if (isNaN(d.getTime())) {
        console.error("Invalid date:", date); // Log invalid date for debugging
        return ''; // Return empty string or handle the error as needed
      }
      return d.toISOString().split('T')[0]; // Extract the date part (YYYY-MM-DD)
    };
  
    const formatTime = (time) => {
      // Ensure that time exists and is valid before formatting
      if (!time) return ''; // Handle empty or invalid time
    
      const timeParts = time.split(' '); // Split into time and period (AM/PM) if available
      let formattedTime = timeParts[0]; // Use the time part
    
      if (timeParts[1] && (timeParts[1] === 'AM' || timeParts[1] === 'PM')) {
        const [hours, minutes] = formattedTime.split(':');
        let hoursIn24 = parseInt(hours, 10);
        if (timeParts[1] === 'PM' && hoursIn24 < 12) {
          hoursIn24 += 12;
        } else if (timeParts[1] === 'AM' && hoursIn24 === 12) {
          hoursIn24 = 0; // Convert 12 AM to 00
        }
        formattedTime = `${hoursIn24.toString().padStart(2, '0')}:${minutes}`;
      }
    
      // Ensure the time has the "hh:mm" format (add ':00' if seconds are missing)
      const [hour, minute] = formattedTime.split(':');
      return `${hour}:${minute || '00'}`; // If no minute, default to "00"
    };
    
    const payload = {
      location: formData.location,
      checkInDate: formatDate(formData.checkInDate), // Ensure the date is in YYYY-MM-DD format
      checkInTime: formatTime(formData.checkInTime), // Ensure the time is in hh:mm format
      checkOutDate: formatDate(formData.checkOutDate), // Ensure the date is in YYYY-MM-DD format
      checkOutTime: formatTime(formData.checkOutTime), // Ensure the time is in hh:mm format
    };
  
    // Send the payload to the API endpoint using axios
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/reservations/', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Handle the success response
      console.log('Form data successfully submitted:', response.data);
      setFormData1(response.data);
      navigate('/form', { state: { formData } });
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
};

  
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
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
