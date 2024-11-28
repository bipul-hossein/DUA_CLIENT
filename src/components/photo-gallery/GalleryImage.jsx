import { useState } from 'react'

export default function GalleryImage({ src, alt }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
            >
                <img
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="relative w-full max-w-4xl max-h-[90vh]">
                        <img
                            src={src}
                            alt={alt}
                            width={1200}
                            height={900}
                            className="w-full h-auto object-contain"
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300"
                        >
                            <span className="sr-only">Close</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

