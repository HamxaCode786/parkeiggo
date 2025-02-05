import React from 'react'
import Form from "react-bootstrap/Form";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const Banner = () => {
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
    type="email"
    placeholder="Location"
  />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label className="form_label_banner">Check In</Form.Label>
  <Flatpickr
  className="form-control"
  options={{
    enableTime: true,
    dateFormat: "m/d/Y H:i",
    disableMobile: true // Ensures the picker works on mobile devices
  }}
  placeholder="Select Date & Time"
/>

</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label className="form_label_banner">Check In</Form.Label>
  <Flatpickr
  className="form-control"
  options={{
    enableTime: true,
    dateFormat: "m/d/Y H:i",
    disableMobile: true
  }}
  placeholder="Select Date & Time"
/>
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <button className="button_form_black">Submit</button>
</Form.Group>
</div>
</div>
  )
}

export default Banner