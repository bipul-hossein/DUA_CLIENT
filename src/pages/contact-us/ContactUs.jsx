import { AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        comments: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = (data) => {
        let formErrors = {};
        if (!data.fullName) formErrors.fullName = 'Full Name is required';
        if (!data.email) formErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(data.email)) formErrors.email = 'Email address is invalid';
        if (!data.comments) formErrors.comments = 'Comments are required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Extract form data
        const { fullName, email, comments } = e.target.elements;

        // Create an object for validation
        const data = {
            fullName: fullName.value,
            email: email.value,
            comments: comments.value
        };

        const validationErrors = validateForm(data);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setFormData(data);
            setIsSubmitted(true);
            // Simulate form submission
            console.log("Form submitted successfully:", data);
        }
    };

    return (
        <div
            className="min-h-screen"
            style={{ backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="mx-auto py-12 md:py-20">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 px-2 md:px-8">
                    <div className="w-full md:w-[50%] mx-auto pb-20 pt-10">
                        {isSubmitted ? (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                                <p className="font-bold">Success!</p>
                                <p>Your message has been sent successfully.</p>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div className="">
                                        <label className="block text-base mb-2 font-medium text-white">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                                        />
                                        {errors.fullName && (
                                            <div className="mt-1 flex items-center text-sm text-red-500">
                                                <AlertCircle className="h-4 w-4 mr-1" />
                                                {errors.fullName}
                                            </div>
                                        )}
                                    </div>
                                    <div className="">
                                        <label className="block text-base mb-2 font-medium text-white">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                                        />
                                        {errors.email && (
                                            <div className="mt-1 flex items-center text-sm text-red-500">
                                                <AlertCircle className="h-4 w-4 mr-1" />
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div className="">
                                        <label className="block text-base mb-2 font-medium text-white">
                                            Comments <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="comments"
                                            className="flex-grow border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-black"
                                        />
                                        {errors.comments && (
                                            <div className="mt-1 flex items-center text-sm text-red-500">
                                                <AlertCircle className="h-4 w-4 mr-1" />
                                                {errors.comments}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <button type="submit" className="mt-4 text-lg font-bold text-white bg-[#14649b] border border-black py-1 px-3 hover:bg-[#0062BD] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
