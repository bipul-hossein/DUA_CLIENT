import React from 'react';

const SoccerActivities = () => {
    return (
        <section className=" bg-gray-50 mt-12 mb-16">
            <div className="container mx-auto grid grid-cols-2">
                <div className="">
                    {/* image Side */}
                    <div className="cursor-pointer">
                        <img
                            src="/public/soccer.jpg"
                            alt="Children's activities"
                            className="w-full h-full object-cover"
                        />

                    </div>
                </div>

                {/* Content Side */}
                <div className="px-4 md:px-8 py-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
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

                    <button className="mt-8 px-8 py-3 bg-emerald-400 text-white rounded-md hover:bg-emerald-500 transition-colors">
                        show more
                    </button>
                </div>
            </div>
        </section >
    );
};

export default SoccerActivities;
