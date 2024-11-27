import React from 'react';

const SoccerActivities = () => {
    return (
        <section
            className="mt-12 mb-12 rounded-lg"
            style={{ backgroundImage: 'radial-gradient(ellipse closest-corner at center, white 30%, #9fbed1 100%)' }}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    {/* image Side */}
                    <div className="cursor-pointer">
                        <img
                            src="/soccer.jpg"
                            alt="Children's activities"
                            className="w-full h-full object-cover rounded-l-lg"
                        />

                    </div>
                </div>

                {/* Content Side */}
                <div className="px-4 md:px-8 py-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0383d0]">
                        weekly
                        <span className="block"> soccer practice</span>
                    </h2>

                    <div className="space-y-4 text-gray-600">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                            eiusmod tempor incididunt ut labore dolore magna aliqua. enim
                            minim veniam, quis nostrud exercitation.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                            eiusmod tempor incididunt ut labore dolore magna aliqua. enim
                            minim veniam, quis nostrud exercitation. tempor incididunt ut
                            labore dolore magna aliqua. enim minim veniam, quis nostrud
                            exercitation.
                        </p>
                    </div>

                    <button className="mt-8 px-8 py-3 text-white rounded-md bg-[#14649b] hover:bg-[#092f48] transition-colors">
                        See More
                    </button>
                </div>
            </div>
        </section >
    );
};

export default SoccerActivities;
