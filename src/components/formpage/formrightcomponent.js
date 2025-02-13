import React from "react";
import { useFormData  } from "../../context/formcontext";

const Formrightcomponent = () => {
  const { formData1 } = useFormData();

  
  const totalTime = formData1.totalTime;  // Example: "1 00:00:00"
  const durationParts = totalTime.split(" ");  // Split by space
  
  // Parse days, hours, minutes, and seconds
  const days = parseInt(durationParts[0]);
  const timeParts = durationParts[1].split(":");  // Split hours, minutes, seconds
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  
  // Format output as 'x days y hours'
  const formattedTime = `${days} days ${hours} hours`;
  

  return (
    <div className="second_component_form">
      <h3 className="main_heading_right_side">Booking Summary</h3>
      <div className="second_div_under">
        <div className="sub_divs_form_right">
          <h4 className="form_right_left1">{formData1.location}</h4>
        </div>
        <div className="sub_divs_form_right">
          <h4 className="form_right_left">Check In</h4>{" "}
          <h4 className="form_right_right">
            {formData1.checkInDate && formData1.checkInTime
              ? `${new Date(formData1.checkInDate)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}` // Format the date
              : "Select Check-In Date & Time"}
            {formData1.checkInTime
              }
          </h4>
        </div>
        <div className="sub_divs_form_right">
          <h4 className="form_right_left">Check Out</h4>{" "}
          <h4 className="form_right_right">
  {formData1.checkOutDate && formData1.checkOutTime
    ? `${new Date(formData1.checkOutDate)
        .toLocaleDateString("en-GB")
        .replace(/\//g, "-")} ${formData1.checkOutTime}` // Adding a space between date and time
    : "Select Check-Out Date & Time"}
</h4>

        </div>
        <div className="sub_divs_form_right">
          <h4 className="form_right_left">Parking Time</h4>{" "}
          <h4 className="form_right_right">{formattedTime}</h4>
        </div>
        <div className="sub_divs_form_right2">
          <h4 className="form_right_left">Total Price To Pay</h4>{" "}
          <h4 className="form_right_right">{formData1.calculatedPrice} EUR</h4>
        </div>
      </div>
    </div>
  );
};

export default Formrightcomponent;
