import { Quote } from 'lucide-react'




export default function OpinionCard({ text, avatarUrl, isActive = false }) {
    return (
        <div className={`bg-gray-100 rounded-lg p-8 shadow-lg relative transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}`}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-orange-400 rounded-full p-3">
                    <Quote className="w-5 h-5 text-gray-100" />
                </div>
            </div>

            <div className="mt-6 mb-8">
                <p className="text-center text-gray-700">
                    {text}
                </p>
            </div>

            <div className="flex justify-center">
                <div className="w-12 h-12 relative">
                    <img
                        src={avatarUrl}
                        alt="Avatar"
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

