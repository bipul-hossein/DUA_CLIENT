import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
// pk_test_51M65RLSIrCWJQylGhY5H7fIcgSgxS5xTztCkFIc2bnmTw1Uj4wjFnwVEbYg1DUdI7pEBc7fmTTHrJye8CESMtHJ000YHQOk1rG

const CardPaymentForm = () => {
    // Create a Checkout Session
    const fetchClientSecret = useCallback(() => {
        return fetch(
            `${import.meta.env.VITE_API_URL}/event/create-checkout-session`,
            {
                method: "POST",
            }
        )
            .then((res) => res.json())
            .then((data) => data.clientSecret);
    }, []);

    const options = { fetchClientSecret };

    return (
        <div className="w-full">
            <div className="w-full mx-auto space-y-3 md:space-y-6 p-4 md:p-6 rounded-md">
                <div id="checkout" style={{ width: "100%" }}>
                    <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                </div>
            </div>
        </div>
    );
};

export default CardPaymentForm;
