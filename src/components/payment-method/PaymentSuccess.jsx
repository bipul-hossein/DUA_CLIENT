import { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const PaymentSuccess = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
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
      `http://localhost:5000/api/event/session-status?session_id=${sessionId}&teamName=${teamName}&division=${division}&player1Name=${player1Name}&player2Name=${player2Name}&player1Email=${player1Email}&player2Email=${player2Email}&player1Phone=${player1Phone}&player2Phone=${player2Phone}&memo=${memo}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/badminton/registration/payment-method" />;
  }

  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen bg-background">
      <div className="mx-auto space-y-6 bg-gray-100 shadow-lg p-6 md:p-8 rounded-lg">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-green-500 rounded-full p-4">
            <CheckIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 my-4 ">Payment Successful</h1>
          <p className="text-gray-600">
            Thank you for registering! Your transaction was completed successfully.
          </p>
          <p className="text-gray-600">
            Please check your email inbox or spam folder for the registration details.
          </p>
        </div>
        <div className="flex justify-between flex-wrap-reverse gap-4 mt-6">
          <Link
            to="/"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            prefetch={false}
          >
            Return to Home
          </Link>
          <Link
            to=""
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            prefetch={false}
          >
            View Receipt
          </Link>
        </div>
      </div>
    </div>

  );
};

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

export default PaymentSuccess;
