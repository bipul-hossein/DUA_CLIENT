import React, { useState } from 'react';


const QrCodeForZelle = () => {
    const [submitMessage, setSubmittedMessage] = useState("")


    const handleSubmit = () => {
        setSubmittedMessage("payment status is waiting. please wait for confirmation")
    }


    return (
        <div className="md:my-12 md:w-[50%] mx-auto space-y-6 bg-white p-1 md:p-6 rounded-md">
            {/* <h1 className="text-xl font-semibold text-gray-900">Zelle Payment</h1> */}
            {/* <p className="text-gray-600 text-sm md:text-base">
                Please send payment to uniteddulles@gmail.com via Zelle. Scan the QR code below to complete the
                payment from your mobile phone.
            </p> */}
            <div className="flex flex-col items-center">
                <div className="w-full h-full">
                    <img
                        src="/images/QrCodeZelle.jpg"
                        alt="Zelle Payment QR Code"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <p className="text-sm text-gray-600 text-center">
                    After you complete your payment, click the "Payment Completed" button. The admin will respond shortly.
                </p>
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-[#14649b] text-gray-100 py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6"
            >
                Payment Completed
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

export default QrCodeForZelle;










// const QrCodeForZelle = () => {
//     const [submitMessage, setSubmittedMessage] = useState("")


//     const handleSubmit = () => {
//         setSubmittedMessage("payment status is waiting. please wait for confirmation")
//     }

//     return (
//         <div className="md:my-12 md:w-[50%] mx-auto space-y-6 bg-gray-100 p-4 md:p-6 rounded-md">

//             {/* Header */}
//             <div className="text-center space-y-2">
//                 <h1 className="text-2xl font-semibold text-gray-900">
//                     Send Money with Zelle®
//                 </h1>
//                 <p className="text-gray-600">
//                     Scan in your banking app to pay
//                 </p>
//             </div>

//             {/* Organization Name */}
//             <div className="text-center">
//                 <h2 className="text-xl font-bold text-gray-900">
//                     Dulles United
//                     <br />
//                     Association
//                 </h2>
//             </div>

//             {/* QR Code */}
//             <div className="flex justify-center">
//                 <img
//                     src="/images/QrCodeZelle.png"
//                     alt="Zelle QR Code"
//                     width={200}
//                     height={200}
//                     className="w-80 h-80"
//                 />
//             </div>

//             {/* Zelle Logo */}
//             {/* <div className="flex justify-center">
//                     <img
//                         src="/placeholder.svg?height=50&width=100"
//                         alt="Zelle Logo"
//                         width={100}
//                         height={50}
//                         className="h-8 w-auto"
//                     />
//                 </div> */}

//             {/* Instructions */}
//             <div className="text-center text-sm text-gray-600 space-y-1">
//                 <p>After you complete your payment, click the "Payment Completed" button.</p>
//                 <p>The admin will respond shortly.</p>
//             </div>

//             {/* Button */}
//             <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 className="w-full bg-[#14649b] text-gray-100 py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6"
//             >
//                 Payment Completed
//             </button>

//             {
//                 submitMessage && (
//                     <div className="mt-4 text-center text-sm text-[#14649b]">
//                         {submitMessage}
//                     </div>
//                 )
//             }

//         </div>
//     )
// }

// export default QrCodeForZelle;