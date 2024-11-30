export default function ZellePayment() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Payment submitted')
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-lg mx-auto space-y-6 bg-white p-4 md:p-6 rounded-md">
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
        </div>

        <form onSubmit={handleSubmit} className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#14649b] text-white py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

