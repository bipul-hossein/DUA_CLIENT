import React, { useCallback, useEffect, useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { APP_URL, STRIPE_PUBLIC_SECRET } from "../../config";

const stripePromise = loadStripe(STRIPE_PUBLIC_SECRET);

const CardPaymentForm = ({ formDataContext }) => {
  const [clientSecret, setClientSecret] = useState(null);
  const navigate = useNavigate();

  const playerInfo = formDataContext?.personalInfo;

  const bodyData = useMemo(
    () => ({
      teamName: playerInfo?.teamName,
      division: playerInfo?.division?.toUpperCase(),
      player1Name: playerInfo?.player1FullName,
      player2Name: playerInfo?.player2FullName,
      player1Email: playerInfo?.player1Email,
      player2Email: playerInfo?.player2Email,
      player1Phone: playerInfo?.player1PhoneNumber || "",
      player2Phone: playerInfo?.player2PhoneNumber || "",
      player1Image: playerInfo?.player1Image,
      player2Image: playerInfo?.player2Image,
      event: "Badminton Registration",
      eventName: "Badminton Registration",
    }),
    [playerInfo, formDataContext]
  );

  const fetchClientSecret = useCallback(async () => {
    if (!playerInfo?.division) {
      return null;
    }

    const response = await fetch(`${APP_URL}/event/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    return data?.data?.clientSecret;
  }, [bodyData, playerInfo?.division]);

  useEffect(() => {
    if (!playerInfo?.division) {
      navigate("/badminton/registration");
      return;
    }

    const loadClientSecret = async () => {
      const secret = await fetchClientSecret();
      if (secret) {
        setClientSecret(secret);
      }
    };

    loadClientSecret();
  }, [fetchClientSecret, playerInfo?.division, navigate]);

  if (!clientSecret) {
    return <h1 className="text-2xl text-center">Loading...</h1>;
  }

  // Only render EmbeddedCheckoutProvider if clientSecret is available
  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
      <div id="checkout" style={{ width: "100%" }}>
        <EmbeddedCheckout />
      </div>
    </EmbeddedCheckoutProvider>
  );
};

export default CardPaymentForm;
