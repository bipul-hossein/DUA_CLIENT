import React from 'react';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailed from './PaymentFailed';

const PaymentResponse = () => {
  const status = "success";

  return (
    <div>
      {status === 'success' ? (
        <PaymentSuccess />
      ) : status === 'failed' ? (
        <PaymentFailed />
      ) : null}
    </div>
  );
};

export default PaymentResponse;
