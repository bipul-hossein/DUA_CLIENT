import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    "/banner/1.jpg",
    "/banner/2.jpg",
    "/banner/3.jpg",
    "/banner/4.jpg",
];

export default function HeroSection() {
    return (
        <div className="relative swiper-container container mx-auto">
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
                speed={3000}
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
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
                <h2 className="text-2xl md:text-5xl font-bold mb-2">
                    Welcome to DULLES UNITED ASSOCIATION
                </h2>
                <h1 className="text-xl md:text-2xl font-light md:font-semibold mb-6">
                    Non-Profit Organization serving in Northern Virginia
                </h1>
                <p className='text-lg hidden md:inline-flex'>
                    Dulles United Association is a 501(c3) non-profit organization serving in Northern Virginia to promote and provide social & sports opportunities to individuals. Our vision is to support our community by organizing various sports and social events. We are committed to ensure that each of our member are treated with equal opportunity regardless of their ethnicity, religion and gender.
                </p>
            </div>

            <div className="swiper-pagination pagination-container">
                <div className="pagination-dots flex space-x-2"></div>
            </div>
        </div>
    );
}
