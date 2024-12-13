// import { AlertCircle, Send } from "lucide-react";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import ReCAPTCHA from "react-google-recaptcha";

// const ContactUs = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [captchaVerified, setCaptchaVerified] = useState(false);

//     const onSubmit = (data) => {
//         console.log("Form submitted successfully:", data);
//         setIsSubmitted(true);
//     };

//     const handleCaptchaChange = (value) => {
//         setCaptchaVerified(!!value);
//     };

//     return (
//         <div
//             className="md:min-h-screen"
//             style={{ backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//             <div className="mx-auto md:py-20">
//                 <div className="bg-gray-100/30 backdrop-blur-sm rounded-lg py-6 px-2 md:px-8">
//                     <div className="w-full md:w-[50%] mx-auto md:pb-20 md:pt-10">
//                         {isSubmitted ? (
//                             <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
//                                 <p className="font-bold">Success!</p>
//                                 <p>Your message has been sent successfully.</p>
//                             </div>
//                         ) : (
//                             <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//                                 <div>
//                                     <h3 className="text-3xl font-bold text-gray-900">Contact Us</h3>
//                                 </div>
//                                 <div className="space-y-4">
//                                     <div className="">
//                                         <input
//                                             type="text"
//                                             name="fullName"
//                                             placeholder="Your Name"
//                                             {...register('fullName', { required: 'Full Name is required' })}
//                                             className="pl-4 flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-900"
//                                         />
//                                         {errors.fullName && (
//                                             <div className="mt-1 flex items-center text-sm text-red-500">
//                                                 <AlertCircle className="h-4 w-4 mr-1" />
//                                                 {errors.fullName.message}
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="">
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             placeholder="Your Email"
//                                             {...register('email', {
//                                                 required: 'Email is required',
//                                                 pattern: {
//                                                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                                                     message: 'Invalid email address'
//                                                 }
//                                             })}
//                                             className="pl-4 flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-900"
//                                         />
//                                         {errors.email && (
//                                             <div className="mt-1 flex items-center text-sm text-red-500">
//                                                 <AlertCircle className="h-4 w-4 mr-1" />
//                                                 {errors.email.message}
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="">
//                                         <input
//                                             {...register('phone', {
//                                                 required: 'Phone Number is required',
//                                                 pattern: {
//                                                     value: /^[0-9]{10,15}$/, // Adjust the regex as per the phone number format you expect
//                                                     message: 'Invalid phone number format'
//                                                 }
//                                             })}
//                                             type="text"
//                                             placeholder="Your Phone"
//                                             className="pl-4 flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-900"
//                                         />
//                                         {errors.phone && (
//                                             <div className="mt-1 flex items-center text-sm text-red-500">
//                                                 <AlertCircle className="h-4 w-4 mr-1" />
//                                                 {errors.phone.message}
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="">
//                                         <textarea
//                                             name="comments"
//                                             rows={5}
//                                             placeholder="Your Message"
//                                             {...register('comments', { required: 'Comments are required' })}
//                                             className="pl-4 flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-900"
//                                         />
//                                         {errors.comments && (
//                                             <div className="mt-1 flex items-center text-sm text-red-500">
//                                                 <AlertCircle className="h-4 w-4 mr-1" />
//                                                 {errors.comments.message}
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                                 <ReCAPTCHA
//                                     sitekey="6LcGYpQqAAAAAJxhW0aMyfIImA4ZsD8X7xX1ZXO8"
//                                     onChange={handleCaptchaChange}
//                                 />
//                                 <button
//                                     type="submit"
//                                     className="w-full bg-[#14649b] text-gray-900 py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6 flex justify-center items-center gap-2"
//                                     disabled={!captchaVerified}
//                                 >
//                                     Send Message <Send />
//                                 </button>
//                             </form>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ContactUs;









import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactUs() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log('Form submitted:', data)
        // Handle form submission logic here
    }

    return (
        <div className="min-h-screen" style={{ backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full md:max-w-7xl mx-auto md:py-12">
                <div className="bg-gray-100 backdrop-blur-sm rounded-lg px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column - Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>

                            </div>

                            <div className="space-y-4">

                                <div className="flex items-center space-x-4">
                                    <Phone className="w-6 h-6 text-blue-500" />
                                    <p className="text-gray-900"> (917)-770-3399</p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                                    <div>
                                        <p className="text-gray-900">1039 STERLING RD STE 204 HERNDON VA 20170-3840,</p>
                                        <p className="text-gray-900">United States</p>
                                    </div>
                                </div>


                                <div className="flex items-center space-x-4">
                                    <Mail className="w-6 h-6 text-blue-500" />
                                    <p className="text-gray-900">uniteddulles@gmail.com</p>
                                </div>
                                <p className="text-gray-900 mb-8">EIN: 84-5131804
                                </p>
                            </div>
                            <div className='w-[320px] overflow-hidden md:w-[480px]'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.0595680738093!2d-77.3972914!3d38.968307800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6380a41a3a9a7%3A0xf0ae7869510dbd61!2s1039%20Sterling%20Rd%20Suite%20204%2C%20Herndon%2C%20VA%2020170%2C%20USA!5e0!3m2!1sen!2sbd!4v1734069325749!5m2!1sen!2sbd" width="350" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className='bg-white md:bg-transparent py-4 md:py-0 px-4 md:px-0 rounded-md'>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                                        Name <span className='text-red-600'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none f focus:ring-[#13679f] focus:border-[#13679f] focus:border-transparent"
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                                        Email <span className='text-red-600'>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none f focus:ring-[#13679f] focus:border-[#13679f] focus:border-transparent"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        {...register("phone", {
                                            pattern: {
                                                value: /^[0-9+-]+$/,
                                                message: "Invalid phone number"
                                            }
                                        })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none f focus:ring-[#13679f] focus:border-[#13679f] focus:border-transparent"
                                    />
                                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                                        Message <span className='text-red-600'>*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        {...register("message", { required: "Message is required" })}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none f focus:ring-[#13679f] focus:border-[#13679f] focus:border-transparent"
                                    />
                                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#14649b] text-gray-100 py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6 flex justify-center items-center gap-2"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


