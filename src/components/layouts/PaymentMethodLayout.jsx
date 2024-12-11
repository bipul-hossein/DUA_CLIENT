import React, { useContext, useEffect, useState } from "react";
import { RegistrationContext } from "../../contextsApi/RegistrationContext";
import Zelle from "../payment-method/ZellePayment";
import CardPaymentForm from "../payment-method/CardPaymentForm";
import { Link } from "react-router-dom";
import ButtonPayment from "../share/button/ButtonPayment";

const PaymentMethodLayout = () => {
  const [formDataContext, setFormDataContext] = useContext(RegistrationContext);
  const [selectedMethod, setSelectedMethod] = useState(
    formDataContext.paymentMethod || "card"
  );

  useEffect(() => {
    if (!formDataContext.paymentMethod) {
      setFormDataContext((prevData) => ({
        ...prevData,
        paymentMethod: "zelle",
      }));
    }
  }, [formDataContext, setFormDataContext]);

  const handleChange = (value) => {
    setSelectedMethod(value);
    setFormDataContext((prevData) => ({
      ...prevData,
      paymentMethod: value,
    }));
  };

  return (
    <div className="md:my-12 md:min-h-screen flex items-center justify-center md:mt-12  bg-gradient-to-tr from-white via-blue-100 to-[#9fbed1] md:rounded-lg">
      <div className="w-full max-w-xl mx-auto p-2 md:p-5 rounded-lg shadow transition-transform duration-500 ease-in-out">
        <fieldset className="border-2 border-[#13679f] rounded mb-5 py-2.5 px-3 md:px-5 ">
          <legend className="bg-[#13679f] text-gray-100 py-1 px-2.5 rounded font-bold w-full md:text-2xl">
            Payment Information
          </legend>

          {/* Payment Switching button */}
          <div className="flex justify-center">
            <div className="flex gap-2">
              <button
                value="card"
                onClick={() => handleChange("card")}
                className={`px-12 py-2 rounded-md ${selectedMethod === "card"
                  ? "bg-[#14649b] text-gray-100"
                  : "bg-gray-200 text-gray-700"
                  }`}
              >
                Card
              </button>
              <button
                value="zelle"
                onClick={() => handleChange("zelle")}
                className={`px-12 py-2 rounded-md ${selectedMethod === "zelle"
                  ? "bg-[#14649b] text-gray-100"
                  : "bg-gray-200 text-gray-700"
                  }`}
              >
                Zelle
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            {selectedMethod === "card" ? (
              <CardPaymentForm formDataContext={formDataContext} />
            ) : (
              <Zelle />
            )}
          </div>
          {
            selectedMethod === "zelle" && (
              <div className="pt-4 flex justify-end">
                <Link to="/badminton/registration">
                  <ButtonPayment title={"Back"} />
                </Link>
              </div>
            )
          }

        </fieldset>
      </div>
    </div>
  );
};

export default PaymentMethodLayout;
