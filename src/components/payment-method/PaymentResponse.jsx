import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import PaymentFailed from "./PaymentFailed";
import PaymentSuccess from "./PaymentSuccess";
import { APP_URL } from "../../config";

const PaymentResponse = () => {
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const isFetched = useRef(false);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sessionId = urlParams.get("session_id");
  const teamName = urlParams.get("teamName");
  const division = urlParams.get("division");
  const player1Name = urlParams.get("player1Name");
  const player2Name = urlParams.get("player2Name");
  const player1Email = urlParams.get("player1Email");
  const player2Email = urlParams.get("player2Email");
  const player1Phone = urlParams.get("player1Phone");
  const player2Phone = urlParams.get("player2Phone");
  const memo = urlParams.get("memo");

  useEffect(() => {
    if (isFetched.current) return; // Prevent multiple fetches
    isFetched.current = true;

    fetch(
      `${APP_URL}/event/session-status?session_id=${sessionId}&teamName=${teamName}&division=${division}&player1Name=${player1Name}&player2Name=${player2Name}&player1Email=${player1Email}&player2Email=${player2Email}&player1Phone=${player1Phone}&player2Phone=${player2Phone}&memo=${memo}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setStatus("failed");
        setIsLoading(false);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/badminton/registration/payment-method" />;
  }

  if (isLoading) {
    return (
      <h1 className="text-xl font-bold text-gray-800 my-4"> Loading...</h1>
    );
  }

  return (
    <div>{status === "success" ? <PaymentSuccess /> : <PaymentFailed />}</div>
  );
};

export default PaymentResponse;
