import React from 'react';

const Events = () => {
    const activities = [
        {
            title: "DMV Carrom Tournament 2022",
            date: "On March 27th",
            description: (
                <>
                    Dulles United Association hosted the DMV Carrom Tournament. The event was a great success, bringing together players from the community to compete in this traditional game. All proceeds from the tournament went to the BDesh Foundation, supporting their efforts to provide educational and health services in Bangladesh. Participant Team Names from DMV Area: Virginia Knight, Dulles United, Loudoun Laid Backs, Jalmorich, Lake Ridge, Dulles DMV United. Here is here fixtures scheduled:
                    <a href="https://dullesunited.neocities.org/images/gallery/Dulles%20United%20DMV%20Soccer%20Tournament%202019%20Game%20Schedule.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"> Dulles United DMV Soccer Tournament 2022 game schedule and fixtures</a>.
                </>
            ),
        },
        {
            title: "Community Iftar 2022",
            date: "On April 10th",
            description: "Dulles United Association organized a Community Iftar event in Sugarland, MD, fostering unity and cultural understanding among participants during Ramadan.",
        },
    ];

    return (
        <section className="py-16 h-screen mx-auto">
            <div className="text-center mb-6 md:mb-12">
                <h2 className="text-3xl font-bold mb-2 md:mb-4 text-white">We Organized</h2>
            </div>

            <div className="space-y-8">
                {activities.map((activity, index) => (
                    <div key={index} className="text-white">
                        <strong>{activity.title}{activity.date ? `: ${activity.date}` : ""}</strong> {activity.description}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;
