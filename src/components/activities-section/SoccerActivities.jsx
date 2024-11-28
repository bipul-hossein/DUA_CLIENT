import React from 'react';

const SoccerActivities = () => {
    return (
        <section
            className="mt-12 mb-12 rounded-lg"
            style={{ backgroundImage: 'radial-gradient(ellipse closest-corner at center, white 30%, #9fbed1 100%)' }}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                <div>
                    {/* Image Side */}
                    <div className="cursor-pointer">
                        <img
                            src="/soccer.jpg"
                            alt="Soccer practice"
                            className="w-full h-full object-cover rounded-l-lg"
                        />
                    </div>
                </div>

                {/* Content Side */}
                <div className="px-4 md:px-8 py-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0383d0]">
                        Weekly
                        <span className="block"> Soccer Practice Information</span>
                    </h2>

                    <div className="space-y-4 text-gray-600">
                        <p>South Lakes High School</p>
                        <p>We will resume our weekly soccer practice in South Lakes High School Field soon!</p>
                        <p>Location: 11400 South Lakes Dr, Reston, VA 20191</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoccerActivities;
