import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Context
const FormDataContext = createContext();

// Create a Provider component
export const FormDataProvider = ({ children }) => {
  const [formData1, setFormData1] = useState(() => {
    // Retrieve data from localStorage when the app initializes
    const savedFormData = localStorage.getItem('formData1');
    return savedFormData ? JSON.parse(savedFormData) : null; // Return saved data or null
  });

  // Log whenever formData1 changes and save to localStorage
  useEffect(() => {
    if (formData1) {
      console.log("FormData updated:", formData1);
      // Save formData1 to localStorage when it changes
      localStorage.setItem('formData1', JSON.stringify(formData1));
    }
  }, [formData1]);

  return (
    <FormDataContext.Provider value={{ formData1, setFormData1 }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook to use context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  
  // Log the value of the context when it's accessed
  console.log("Accessing formData context:", context);
  
  return context;
};
