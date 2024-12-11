import React from 'react';
import PaymentSuccess from './PaymentSuccess';

const PaymentResponse = () => {
  const status = "success"


  return (
    <div>
      {status === 'success' ? (
        <PaymentSuccess />
      ) : status === 'failed' ? (
        <div className="status-failed">
          Payment Failed
        </div>
      ) : (
        <div className="status-pending">
          Payment Pending
        </div>
      )}
    </div>
  );
};

export default PaymentResponse;
