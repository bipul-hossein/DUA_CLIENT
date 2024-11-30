import React, { useContext, useEffect, useState } from 'react';
import { RegistrationContext } from '../../contextsApi/RegistrationContext';
import Zelle from '../payment-method/ZellePayment';
import CardPaymentForm from '../payment-method/CardPaymentForm';
import { Link } from 'react-router-dom';


const PaymentMethodLayout = () => {
    const [formDataContext, setFormDataContext] = useContext(RegistrationContext);
    const [selectedMethod, setSelectedMethod] = useState(formDataContext.paymentMethod || 'zelle');


    useEffect(() => {
        if (!formDataContext.paymentMethod) {
            setFormDataContext((prevData) => ({
                ...prevData,
                paymentMethod: 'zelle',
            }));
        }
    }, [formDataContext, setFormDataContext]);

    const handleChange = (value) => {
        setSelectedMethod(value);
        setFormDataContext((prevData) => ({
            ...prevData,
            paymentMethod: value,
        }));
    };

    return (
        <div id="payment-info" className='my-12 mx-2 md:mx-0'>
            <fieldset id="payment-details">
                <legend>Payment Information</legend>

                <div className='flex justify-center'>
                    <div className='flex gap-2'>
                        <button
                            value="zelle"
                            onClick={() => handleChange('zelle')}
                            className={`px-12 py-2 rounded-md ${selectedMethod === 'zelle' ? 'bg-[#14649b] text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Zelle
                        </button>
                        <button
                            value="card"
                            onClick={() => handleChange('card')}
                            className={`px-12 py-2 rounded-md ${selectedMethod === 'card' ? 'bg-[#14649b] text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Card
                        </button>
                    </div>
                </div>

                <div className='flex justify-center mt-4'>
                    {selectedMethod === 'card' ? <CardPaymentForm /> : <Zelle />}
                </div>

                <div className="pt-4 flex justify-end">

                    <Link
                        to="/badminton/registration"
                        className="px-6 py-3 text-white bg-[#14649b] rounded-md shadow-sm"
                        style={{
                            transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.backgroundColor = '#0d4a70';
                            e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.backgroundColor = '#14649b';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        Back
                    </Link>
                </div>
            </fieldset>

        </div>
    );
};

export default PaymentMethodLayout;
