import GalleryImage from "./GalleryImage"

const images = [
    {
        src: '/photo-gallery/1.jpg',
        alt: 'Group photo of participants'
    },
    {
        src: '/photo-gallery/2.jpg',
        alt: 'Soccer game during sunset'
    },
    {
        src: '/photo-gallery/3.jpg',
        alt: 'Players on the field'
    },
    {
        src: '/photo-gallery/4.jpg',
        alt: 'Evening soccer practice'
    },
    {
        src: '/photo-gallery/5.jpg',
        alt: 'Players in action'
    },
    {
        src: '/photo-gallery/6.jpg',
        alt: 'Soccer field at dusk'
    },
    {
        src: '/photo-gallery/7.jpg',
        alt: 'Players practicing'
    },
    {
        src: '/photo-gallery/8.jpg',
        alt: 'Evening practice session'
    },
    {
        src: '/photo-gallery/9.jpg',
        alt: 'Soccer field activities'
    }
]

export default function PhotoGallery() {
    return (
        <div
            className="min-h-screen"
        >
            <div className="max-w-7xl mx-auto py-12 md:py-20">
                <div className="rounded-xl py-4"
                // style={{ backgroundImage: 'radial-gradient(ellipse closest-corner at center, white 30%, #9fbed1 100%)' }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <GalleryImage
                                key={index}
                                src={image.src}
                                alt={image.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

