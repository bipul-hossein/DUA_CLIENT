// import React, { useCallback, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   EmbeddedCheckoutProvider,
//   EmbeddedCheckout,
// } from "@stripe/react-stripe-js";
// import { useNavigate } from "react-router-dom";

// const stripePromise = loadStripe(
//   "pk_test_51M65RLSIrCWJQylGhY5H7fIcgSgxS5xTztCkFIc2bnmTw1Uj4wjFnwVEbYg1DUdI7pEBc7fmTTHrJye8CESMtHJ000YHQOk1rG"
// );
// // pk_test_51M65RLSIrCWJQylGhY5H7fIcgSgxS5xTztCkFIc2bnmTw1Uj4wjFnwVEbYg1DUdI7pEBc7fmTTHrJye8CESMtHJ000YHQOk1rG

// const CardPaymentForm = ({ formDataContext }) => {
//   const navigate = useNavigate();

//   const playerInfo = formDataContext?.personalInfo;

//   const bodyData = {
//     teamName: playerInfo?.teamName,
//     division: playerInfo?.division?.toUpperCase(),
//     amount: formDataContext?.teamFee,
//     player1Name: playerInfo?.player1FullName,
//     player2Name: playerInfo?.player2FullName,
//     player1Email: playerInfo?.player1Email,
//     player2Email: playerInfo?.player2Email,
//     player1Phone: playerInfo?.player1PhoneNumber || "",
//     player2Phone: playerInfo?.player2PhoneNumber || "",
//     event: "Badminton Registration",
//   };

//   // Create a Checkout Session
//   const fetchClientSecret = useCallback(async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/event/create-checkout-session`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(bodyData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(
//           `Failed to create checkout session: ${response.statusText}`
//         );
//       }

//       const data = await response.json();
//       if (!data?.data?.clientSecret) {
//         throw new Error("Client secret is missing in the response");
//       }

//       return data.data.clientSecret;
//     } catch (error) {
//       console.error("Error fetching client secret:", error);
//       return null; // Return null or handle appropriately to prevent further issues
//     }
//   }, [bodyData]);

//   const options = { fetchClientSecret };

//   useEffect(() => {
//     if (!formDataContext?.personalInfo?.division) {
//       navigate("/badminton/registration");
//     }
//   }, [formDataContext]);

//   if (!options.fetchClientSecret) {
//     return <h1 className="text-2xl text-center">Loading...</h1>;
//   }

//   return (
//     <div className="w-full">
//       <div className="w-full mx-auto space-y-3 md:space-y-6 p-4 md:p-6 rounded-md">
//         <div id="checkout" style={{ width: "100%" }}>
//           <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
//             <EmbeddedCheckout />
//           </EmbeddedCheckoutProvider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardPaymentForm;

import React, { useCallback, useEffect, useMemo } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51M65RLSIrCWJQylGhY5H7fIcgSgxS5xTztCkFIc2bnmTw1Uj4wjFnwVEbYg1DUdI7pEBc7fmTTHrJye8CESMtHJ000YHQOk1rG"
);

const CardPaymentForm = ({ formDataContext }) => {
  const navigate = useNavigate();

  const playerInfo = formDataContext?.personalInfo;

  const bodyData = useMemo(
    () => ({
      teamName: playerInfo?.teamName,
      division: playerInfo?.division?.toUpperCase(),
      // amount: formDataContext?.teamFee,
      player1Name: playerInfo?.player1FullName,
      player2Name: playerInfo?.player2FullName,
      player1Email: playerInfo?.player1Email,
      player2Email: playerInfo?.player2Email,
      player1Phone: playerInfo?.player1PhoneNumber || "",
      player2Phone: playerInfo?.player2PhoneNumber || "",
      event: "Badminton Registration",
    }),
    [playerInfo, formDataContext]
  );

  const fetchClientSecret = useCallback(() => {
    return fetch(`http://localhost:5000/api/event/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })
      .then((res) => res.json())
      .then((data) => data?.data?.clientSecret);
  }, [bodyData]);

  const options = useMemo(() => ({ fetchClientSecret }), [fetchClientSecret]);

  useEffect(() => {
    if (!formDataContext?.personalInfo?.division) {
      navigate("/badminton/registration");
    }
  }, [formDataContext, navigate]);

  if (!options) {
    return <h1 className="text-2xl text-center">Loading</h1>;
  }

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
      <div id="checkout" style={{ width: "100%" }}>
        <EmbeddedCheckout />
      </div>
    </EmbeddedCheckoutProvider>
  );
};

export default CardPaymentForm;
