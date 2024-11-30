import { useState } from 'react'

export default function CardPaymentForm() {
    const [localData, setLocalData] = useState({
        name: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted:', localData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setLocalData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="">
            <div className="w-full mx-auto space-y-6 bg-white p-4 md:p-6 rounded-md">
                <h1 className="text-xl font-semibold text-gray-900">Pay with Card</h1>

                <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Cards Accepted :</p>
                    <div className="flex gap-2">
                        <div className="w-12 h-8">
                            <img
                                src="/placeholder.svg"
                                alt="PayPal"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="w-12 h-8">
                            <img
                                src="/placeholder.svg"
                                alt="Mastercard"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="w-12 h-8">
                            <img
                                src="/placeholder.svg"
                                alt="Visa"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="w-12 h-8">
                            <img
                                src="/placeholder.svg"
                                alt="Discover"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name on card :
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={localData.name}
                            onChange={handleChange}
                            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="Terry B."
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Credit Card Number :
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={localData.cardNumber}
                            onChange={handleChange}
                            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="1111 3333 5555 7777"
                            maxLength={19}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="expirationMonth" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiration Month :
                        </label>
                        <input
                            type="text"
                            id="expirationMonth"
                            name="expirationMonth"
                            value={localData.expirationMonth}
                            onChange={handleChange}
                            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="March"
                            required
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label htmlFor="expirationYear" className="block text-sm font-medium text-gray-700 mb-1">
                                Exp. Year :
                            </label>
                            <input
                                type="text"
                                id="expirationYear"
                                name="expirationYear"
                                value={localData.expirationYear}
                                onChange={handleChange}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="2030"
                                maxLength={4}
                                required
                            />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                CVV :
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={localData.cvv}
                                onChange={handleChange}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="123"
                                maxLength={4}
                                required
                            />
                        </div>
                    </div>

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

