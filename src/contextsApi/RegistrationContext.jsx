import React, { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [formDataContext, setFormDataContext] = useState({
    personalInfo: {
      fullName: '',
      address: '',
      phoneNumber: '',
      gender: '',
      email: ''
    },
    paymentMethod: '',
  });
  //   const [formData, setFormData] = useState({
  //     fullName: '',
  //     address: '',
  //     phoneNumber: '',
  //     gender: '',
  //     email: ''
  // });
  console.log(formDataContext, "lskajfldkajslkdfjaskl");


  return (
    <RegistrationContext.Provider value={[formDataContext, setFormDataContext]}>
      {children}
    </RegistrationContext.Provider>
  );
};
