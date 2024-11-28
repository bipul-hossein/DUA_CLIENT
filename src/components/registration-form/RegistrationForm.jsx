import { useState } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        gender: '',
        email: ''
    })

    const [errors, setErrors] = useState({})
    const [isDraftSaved, setIsDraftSaved] = useState(true)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validate form
        const newErrors = {}
        if (!formData.fullName) newErrors.fullName = 'Full Name is required'
        if (!formData.address) newErrors.address = 'Address is required'
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required'
        if (!formData.gender) newErrors.gender = 'Gender is required'
        if (!formData.email) newErrors.email = 'Email is required'

        // If errors are found, set the errors state and stop submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        // Handle form submission
        console.log('Form submitted:', formData)
        setIsSubmitted(true)

        // Reset form after submission
        setTimeout(() => {
            handleClearForm()
            setIsSubmitted(false)
        }, 3000)
    }

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        setErrors(prev => ({ ...prev, [field]: '' }))
        setIsDraftSaved(false)
        // Simulate auto-save
        setTimeout(() => setIsDraftSaved(true), 1000)
    }

    const handleClearForm = () => {
        setFormData({
            fullName: '',
            address: '',
            phoneNumber: '',
            gender: '',
            email: ''
        })
        setErrors({})
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl w-full p-6 md:py-12">
                <div className="rounded-lg bg-gradient-to-tr from-white via-blue-100 to-[#9fbed1] p-8">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Registration Form</h2>

                        {isSubmitted && (
                            <div className="flex items-center justify-center text-green-500">
                                <CheckCircle className="h-6 w-6 mr-2 animate-bounce" />
                                <p className="font-medium text-lg">Form Submitted Successfully!</p>
                            </div>
                        )}

                        {/* Form Fields */}
                        <div className="space-y-6">
                            {/* Full Name */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.fullName}
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

                            {/* Address */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700">
                                    Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.address}
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

                            {/* Phone Number */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phoneNumber}
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

                            {/* Gender */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700">Gender</label>
                                <div className="mt-2 space-y-2">
                                    {['Male', 'Female', 'Prefer not to say', 'Other'].map((option) => (
                                        <div key={option} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value={option}
                                                checked={formData.gender === option}
                                                onChange={(e) => handleInputChange('gender', e.target.value)}
                                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 transition-transform transform hover:scale-105"
                                            />
                                            <label className="ml-2 block text-sm text-gray-700">{option}</label>
                                        </div>
                                    ))}
                                </div>
                                {errors.gender && (
                                    <div className="mt-1 flex items-center text-sm text-red-500">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        {errors.gender}
                                    </div>
                                )}
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
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
                        </div>

                        {/* Form Actions */}
                        <div className="pt-6 flex justify-between">
                            <button
                                type="button"
                                onClick={handleClearForm}
                                className="px-6 py-3 text-gray-700 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 transition-transform transform hover:scale-105"
                            >
                                Clear
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-3 text-white bg-[#14649b] rounded-md shadow-sm hover:bg-[#092f48] transition-transform transform hover:scale-105"
                            >
                                Next
                            </button>
                        </div>

                        {/* Auto-Save Indicator */}
                        <div className="pt-4 text-sm text-gray-500">
                            {isDraftSaved ? 'All changes saved' : 'Saving...'}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
