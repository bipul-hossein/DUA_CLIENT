const activities = [
    {
        title: "DMV Carrom Tournament 2022",
        date: "March 27th",
        description: "Dulles United Association hosted the DMV Carrom Tournament, bringing together players from the community to compete in this traditional game. All proceeds went to the BDesh Foundation, supporting their efforts in Bangladesh.",
    },
    {
        title: "Community Iftar",
        date: "Every year",
        description: "Dulles United Association organized a Community Iftar event in Sugarland, MD, fostering unity and cultural understanding among participants during Ramadan.",
    },
    {
        title: "Dulles United DMV Soccer Tournament",
        date: "Annual",
        description: "The annual soccer tournament is a highlight of our activities, featuring teams from the DMV area competing in a friendly yet competitive environment, promoting sportsmanship and community.",
    },
];

export default function ActivitiesSection() {
    return (
        <section className='md:rounded-lg px-2 md:px-0'
            style={{
                backgroundImage: 'radial-gradient(ellipse closest-corner at center, white 30%, #9fbed1 100%)',
                minHeight: '500px', // Change fixed height to minHeight
            }}
        >
            <div className="container mx-auto pt-3 md:pt-0 pb-8 md:pb-0">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative group cursor-pointer">
                        <div className="relative overflow-hidden rounded-lg">
                            <div className="absolute inset-0 transition-colors" />
                            <div className="cursor-pointer">
                                <img
                                    src="/images/group_photo.jpg"
                                    alt="Children's activities"
                                    className="w-full object-cover md:rounded-r-lg"
                                    style={{ maxHeight: '500px' }} // Ensure the image doesn’t exceed 500px
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:pr-8 md:py-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0383d0]">
                            Our Latest Activities
                        </h2>
                        <div className="space-y-8 overflow-auto">
                            {activities.map((activity, index) => (
                                <div key={index} className="text-gray-600">
                                    <strong>{activity.title}:</strong> {activity.date}, {activity.description}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
