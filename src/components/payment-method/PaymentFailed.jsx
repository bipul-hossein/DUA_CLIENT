import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const PaymentFailed = () => {
    return (
        <div className="flex flex-col items-center justify-center md:min-h-screen bg-background">
            <div className="mx-auto space-y-6 bg-gray-100 shadow-lg p-6 md:p-8 rounded-lg">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="bg-red-500 rounded-full p-4">
                        <XCircle className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 my-4">Payment Failed 😞</h1>
                    <p className="text-gray-600">
                        Unfortunately, your transaction could not be completed.
                    </p>
                    <p className="text-gray-600">
                        Please try again or contact support if the issue persists.
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
                        to="/support"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        prefetch={false}
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailed;
