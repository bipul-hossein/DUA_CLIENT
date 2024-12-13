export default function AboutUs() {
    return (
        <div className="min-h-screen" style={{ backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl mx-auto md:py-12">
                <div className="bg-gray-100 backdrop-blur-sm rounded-lg py-6 ">
                    <div className=" text-gray-900 py-6 px-6">
                        <h1 className="text-3xl font-bold">About Us</h1>
                        <p className="mt-2 text-xl">Building Community, Inspiring Excellence</p>
                    </div>

                    <div className="p-6 space-y-6">
                        <section>
                            <p className="text-gray-900 leading-relaxed">
                                At Dulles United Association, we believe in the power of community. Based in Northern Virginia, our nonprofit organization is dedicated to fostering unity, empowering youth, and creating opportunities for growth through education, support programs, cultural engagement, and sports activities.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
                            <p className="text-gray-900 leading-relaxed">
                                Our mission is to enrich lives and strengthen the community by promoting education, providing essential resources, encouraging active lifestyles, and celebrating diversity. We are committed to helping individuals of all ages and backgrounds realize their potential and contribute to a vibrant, inclusive community.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Values</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-900">
                                <li><span className="font-semibold">Integrity:</span> We prioritize transparency, accountability, and trust in everything we do.</li>
                                <li><span className="font-semibold">Community:</span> We thrive on collaboration and partnership, bringing people together for a common purpose.</li>
                                <li><span className="font-semibold">Empowerment:</span> We inspire individuals to achieve their goals and make a positive impact.</li>
                                <li><span className="font-semibold">Inclusivity:</span> We celebrate diversity, ensuring everyone has a place to belong and succeed.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">What We Do</h2>
                            <p className="text-gray-900 mb-3">
                                At Dulles United Association, we focus on creating programs and events that address community needs while fostering engagement and connection.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-900">
                                <li><span className="font-semibold">Educational Opportunities:</span> Offering workshops, tutoring, and resources to help students and adults succeed academically and professionally.</li>
                                <li><span className="font-semibold">Community Support:</span> Organizing food drives, clothing donations, and financial assistance programs to support families in need.</li>
                                <li><span className="font-semibold">Sports & Recreation:</span>
                                    <ul className="list-circle pl-5 mt-2 space-y-2">
                                        <li><span className="font-semibold">Annual Tournaments:</span> Our badminton and soccer tournaments are highlights of the year, bringing the community together for fun, fitness, and friendly competition.</li>
                                        <li><span className="font-semibold">Youth Soccer Programs:</span> We host weekly soccer practice sessions to engage and inspire local youth, helping them build teamwork, confidence, and a passion for the game.</li>
                                    </ul>
                                </li>
                                <li><span className="font-semibold">Cultural & Social Events:</span> Hosting celebrations and outreach activities that unite our diverse community and promote understanding.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Impact</h2>
                            <p className="text-gray-900 mb-3">In the past year, we have:</p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-900">
                                <li>Supported over 200 students with educational resources and mentoring.</li>
                                <li>Held 20+ weekly youth soccer practices, benefiting more than 100 young athletes.</li>
                                <li>Organized community-favorite badminton and soccer tournaments with widespread participation.</li>
                                <li>Provided essential aid, including 1,000+ meals, to families in need.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Get Involved</h2>
                            <p className="text-gray-900 leading-relaxed">
                                Be a part of our mission to empower, inspire, and unite. Whether as a volunteer, donor, or participant, your support helps us make a meaningful impact.
                            </p>
                            <p className="text-gray-900 leading-relaxed mt-3">
                                Join us today to help us build a stronger, healthier, and more connected Northern Virginia. Together, we can create opportunities, celebrate diversity, and make lasting change.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';


