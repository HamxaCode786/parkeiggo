import React, { createContext, useState } from 'react';

// Initialize the context
export const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    location: '',
    checkInDate: '',
    checkInTime: '',
    checkOutDate: '',
    checkOutTime: ''
  });

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  return (
    <FormContext.Provider value={{ formData, handleInputChange, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
