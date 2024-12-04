import React, { useState } from 'react';



const QrCodeFonZelle = () => {
    const [submitMessage, setSubmittedMessage] = useState("")


    const handleSubmit = () => {
        setSubmittedMessage("payment status is waiting. please wait for confirmation")
    }


    return (
        <div className="md:my-12 md:w-[50%] mx-auto space-y-6 bg-white p-4 md:p-6 rounded-md">
            <h1 className="text-xl font-semibold text-gray-900">Zelle Payment</h1>
            <p className="text-gray-600 text-sm md:text-base">
                Please send payment to uniteddulles@gmail.com via Zelle. Scan the QR code below to complete the
                payment from your mobile phone.
            </p>
            <div className="flex flex-col items-center space-y-4">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                    <img
                        src="/zelleQR.png"
                        alt="Zelle Payment QR Code"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <p className="text-sm text-gray-600 text-center">
                    Scan this QR code with your Zelle app to send the payment.
                </p>
                <p className="text-sm text-gray-600 text-center">
                    After you complete your payment, click the "Check Request" button and provide your full name, email, and transaction ID. Then, click the "Payment Completed" button. The admin will respond shortly.
                </p>
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-[#14649b] text-gray-100 py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6"
            >
                Pay Completed
            </button>

            {
                submitMessage && (
                    <div className="mt-4 text-center text-sm text-[#14649b]">
                        {submitMessage}
                    </div>
                )
            }
        </div>
    );
};

export default QrCodeFonZelle;