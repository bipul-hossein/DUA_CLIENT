import React, { createContext, useState } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [formDataContext, setFormDataContext] = useState({
    personalInfo: {
      teamName: "",
      division: "",
      player1FullName: "",
      player1Email: "",
      player1PhoneNumber: "",
      player1Image: "",
      player2FullName: "",
      player2Email: "",
      player2PhoneNumber: "",
      player2Image: "",
    },
    paymentMethod: "",
  });

  return (
    <RegistrationContext.Provider value={[formDataContext, setFormDataContext]}>
      {children}
    </RegistrationContext.Provider>
  );
};
