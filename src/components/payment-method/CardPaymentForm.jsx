import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { RegistrationContext } from '../../contextsApi/RegistrationContext';

export default function CardPaymentForm() {
    const [formDataContext, setFormDataContext] = useContext(RegistrationContext);
    const stripe = useStripe();
    const elements = useElements();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [localData, setLocalData] = useState({
        fullName: '',
        email: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: '',
        payAmount: '',
        billingAddress: {
            street: '',
            city: '',
            state: '',
            zip: '',
        }
    });

    const onSubmit = async (data) => {
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: localData.fullName,
                email: localData.email,
                address: {
                    line1: localData.billingAddress.street,
                    city: localData.billingAddress.city,
                    state: localData.billingAddress.state,
                    postal_code: localData.billingAddress.zip,
                },
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
    };

    const handleBillingChange = (e) => {
        const { name, value } = e.target;
        setLocalData(prev => ({
            ...prev,
            billingAddress: {
                ...prev.billingAddress,
                [name]: value
            }
        }));
    };

    return (
        <div className="">
            <div className="w-full max-w-lg mx-auto space-y-3 md:space-y-6 p-4 md:p-6 rounded-md">
                <h1 className="text-xl font-semibold text-gray-900">Pay with Card</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
                    <div className="relative">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Credit Card Number :
                        </label>
                        <CardElement
                            id="cardNumber"
                            name="cardNumber"
                            className="w-full text-gray-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#13679f]"
                        />
                    </div>

                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name :
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={localData.fullName}
                            {...register('fullName', { required: 'Full Name is required' })}
                            onChange={handleChange}
                            className="w-full text-gray-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#13679f]"
                            placeholder="Terry B."
                        />
                        {errors.fullName && (
                            <div className="mt-1 text-sm text-red-500">
                                {errors.fullName.message}
                            </div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email :
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={localData.email}
                            {...register('email', { required: 'Email is required' })}
                            onChange={handleChange}
                            className="w-full text-gray-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#13679f]"
                            placeholder="terry@example.com"
                        />
                        {errors.email && (
                            <div className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-1">
                            Billing Address :
                        </label>
                        <div className="flex gap-4">
                            <div className="w-full md:w-1/2">
                                <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                                    Street :
                                </label>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    value={localData.billingAddress.street}
                                    {...register('street', { required: 'Street is required' })}
                                    onChange={handleBillingChange}
                                    className="w-full text-gray-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#13679f]"
                                    placeholder="123 Main St"
                                />
                                {errors.street && (
                                    <div className="mt-1 text-sm text-red-500">
                                        {errors.street.message}
                                    </div>
                                )}
                            </div>

                            <div className="w-full md:w-1/2">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                    City :
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={localData.billingAddress.city}
                                    {...register('city', { required: 'City is required' })}
                                    onChange={handleBillingChange}
                                    className="w-full text-gray-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#13679f]"
                                    placeholder="Anytown"
                                />
                                {errors.city && (
                                    <div className="mt-1 text-sm text-red-500">
                                        {errors.city.message}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <div className="w-full md:w-1/2">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                    State :
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={localData.billingAddress.state}
                                    {...register('state', { required: 'State is required' })}
                                    onChange={handleBillingChange}
                                    className="w-full text-gray-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#13679f]"
                                    placeholder="Anystate"
                                />
                                {errors.state && (
                                    <div className="mt-1 text-sm text-red-500">
                                        {errors.state.message}
                                    </div>
                                )}
                            </div>

                            <div className="w-full md:w-1/2">
                                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                                    Zip Code :
                                </label>
                                <input
                                    type="text"
                                    id="zip"
                                    name="zip"
                                    value={localData.billingAddress.zip}
                                    {...register('zip', { required: 'Zip Code is required' })}
                                    onChange={handleBillingChange}
                                    className="w-full text-gray-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#13679f]"
                                    placeholder="12345"
                                />
                                {errors.zip && (
                                    <div className="mt-1 text-sm text-red-500">
                                        {errors.zip.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#14649b] text-gray-100 py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6"
                        disabled={!stripe || !elements}
                    >
                        pay ${formDataContext?.teamFee || 0}
                    </button>
                </form>
            </div>
        </div>
    );
}
