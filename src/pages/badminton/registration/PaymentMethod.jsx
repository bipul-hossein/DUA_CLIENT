import React, { useContext, useEffect } from 'react';
import { RegistrationContext } from '../../../contextsApi/RegistrationContext';
import { Link } from 'react-router-dom';

function PaymentMethod() {
    const [formDataContext, setFormDataContext] = useContext(RegistrationContext);

    useEffect(() => {
        if (!formDataContext.paymentMethod) {
            setFormDataContext((prevData) => ({
                ...prevData,
                paymentMethod: 'Stripe',
            }));
        }
    }, [formDataContext.paymentMethod, setFormDataContext]);

    const handleChange = (e) => {
        setFormDataContext((prevData) => ({
            ...prevData,
            paymentMethod: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Proceed to the next step or handle form submission
    };

    return (
        <div id="payment-info" className='h-screen mt-12 '>
            <fieldset id="payment-details">
                <legend>Payment Information</legend>

                <div className='flex justify-center'>
                    <div className='flex gap-2'>
                        <button
                            type="button"
                            onClick={handleChange}
                            value="Zelle"
                            className={`px-12 py-2 rounded-md ${formDataContext.paymentMethod === 'Zelle' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Zelle
                        </button>
                        <button
                            type="button"
                            onClick={handleChange}
                            value="Stripe"
                            className={`px-12 py-2 rounded-md ${formDataContext.paymentMethod === 'Stripe' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Stripe
                        </button>
                    </div>
                </div>

                <div className='flex justify-center mt-4'>
                    {formDataContext.paymentMethod === 'Zelle' && (
                        <div>
                            <h3 className='text-xl font-semibold'>Zelle Payment</h3>
                            <p className='mt-1'>Click below to pay via Zelle securely.</p>
                            <div className='mt-3 bg-blue-100 p-3 w-full rounded-md'>
                                <button className='py-1 px-4 bg-blue-900 rounded-md text-base'>pay with Zelle</button>
                            </div>
                        </div>
                    )}
                    {formDataContext.paymentMethod === 'Stripe' && (
                        <div>
                            <h3 className='text-xl font-semibold'>Stripe Payment</h3>
                            <p className='mt-1'>Click below to pay via Stripe securely.</p>
                            <div className='mt-3 bg-blue-100 p-3 w-full rounded-md'>
                                <button className='py-1 px-4 bg-blue-900 rounded-md text-base'>pay with Stripe</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className='flex justify-between mt-4'>
                    <Link to={"/badminton/registration"} type="submit" className='bg-blue-800 py-2 px-4 rounded-md text-white'>Back</Link>
                    <button type="submit" onClick={handleSubmit} className='bg-blue-800 py-2 px-4 rounded-md text-white'>Next</button>
                </div>
            </fieldset>
        </div>
    );
}

export default PaymentMethod;
