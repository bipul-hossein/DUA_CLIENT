import { useContext, useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { RegistrationContext } from '../../contextsApi/RegistrationContext';
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm() {
    const navigate = useNavigate()
    const [formDataContext, setFormDataContext] = useContext(RegistrationContext);
    const [localData, setLocalData] = useState(formDataContext.personalInfo);


    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        const newErrors = {};
        if (!localData.fullName) newErrors.fullName = 'Full Name is required';
        if (!localData.address) newErrors.address = 'Address is required';
        if (!localData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
        if (!localData.gender) newErrors.gender = 'Gender is required';
        if (!localData.email) newErrors.email = 'Email is required';

        // If errors are found, set the errors state and stop submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Stop the process if there are errors
        }

        setFormDataContext((prevData) => ({
            ...prevData,
            personalInfo: {
                fullName: localData.fullName,
                address: localData.address,
                phoneNumber: localData.phoneNumber,
                gender: localData.gender,
                email: localData.email
            },
        }));

        // After submission, show the Stripe payment form
        setLocalData({
            fullName: '',
            address: '',
            phoneNumber: '',
            gender: '',
            email: ''
        });
        setErrors({});
        navigate('/badminton/registration/payment-method',); // Navigate to the payment page with the user data

    };

    const handleInputChange = (field, value) => {
        setLocalData((prevData) => ({
            ...prevData,
            [field]: value
        }));
        setErrors((prevData) => ({
            ...prevData,
            [field]: ''
        })); // Clear the error for that field
    };

    return (

        <div className="min-h-screen flex items-center justify-center mt-12">
            <div className="md:py-12 rounded-lg bg-gradient-to-tr from-white via-blue-100 to-[#9fbed1]">
                <div className="mb-8 mx-20">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-700 mb-2">
                        WELCOME To DULLES UNITED Association Membership Registration
                    </h1>
                    <p className="text-sm text-gray-600">
                        We are 501(c)(3) nonprofit organization and we welcome everyone in our organization.Please complete your 2022 yearly membership form using the link below.
                    </p>
                </div>

                <form onSubmit={handleSubmit} id="member-form">
                    <fieldset id="personal-info">
                        <legend className='md:text-2xl'>
                            Member Basic Information
                        </legend>
                        {/* Full Name */}
                        <div className="">
                            <label className="block text-base mb-2 font-medium text-gray-700">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={localData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                            />
                            {errors.fullName && (
                                <div className="mt-1 flex items-center text-sm text-red-500">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.fullName}
                                </div>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className="">
                            <label className="block text-base mb-2 font-medium text-gray-700">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                value={localData.phoneNumber}
                                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                            />
                            {errors.phoneNumber && (
                                <div className="mt-1 flex items-center text-sm text-red-500">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.phoneNumber}
                                </div>
                            )}
                        </div>

                        {/* Email */}
                        <div className="">
                            <label className="block text-base mb-2 font-medium text-gray-700">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                value={localData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                            />
                            {errors.email && (
                                <div className="mt-1 flex items-center text-sm text-red-500">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        {/* Gender */}
                        <div className="">
                            <label className="block text-base mb-2 font-medium text-gray-700">Gender</label>
                            <select
                                name="gender"
                                defaultValue={localData.gender}
                                onChange={(e) => handleInputChange('gender', e.target.value)}
                                className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                            >
                                {['Male', 'Female', 'Prefer not to say', 'Other'].map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                            {errors.gender && (
                                <div className="mt-1 flex items-center text-sm text-red-500">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.gender}
                                </div>
                            )}
                        </div>

                        {/* Address */}
                        <div className="">
                            <label className="block text-base mb-2 font-medium text-gray-700">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={localData.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                            />
                            {errors.address && (
                                <div className="mt-1 flex items-center text-sm text-red-500">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.address}
                                </div>
                            )}
                        </div>
                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
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
                                Next
                            </button>
                        </div>
                    </fieldset>

                </form>

            </div>
        </div>
    );
}

