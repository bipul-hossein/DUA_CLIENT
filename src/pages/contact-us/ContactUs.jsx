import { AlertCircle } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactUs() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log("Form submitted successfully:", data);
        setIsSubmitted(true);
    };

    return (
        <div
            className="min-h-screen"
            style={{ backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="mx-auto py-12 md:py-20">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg py-6 px-2 md:px-8">
                    <div className="w-full md:w-[50%] mx-auto pb-20 pt-10">
                        {isSubmitted ? (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                                <p className="font-bold">Success!</p>
                                <p>Your message has been sent successfully.</p>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-100">Contact Us</h3>

                                </div>
                                <div className="space-y-4">
                                    <div className="">
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Name"
                                            {...register('fullName', { required: 'Full Name is required' })}
                                            className="pl-4 flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                        />

                                        {errors.fullName && (
                                            <div className="mt-1 flex items-center text-sm text-red-500">
                                                <AlertCircle className="h-4 w-4 mr-1" />
                                                {errors.fullName.message}
                                            </div>
                                        )}
                                    </div>
                                    <div className="">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'Invalid email address'
                                                }
                                            })}
                                            className="pl-4 flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                        />

                                        {errors.email && (
                                            <div className="mt-1 flex items-center text-sm text-red-500">
                                                <AlertCircle className="h-4 w-4 mr-1" />
                                                {errors.email.message}
                                            </div>
                                        )}
                                    </div>
                                    <div className="">
                                        <textarea
                                            name="comments"
                                            rows={5}
                                            placeholder="Message"
                                            {...register('comments', { required: 'Comments are required' })}
                                            className="pl-4 flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                                        />
                                        {errors.comments && (
                                            <div className="mt-1 flex items-center text-sm text-red-500">
                                                <AlertCircle className="h-4 w-4 mr-1" />
                                                {errors.comments.message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-[#14649b] text-gray-100 py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6">Submit</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
