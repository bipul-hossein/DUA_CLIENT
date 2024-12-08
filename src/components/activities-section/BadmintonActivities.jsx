import React from 'react';

const BadmintonActivities = () => {
    return (
        <section
            className="mt-12 md:rounded-lg px-2 md:px-0"
            style={{
                backgroundImage: 'radial-gradient(ellipse closest-corner at center, white 30%, #9fbed1 100%)',
                minHeight: '400px', // Change fixed height to minHeight
            }}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 pt-3 md:pt-0">

                {/* Image Side */}
                <div className="order-1 md:order-2">
                    <div className="cursor-pointer">
                        <img
                            src="/images/badminton.jpg"
                            alt="Children's activities"
                            className="w-full h-full object-cover rounded-md md:rounded-r-lg"
                            style={{ maxHeight: '400px' }} // Ensure the image doesn’t exceed 400px
                        />
                    </div>
                </div>

                {/* Content Side */}
                <div className="order-2 md:order-1 md:px-8 py-4 overflow-auto">
                    <h2 className="text-3xl font-bold mb-6 text-[#0383d0]">
                        <span className="text-xl"> </span><br />
                        Badminton Practice
                    </h2>

                    <div className="space-y-4 text-gray-600">
                        <p>
                            South Lakes High School
                        </p>

                        <p>
                            We will resume our weekly Badminton practice in South Lakes High School Field soon!
                        </p>

                        <p>
                            Location: 11400 South Lakes Dr, Reston, VA 20191
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default BadmintonActivities;
