import { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AlertCircle } from 'lucide-react';
import { RegistrationContext } from '../../contextsApi/RegistrationContext';
import { useNavigate } from 'react-router-dom';
import ButtonPayment from '../share/button/ButtonPayment';

export default function RegistrationForm() {
    const navigate = useNavigate();
    const [formDataContext, setFormDataContext] = useContext(RegistrationContext);

    const { register, handleSubmit, setValue, watch, formState: { errors }, clearErrors, reset } = useForm({
        defaultValues: formDataContext.personalInfo || {}
    });

    const divisionPrices = {
        beginner: 120,
        intermediate: 150,
        open: 200
    };

    const selectedDivision = watch('division');
    const teamFee = divisionPrices[selectedDivision] || 0;

    useEffect(() => {
        if (formDataContext.personalInfo) {
            reset(formDataContext.personalInfo);
        }
    }, [formDataContext, reset]);

    const onSubmit = (data) => {
        setFormDataContext((prevData) => ({
            ...prevData,
            personalInfo: data,
            teamFee: teamFee
        }));

        // Navigate to the payment page with the user data
        navigate('/badminton/registration/payment-method');
    };

    const handleInputChange = (field, value) => {
        setValue(field, value);
        clearErrors(field);
    };

    return (
        <div className="md:min-h-screen flex items-center justify-center md:my-12  bg-gradient-to-tr from-white via-blue-100 to-[#9fbed1] md:rounded-lg">
            <div className="md:py-12">
                <div className="max-w-xl md:mx-auto mb-4 mx-2 mt-2 md:px-5">
                    <h1 className="text-xl font-bold text-gray-700 mb-2">
                        Welcome to the Dulles United Association's Badminton Registration
                    </h1>
                    <p className="text-sm text-gray-600">
                        We are a 501(c)(3) nonprofit organization and we welcome everyone in our organization. Please complete your 2024 yearly membership.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-2 md:p-5 rounded-lg shadow transition-transform duration-500 ease-in-out">
                    <fieldset className="border-2 border-[#13679f] rounded mb-5 py-2.5 px-3 md:px-5">
                        <legend className="bg-[#13679f] text-gray-100 py-1 px-2.5 rounded font-bold w-full md:text-2xl">
                            Team Information
                        </legend>

                        <div className='flex justify-between md:gap-3 flex-col md:flex-row'>
                            {/* Team Name */}
                            <div className="mb-2 w-full md:w-1/2">
                                <label className="block text-base mb-1 font-medium text-gray-700">
                                    Team Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('teamName', { required: 'Team Name is required' })}
                                    onChange={(e) => handleInputChange('teamName', e.target.value)}
                                    className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                />
                                {errors.teamName && (
                                    <div className="mt-1 flex items-center text-sm text-red-500">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        {errors.teamName.message}
                                    </div>
                                )}
                            </div>

                            {/* Division */}
                            <div className="mb-2 w-full md:w-1/2">
                                <label className="block text-base mb-1 font-medium text-gray-700">
                                    Division <span className="text-red-500">*</span>
                                </label>
                                <select
                                    {...register('division', { required: 'Division is required' })}
                                    onChange={(e) => handleInputChange('division', e.target.value)}
                                    defaultValue=""
                                    className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                >
                                    <option value="" disabled>Select your division</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="open">Open</option>
                                </select>
                                {errors.division && (
                                    <div className="mt-1 flex items-center text-sm text-red-500">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        {errors.division.message}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='flex justify-between flex-col md:flex-row'>
                            <div className="flex-1 md:pr-2">
                                {/* Player 1 */}
                                <div>
                                    <label className="block text-base mb-1 font-medium text-gray-700">
                                        Player 1
                                    </label>
                                    <hr className="border-gray-400 mb-2" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-base mb-1 font-medium text-gray-700">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('player1FullName', { required: 'Full Name is required' })}
                                        onChange={(e) => handleInputChange('player1FullName', e.target.value)}
                                        className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                    />
                                    {errors.player1FullName && (
                                        <div className="mt-1 flex items-center text-sm text-red-500">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.player1FullName.message}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-2">
                                    <label className="block text-base mb-1 font-medium text-gray-700">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register('player1Email', { required: 'Email is required' })}
                                        onChange={(e) => handleInputChange('player1Email', e.target.value)}
                                        className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                    />
                                    {errors.player1Email && (
                                        <div className="mt-1 flex items-center text-sm text-red-500">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.player1Email.message}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-2">
                                    <label className="block text-base mb-1 font-medium text-gray-700">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        {...register('player1PhoneNumber', { required: 'Phone Number is required' })}
                                        onChange={(e) => handleInputChange('player1PhoneNumber', e.target.value)}
                                        className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                    />
                                    {errors.player1PhoneNumber && (
                                        <div className="mt-1 flex items-center text-sm text-red-500">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.player1PhoneNumber.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="md:border-l flex-1 md:pl-2  md:border-white">
                                {/* Player 2 */}
                                <div>
                                    <label className="block text-base mb-1 font-medium text-gray-700">
                                        Player 2
                                    </label>
                                    <hr className="border-gray-400 mb-2" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-base mb-1 font-medium text-gray-700">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('player2FullName', { required: 'Full Name is required' })}
                                        onChange={(e) => handleInputChange('player2FullName', e.target.value)}
                                        className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                    />
                                    {errors.player2FullName && (
                                        <div className="mt-1 flex items-center text-sm text-red-500">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.player2FullName.message}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-2">
                                    <label className="block text-base mb-1 font-medium text-gray-700">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register('player2Email', { required: 'Email is required' })}
                                        onChange={(e) => handleInputChange('player2Email', e.target.value)}
                                        className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                    />
                                    {errors.player2Email && (
                                        <div className="mt-1 flex items-center text-sm text-red-500">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.player2Email.message}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-2">
                                    <label className="block text-base mb-1 font-medium text-gray-700">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        {...register('player2PhoneNumber', { required: 'Phone Number is required' })}
                                        onChange={(e) => handleInputChange('player2PhoneNumber', e.target.value)}
                                        className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                    />
                                    {errors.player2PhoneNumber && (
                                        <div className="mt-1 flex items-center text-sm text-red-500">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.player2PhoneNumber.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Team Fee */}
                        <div className="mb-2">
                            <label className="block text-base mb-1 font-medium text-gray-700">
                                Team Fee
                            </label>
                            <input
                                type="text"
                                value={`$${teamFee}`}
                                readOnly
                                className="flex-grow border border-gray-300 p-2 md:p-3 w-full rounded-md shadow-sm bg-gray-100 text-gray-600"
                            />
                        </div>


                        <div className="pt-2 md:pt-4 flex justify-end">
                            <ButtonPayment title={"Next"} />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}