import React from "react";
import { FormContext } from "../../context/formcontext";
import { useContext } from "react";

const Formrightcomponent = () => {
  const { formData } = useContext(FormContext);

  const calculateParkingTime = (checkInDate, checkOutDate) => {
    if (!checkInDate || !checkOutDate) return 0;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    // Calculate the difference in milliseconds
    const differenceInTime = checkOut - checkIn;

    // Convert milliseconds to days
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays > 0 ? differenceInDays : 0;
  };

  const parkingTime = calculateParkingTime(
    formData.checkInDate,
    formData.checkOutDate
  );

  return (
    <div className="second_component_form">
      <h3 className="main_heading_right_side">Booking Summary</h3>
      <div className="second_div_under">
        <div className="sub_divs_form_right">
          <h4 className="form_right_left1">{formData.location}</h4>
        </div>
        <div className="sub_divs_form_right">
          <h4 className="form_right_left">Check In</h4>{" "}
          <h4 className="form_right_right">
            {formData.checkInDate && formData.checkInTime
              ? `${new Date(formData.checkInDate)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}` // Format the date
              : "Select Check-In Date & Time"}
            {formData.checkInTime
              }
          </h4>
        </div>
        <div className="sub_divs_form_right">
          <h4 className="form_right_left">Check Out</h4>{" "}
          <h4 className="form_right_right">
            {formData.checkOutDate && formData.checkOutTime
              ? `${new Date(formData.checkOutDate)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}` // Format the date
              : "Select Check-Out Date & Time"}
            {formData.checkOutTime
              }
          </h4>
        </div>
        <div className="sub_divs_form_right">
          <h4 className="form_right_left">Parking Time</h4>{" "}
          <h4 className="form_right_right">{parkingTime} Days</h4>
        </div>
        <div className="sub_divs_form_right2">
          <h4 className="form_right_left">Total Price To Pay</h4>{" "}
          <h4 className="form_right_right">38 Euro</h4>
        </div>
      </div>
    </div>
  );
};

export default Formrightcomponent;
