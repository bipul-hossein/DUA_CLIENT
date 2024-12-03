// import React, { useState } from 'react';

// export default function ZellePayment() {
//   const [isPending, setIsPending] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Payment submitted');
//     setIsPending(true);  // Set the pending state to true on form submission
//   };

//   return (
//     <div className="">
//       <div className="mx-auto space-y-6 bg-white p-4 md:p-6 rounded-md">
//         <h1 className="text-xl font-semibold text-gray-900">Zelle Payment</h1>

//         <p className="text-gray-600 text-sm md:text-base">
//           Please send payment to uniteddulles@gmail.com via Zelle. Scan the QR code below to complete the
//           payment from your mobile phone.
//         </p>

//         <div className="flex flex-col items-center space-y-4">
//           <div className="relative w-48 h-48 md:w-64 md:h-64">
//             <img
//               src="/zelleQR.png"
//               alt="Zelle Payment QR Code"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>

//           <p className="text-sm text-gray-500 text-center">
//             Scan this QR code with your Zelle app to send the payment.
//           </p>
//           <p className="text-sm text-gray-500 text-center">
//             After you complete your payment, click the "Check Request" button and provide your full name, email, and transaction ID. Then, click the "Payment Complete" button. The admin will respond shortly.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="pt-4">
//           <button
//             type="submit"
//             className="w-full bg-[#14649b] text-white py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6"
//           >
//            Check Request
//           </button>
//         </form>

//         {isPending && (
//           <div className="mt-4 text-center text-green-700">
//           ////////////////////////////////////////////
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ZellePayment() {
  const [isPending, setIsPending] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    setIsPending(true); // Set the pending state to true on form submission
  };

  const handleCheckRequest = () => {
    setShowForm(true); // Show the form when Check Request button is clicked
  };

  return (
    <div className="">
      <div className="mx-auto space-y-6 bg-white p-4 md:p-6 rounded-md">
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
          <p className="text-sm text-gray-500 text-center">
            Scan this QR code with your Zelle app to send the payment.
          </p>
          <p className="text-sm text-gray-500 text-center">
            After you complete your payment, click the "Check Request" button and provide your full name, email, and transaction ID. Then, click the "Payment Completed" button. The admin will respond shortly.
          </p>
        </div>

        {!showForm && (
          <button
            type="button"
            onClick={handleCheckRequest}
            className="w-full bg-[#14649b] text-white py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6"
          >
            Check Request
          </button>
        )}

        {showForm && (
          <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
            <div className="mb-2">
              <label className="block text-base mb-1 font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('fullName', { required: 'Full Name is required' })}
                className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
              />
              {errors.fullName && (
                <div className="mt-1 flex items-center text-sm text-red-500">
                  {errors.fullName.message}
                </div>
              )}
            </div>

            <div className="mb-2">
              <label className="block text-base mb-1 font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address'
                  }
                })}
                className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
              />
              {errors.email && (
                <div className="mt-1 flex items-center text-sm text-red-500">
                  {errors.email.message}
                </div>
              )}
            </div>

            <div className="mb-2">
              <label className="block text-base mb-1 font-medium text-gray-700">
                Memo
              </label>
              <textarea
                {...register('memo')}
                className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
              />
              {errors.memo && (
                <div className="mt-1 flex items-center text-sm text-red-500">
                  {errors.memo.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#14649b] text-white py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6"
            >
              Payment Completed
            </button>
          </form>
        )}

        {isPending && (
          <div className="mt-4 text-center text-green-700">
            Payment is being processed...
          </div>
        )}
      </div>
    </div>
  );
}
