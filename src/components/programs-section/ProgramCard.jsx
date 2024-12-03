import { Heart } from 'lucide-react'




export default function ProgramCard({ title, description, imageUrl, onDonate }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48">
                <img
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

                <button
                    onClick={onDonate}
                    className="inline-flex items-center px-6 py-2 bg-orange-500 text-gray-100 rounded-full hover:bg-orange-600 transition-colors"
                >
                    <Heart className="w-4 h-4 mr-2" />
                    Donate
                </button>
            </div>
        </div>
    )
}

