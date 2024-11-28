import { Play } from 'lucide-react'

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
    // { 
    //     title: "Weekly Soccer Practice Information", 
    //     description: "We will resume our weekly soccer practice in South Lakes High School Field soon! Location: 11400 South Lakes Dr, Reston, VA 20191" 
    // }
];



export default function ActivitiesSection() {
    return (
        <section className='rounded-lg'
            style={{ backgroundImage: 'radial-gradient(ellipse closest-corner at center, white 30%, #9fbed1 100%)' }}
        >
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div className="relative group cursor-pointer">
                        <div className="relative overflow-hidden rounded-lg">
                            <div className="absolute inset-0 transition-colors" />
                        {/* <div className="relative aspect-video overflow-hidden rounded-lg">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" /> */}
                            {/* <img
                                src="/"
                                alt="Children's activities"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20  text-white bg-[#14649b] hover:bg-[#092f48] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-white ml-1" />
                                </div>
                            </div> */}

                            <div className="cursor-pointer">
                                <img
                                    src="/group_photo.jpg"
                                    alt="Children's activities"
                                    className="w-full h-full object-cover rounded-r-lg"
                                />

                            </div>
                            
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="pr-4 pl-2 md:pr-8 py-8">
                         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0383d0]">
                            Our Latest Activities
                        </h2>                                             
                                <div className="space-y-8">
                                {activities.map((activity, index) => (
                                    <div key={index} className="text-black">
                                    <strong>{activity.title}:</strong> {activity.date}, {activity.description}
                                    </div>
                                ))}
                                </div>
                                {/* <button className="mt-8 px-8 py-3 text-white rounded-md bg-[#14649b] hover:bg-[#092f48] transition-transform">
                                 Donate Now
                              </button>  */}
                          

                    </div>
                </div>
            </div>
        </section >
    )
}


// const activities = [
//     {
//       title: "DMV Carrom Tournament 2022",
//       date: "On March 27th",
//       description: "Dulles United Association hosted the DMV Carrom Tournament. The event was a great success, bringing together players from the community to compete in this traditional game. All proceeds from the tournament went to the BDesh Foundation, supporting their efforts to provide educational and health services in Bangladesh.",
//     },
//     {
//       title: "Community Iftar 2022",
//       date: "On April 10th",
//       description: "Dulles United Association organized a Community Iftar event in Sugarland, MD, fostering unity and cultural understanding among participants during Ramadan.",
//     },
//     {
//       title: "Dulles United DMV Soccer Tournament",
//       date: "Annual",
//       description: "The annual soccer tournament is a highlight of our activities, featuring teams from the DMV area competing in a friendly yet competitive environment, promoting sportsmanship and community.",
//     }
//   ];
  
//   export default function LatestActivities() {
//     return (
//       <section className="py-16 px-4 max-w-7xl mx-auto">
//         <div className="text-center mb-6 md:mb-12">
//           <h2 className="text-3xl font-bold mb-2 md:mb-4 text-blue-900">Latest Activities</h2>
//           <p className="max-w-2xl mx-auto text-blue-600">
//             Stay updated with the latest activities organized by Dulles United Association.
//           </p>
//         </div>
  
//         <div className="space-y-8">
//           {activities.map((activity, index) => (
//             <div key={index} className="text-blue-700">
//               <strong>{activity.title}:</strong> {activity.date}, {activity.description}
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  