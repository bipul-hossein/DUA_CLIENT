import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    "/public/banner/1.png",
    "/public/banner/2.png",
    "/public/banner/3.png",
];

export default function HeroSection() {
    return (
        <div className="swiper-container container mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                speed={3000} // Correctly assigned speed property
                loop={true}
                className='swiper'
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative image-container">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="object-cover w-full h-full"

                            />
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                                <h2 className="text-2xl md:text-3xl font-light mb-4">
                                    Helping Them Today
                                    <span className="block w-32 h-1 bg-orange-500 mx-auto mt-2"></span>
                                </h2>
                                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                                    Uplifting Livelihoods
                                </h1>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-pagination pagination-container">
                <div className="pagination-dots flex space-x-2"></div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    );
}
