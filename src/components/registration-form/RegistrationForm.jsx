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
        <div className="md:min-h-screen flex items-center justify-center md:mt-12  bg-gradient-to-tr from-white via-blue-100 to-[#9fbed1] md:rounded-lg">
            <div className="md:py-12">
                <div className="max-w-xl md:mx-auto mb-4 mx-2 mt-2 md:px-5">
                    <h1 className="text-xl font-bold text-gray-700 mb-2">
                        Welcome to Dulles United Association Membership Registration
                    </h1>
                    <p className="text-sm text-gray-600">
                        We are a 501(c)(3) nonprofit organization and we welcome everyone in our organization. Please complete your 2024 yearly membership.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-2 md:p-5 rounded-lg shadow transition-transform duration-500 ease-in-out">
                    <fieldset className="border-2 border-[#13679f] rounded mb-5 py-2.5 px-3 md:px-5">
                        <legend className="bg-[#13679f] text-white py-1 px-2.5 rounded font-bold w-full md:text-2xl">
                            Member Basic Information
                        </legend>

                        <div className='flex justify-between'>
                            {/* Team Name */}
                            <div className="mb-2 w-[55%]">
                                <label className="block text-base mb-1 font-medium text-gray-700">
                                    Team Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('teamName', { required: 'Team Name is required' })}
                                    onChange={(e) => handleInputChange('teamName', e.target.value)}
                                    className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                                />
                                {errors.teamName && (
                                    <div className="mt-1 flex items-center text-sm text-red-500">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        {errors.teamName.message}
                                    </div>
                                )}
                            </div>

                            {/* Division */}
                            <div className="mb-2 w-[40%]">
                                <label className="block text-base mb-1 font-medium text-gray-700">
                                    Division <span className="text-red-500">*</span>
                                </label>
                                <select
                                    {...register('division', { required: 'Division is required' })}
                                    onChange={(e) => handleInputChange('division', e.target.value)}
                                    className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                                >
                                    <option value="" disabled>Select your division</option>
                                    <option value="beginner">Beginner - 120 dollars</option>
                                    <option value="intermediate">Intermediate - 150 dollars</option>
                                    <option value="open">Open - 200 dollars</option>
                                </select>
                                {errors.division && (
                                    <div className="mt-1 flex items-center text-sm text-red-500">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        {errors.division.message}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className="flex-1 pr-2">
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
                                        className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
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
                                        className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
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
                                        className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                                    />
                                    {errors.player1PhoneNumber && (
                                        <div className="mt-1 flex items-center text-sm text-red-500">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.player1PhoneNumber.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="border-l flex-1 pl-2  border-white">
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
                                        className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
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
                                        className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
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
                                        className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
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
                                value={`${teamFee} dollars`}
                                readOnly
                                className="flex-grow border border-gray-300 p-2 md:p-3 w-full rounded-md shadow-sm bg-gray-100 text-black"
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





// import { useContext, useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { AlertCircle } from 'lucide-react';
// import { RegistrationContext } from '../../contextsApi/RegistrationContext';
// import { useNavigate } from 'react-router-dom';
// import ButtonPayment from '../share/button/ButtonPayment';

// export default function RegistrationForm() {
//     const navigate = useNavigate();
//     const [formDataContext, setFormDataContext] = useContext(RegistrationContext);

//     const { register, handleSubmit, setValue, reset, formState: { errors }, clearErrors } = useForm({
//         defaultValues: formDataContext.personalInfo || {}
//     });

//     useEffect(() => {
//         if (formDataContext.personalInfo) {
//             reset(formDataContext.personalInfo);
//         }
//     }, [formDataContext, reset]);

//     const onSubmit = (data) => {
//         setFormDataContext((prevData) => ({
//             ...prevData,
//             personalInfo: data,
//         }));

//         // Navigate to the payment page with the user data
//         navigate('/badminton/registration/payment-method');
//     };

//     const handleInputChange = (field, value) => {
//         setValue(field, value);
//         clearErrors(field);
//     };

//     return (
//         <div className="md:min-h-screen flex items-center justify-center md:mt-12">
//             <div className="md:py-12 md:rounded-lg bg-gradient-to-tr from-white via-blue-100 to-[#9fbed1]">
//                 <div className="mb-4 md:mb-8 mx-2 md:mx-20 mt-2">
//                     <h1 className="text-xl md:text-4xl font-bold text-gray-700 mb-2">
//                         WELCOME To DULLES UNITED Association Membership Registration
//                     </h1>
//                     <p className="text-sm text-gray-600">
//                         We are a 501(c)(3) nonprofit organization and we welcome everyone in our organization. Please complete your 2022 yearly membership form using the link below.
//                     </p>
//                 </div>

//                 <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-2 md:p-5 rounded-lg shadow transition-transform duration-500 ease-in-out">
//                     <fieldset id="personal-info" className="border-2 border-[#13679f] rounded mb-5 py-2.5 px-3 md:px-5">
//                         <legend className="bg-[#13679f] text-white py-1 px-2.5 rounded font-bold w-full md:text-2xl">
//                             Member Basic Information
//                         </legend>

//                         {/* Full Name */}
//                         <div className="mb-2">
//                             <label className="block text-base mb-1 font-medium text-gray-700">
//                                 Full Name <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 {...register('fullName', { required: 'Full Name is required' })}
//                                 onChange={(e) => handleInputChange('fullName', e.target.value)}
//                                 className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
//                             />
//                             {errors.fullName && (
//                                 <div className="mt-1 flex items-center text-sm text-red-500">
//                                     <AlertCircle className="h-4 w-4 mr-1" />
//                                     {errors.fullName.message}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Phone Number */}
//                         <div className="mb-2">
//                             <label className="block text-base mb-1 font-medium text-gray-700">
//                                 Phone Number <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="tel"
//                                 {...register('phoneNumber', { required: 'Phone Number is required' })}
//                                 onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
//                                 className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
//                             />
//                             {errors.phoneNumber && (
//                                 <div className="mt-1 flex items-center text-sm text-red-500">
//                                     <AlertCircle className="h-4 w-4 mr-1" />
//                                     {errors.phoneNumber.message}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Email */}
//                         <div className="mb-2">
//                             <label className="block text-base mb-1 font-medium text-gray-700">
//                                 Email <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="email"
//                                 {...register('email', { required: 'Email is required' })}
//                                 onChange={(e) => handleInputChange('email', e.target.value)}
//                                 className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
//                             />
//                             {errors.email && (
//                                 <div className="mt-1 flex items-center text-sm text-red-500">
//                                     <AlertCircle className="h-4 w-4 mr-1" />
//                                     {errors.email.message}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Gender */}
//                         <div className="mb-2">
//                             <label className="block text-base mb-1 font-medium text-gray-700">Gender</label>
//                             <select
//                                 {...register('gender', { required: 'Gender is required' })}
//                                 onChange={(e) => handleInputChange('gender', e.target.value)}
//                                 className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
//                             >
//                                 <option value="" disabled>Select your gender</option>
//                                 {['Male', 'Female', 'Prefer not to say', 'Other'].map((option) => (
//                                     <option key={option} value={option}>{option}</option>
//                                 ))}
//                             </select>
//                             {errors.gender && (
//                                 <div className="mt-1 flex items-center text-sm text-red-500">
//                                     <AlertCircle className="h-4 w-4 mr-1" />
//                                     {errors.gender.message}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Address */}
//                         <div className="mb-2">
//                             <label className="block text-base mb-1 font-medium text-gray-700">
//                                 Address <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 {...register('address', { required: 'Address is required' })}
//                                 onChange={(e) => handleInputChange('address', e.target.value)}
//                                 className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
//                             />
//                             {errors.address && (
//                                 <div className="mt-1 flex items-center text-sm text-red-500">
//                                     <AlertCircle className="h-4 w-4 mr-1" />
//                                     {errors.address.message}
//                                 </div>
//                             )}
//                         </div>
//                         <div className="pt-2 md:pt-4 flex justify-end">
//                             <ButtonPayment title={"Next"} />
//                         </div>
//                     </fieldset>
//                 </form>
//             </div>
//         </div>
//     );
// }




// import { useContext, useState } from 'react';
// import { AlertCircle } from 'lucide-react';
// import { RegistrationContext } from '../../contextsApi/RegistrationContext';
// import { useNavigate } from 'react-router-dom';
// import ButtonPayment from '../share/button/ButtonPayment';

// export default function RegistrationForm() {
//     const navigate = useNavigate()
//     const [formDataContext, setFormDataContext] = useContext(RegistrationContext);
//     const [localData, setLocalData] = useState(formDataContext.personalInfo);


//     const [errors, setErrors] = useState({});

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate form
//         const newErrors = {};
//         if (!localData.fullName) newErrors.fullName = 'Full Name is required';
//         if (!localData.address) newErrors.address = 'Address is required';
//         if (!localData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
//         if (!localData.gender) newErrors.gender = 'Gender is required';
//         if (!localData.email) newErrors.email = 'Email is required';

//         // If errors are found, set the errors state and stop submission
//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             return; // Stop the process if there are errors
//         }

//         setFormDataContext((prevData) => ({
//             ...prevData,
//             personalInfo: {
//                 fullName: localData.fullName,
//                 address: localData.address,
//                 phoneNumber: localData.phoneNumber,
//                 gender: localData.gender,
//                 email: localData.email
//             },
//         }));

//         // After submission, show the Stripe payment form
//         setLocalData({
//             fullName: '',
//             address: '',
//             phoneNumber: '',
//             gender: '',
//             email: ''
//         });
//         setErrors({});
//         navigate('/badminton/registration/payment-method',); // Navigate to the payment page with the user data

//     };

//     const handleInputChange = (field, value) => {
//         setLocalData((prevData) => ({
//             ...prevData,
//             [field]: value
//         }));
//         setErrors((prevData) => ({
//             ...prevData,
//             [field]: ''
//         })); // Clear the error for that field
//     };

//     return (

//         <div className="md:min-h-screen flex items-center justify-center md:mt-12">
//             <div className="md:py-12 md:rounded-lg bg-gradient-to-tr from-white via-blue-100 to-[#9fbed1]">
//                 <div className="mb-4 md:mb-8 mx-2 md:mx-20 mt-2">
//                     <h1 className="text-xl md:text-4xl font-bold text-gray-700 mb-2">
//                         WELCOME To DULLES UNITED Association Membership Registration
//                     </h1>
//                     <p className="text-sm text-gray-600">
//                         We are 501(c)(3) nonprofit organization and we welcome everyone in our organization.Please complete your 2022 yearly membership form using the link below.
//                     </p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-2 md:p-5 rounded-lg shadow transition-transform duration-500 ease-in-out">
//                     <fieldset id="personal-info" className="border-2 border-[#13679f] rounded mb-5 py-2.5 px-3 md:px-5">
//                         <legend className="bg-[#13679f] text-white py-1 px-2.5 rounded font-bold w-full md:text-2xl">
//                             Member Basic Information
//                         </legend>
//                         {/* Full Name */}
//                         <div className="mb-2">
//                             <label className="block text-base mb-1 font-medium text-gray-700">
//                                 Full Name <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 value={localData.fullName}
//                                 onChange={(e) => handleInputChange('fullName', e.target.value)}
//                                 className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
//                             />
//                             {errors.fullName && (
//                                 <div className="mt-1 flex items-center text-sm text-red-500">
//                                     <AlertCircle className="h-4 w-4 mr-1" />
//                                     {errors.fullName}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Phone Number */}
//                         <div className="mb-2">
//                             <label className="block text-base mb-1 font-medium text-gray-700">
//                                 Phone Number <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="tel"
//                                 value={localData.phoneNumber}
//                                 onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
//                                 className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
//                             />
//                             {errors.phoneNumber && (
//                                 <div className="mt-1 flex items-center text-sm text-red-500">
//                                     <AlertCircle className="h-4 w-4 mr-1" />
//                                     {errors.phoneNumber}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Email */}
//                         <div className="mb-2">
//                             <label className="block text-base mb-1 font-medium text-gray-700">
//                                 Email <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="email"
//                                 value={localData.email}
//                                 onChange={(e) => handleInputChange('email', e.target.value)}
//                                 className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
//                             />
//                             {errors.email && (
//                                 <div className="mt-1 flex items-center text-sm text-red-500">
//                                     <AlertCircle className="h-4 w-4 mr-1" />
//                                     {errors.email}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Gender */}
//                         <div className="mb-2">
//                             <label className="block text-base mb-1 font-medium text-gray-700">Gender</label>
//                             <select
//                                 name="gender"
//                                 defaultValue={localData.gender}
//                                 onChange={(e) => handleInputChange('gender', e.target.value)}
//                                 className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
//                             >
//                                 <option value="" disabled>Select your gender</option>
//                                 {['Male', 'Female', 'Prefer not to say', 'Other'].map((option) => (
//                                     <option key={option} value={option}>{option}</option>
//                                 ))}
//                             </select>
//                             {errors.gender && (
//                                 <div className="mt-1 flex items-center text-sm text-red-500">
//                                     <AlertCircle className="h-4 w-4 mr-1" />
//                                     {errors.gender}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Address */}
//                         <div className="mb-2">
//                             <label className="block text-base mb-1 font-medium text-gray-700">
//                                 Address <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 value={localData.address}
//                                 onChange={(e) => handleInputChange('address', e.target.value)}
//                                 className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
//                             />
//                             {errors.address && (
//                                 <div className="mt-1 flex items-center text-sm text-red-500">
//                                     <AlertCircle className="h-4 w-4 mr-1" />
//                                     {errors.address}
//                                 </div>
//                             )}
//                         </div>
//                         <div className="pt-2 md:pt-4 flex justify-end">
//                             <ButtonPayment title={"Next"} />
//                         </div>
//                     </fieldset>

//                 </form>

//             </div>
//         </div>
//     );
// }

