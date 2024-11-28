import { useState } from 'react'
import { AlertCircle } from 'lucide-react'



export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        gender: '',
        email: ''
    })

    const [errors, setErrors] = useState({})
    const [isDraftSaved, setIsDraftSaved] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validate form
        const newErrors = {}
        if (!formData.firstName) newErrors.firstName = 'First Name is required'
        if (!formData.lastName) newErrors.lastName = 'Last Name is required'
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
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '',
            email: ''
        })
        setErrors({})
    }

    return (
        <div
            className="min-h-screen"
        >
            <div className="max-w-2xl mx-auto py-12 md:py-20">
                <div className="rounded-lg"
                    style={{ backgroundImage: 'radial-gradient(ellipse closest-corner at center, white 30%, #9fbed1 100%)' }}
                >
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-medium text-black text-center py-3 md:py-6">  Registration Form</h2>

                        {/* Form Fields */}
                        <div className="px-6 py-4 space-y-6">
                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                    className="flex-grow border border-black focus:ring-blue-500 focus:border-blue-500 p-2 w-full text-black"
                                />
                                {errors.firstName && (
                                    <div className="mt-1 flex items-center text-sm text-red-500">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        {errors.firstName}
                                    </div>
                                )}
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                    className="flex-grow border border-black focus:ring-blue-500 focus:border-blue-500 p-2 w-full text-black"
                                />
                                {errors.lastName && (
                                    <div className="mt-1 flex items-center text-sm text-red-500">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        {errors.lastName}
                                    </div>
                                )}
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    className="flex-grow border border-black focus:ring-blue-500 focus:border-blue-500 p-2 w-full text-black"
                                />
                                {errors.address && (
                                    <div className="mt-1 flex items-center text-sm text-red-500">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        {errors.address}
                                    </div>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                    className="flex-grow border border-black focus:ring-blue-500 focus:border-blue-500 p-2 w-full text-black"
                                />
                                {errors.phoneNumber && (
                                    <div className="mt-1 flex items-center text-sm text-red-500">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        {errors.phoneNumber}
                                    </div>
                                )}
                            </div>

                            {/* Gender */}
                            <div>
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
                                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
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
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="flex-grow border border-black focus:ring-blue-500 focus:border-blue-500 p-2 w-full text-black"
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
                        <div className="px-6 py-4 flex justify-between md:pb-8">
                            <div className="flex space-x-2">

                                <button
                                    type="submit"
                                    className="px-8 py-3 text-white rounded-md bg-[#14649b] hover:bg-[#092f48] transition-transform"
                                >
                                    Submit
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

