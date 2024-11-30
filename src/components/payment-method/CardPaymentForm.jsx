import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { CreditCard, IdCard } from 'lucide-react';

const getCardType = (number) => {
    const cardPatterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    };

    for (let [card, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(number)) {
            return card;
        }
    }
    return '';
};

export default function CardPaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [localData, setLocalData] = useState({
        name: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: ''
    });
    const [cardType, setCardType] = useState('');

    const onSubmit = async (data) => {
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: localData.name,
            },
        });

        if (error) {
            console.error('Payment error:', error);
        } else {
            console.log('Payment method:', paymentMethod);
        }

        reset();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'cardNumber') {
            setCardType(getCardType(value));
        }
    };

    const cardIcons = {
        visa: <IdCard />,
        mastercard: <CreditCard />,
        amex: <IdCard />,
        discover: <IdCard />,
    };

    return (
        <div className="">
            <div className="w-full mx-auto space-y-3 md:space-y-6 bg-white p-4 md:p-6 rounded-md">
                <h1 className="text-xl font-semibold text-gray-900">Pay with Card</h1>

                <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Cards Accepted :</p>
                    <div className="flex gap-2">
                        <div className="w-12 h-8">
                            <img src="/icons/visa.svg" alt="Visa" fill className="object-contain" />
                        </div>
                        <div className="w-12 h-8">
                            <img src="/icons/mastercard.svg" alt="Mastercard" fill className="object-contain" />
                        </div>
                        <div className="w-12 h-8">
                            <img src="/icons/amex.svg" alt="Amex" fill className="object-contain" />
                        </div>
                        <div className="w-12 h-8">
                            <img src="/icons/discover.svg" alt="Discover" fill className="object-contain" />
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
                    <div className="relative">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Credit Card Number :
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={localData.cardNumber}
                            {...register('cardNumber', { required: 'Card Number is required' })}
                            onChange={handleChange}
                            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="1111 3333 5555 7777"
                            maxLength={19}
                        />
                        {errors.cardNumber && (
                            <div className="mt-1 text-sm text-red-500">
                                {errors.cardNumber.message}
                            </div>
                        )}
                        {cardType && (
                            <img
                                src={cardIcons[cardType]}
                                alt={cardType}
                                className="absolute top-9 right-3 h-6 w-6"
                            />
                        )}
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name on card :
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={localData.name}
                            {...register('name', { required: 'Name is required' })}
                            onChange={handleChange}
                            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="Terry B."
                        />
                        {errors.name && (
                            <div className="mt-1 text-sm text-red-500">
                                {errors.name.message}
                            </div>
                        )}
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
                            {...register('expirationMonth', { required: 'Expiration Month is required' })}
                            onChange={handleChange}
                            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="March"
                        />
                        {errors.expirationMonth && (
                            <div className="mt-1 text-sm text-red-500">
                                {errors.expirationMonth.message}
                            </div>
                        )}
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
                                {...register('expirationYear', { required: 'Expiration Year is required' })}
                                onChange={handleChange}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="2030"
                                maxLength={4}
                            />
                            {errors.expirationYear && (
                                <div className="mt-1 text-sm text-red-500">
                                    {errors.expirationYear.message}
                                </div>
                            )}
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
                                {...register('cvv', { required: 'CVV is required' })}
                                onChange={handleChange}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="123"
                                maxLength={4}
                            />
                            {errors.cvv && (
                                <div className="mt-1 text-sm text-red-500">
                                    {errors.cvv.message}
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#14649b] text-white py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6"
                        disabled={!stripe || !elements}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
