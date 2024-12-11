
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const images = [
    "/images/banner/mobile/2.jpg",
    "/images/banner/mobile/1.jpg",

];

const HeroSectionForMobile = () => {
    return (
        <div className="relative swiper-container container mx-auto md:mt-6 block md:hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
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
                        <div className="relative z-0">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="object-cover w-full"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Text Section with z-index and pointer-events-none */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-100 px-4 z-10 pointer-events-none bg-black bg-opacity-50">
                <h2 className="text-2xl md:text-5xl font-bold mb-2">
                    Welcome to DULLES UNITED ASSOCIATION
                </h2>
                <h1 className="text-xl md:text-2xl font-light md:font-semibold mb-6">
                    Non-Profit Organization serving in Northern Virginia
                </h1>
            </div>

            {/* Pagination and Navigation Controls with pointer-events-auto */}
            <div className="swiper-pagination pagination-container z-10 pointer-events-auto">
                <div className="pagination-dots flex space-x-2"></div>
            </div>
        </div>
    );
}

export default HeroSectionForMobile;