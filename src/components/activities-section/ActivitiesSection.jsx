import { Play } from 'lucide-react'

export default function ActivitiesSection() {
    return (
        <section className='rounded-lg'
            style={{ backgroundImage: 'radial-gradient(ellipse closest-corner at center, white 30%, #9fbed1 100%)' }}
        >
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Video Thumbnail Side */}
                    <div className="relative group cursor-pointer">
                        <div className="relative aspect-video overflow-hidden rounded-lg">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <img
                                src="/"
                                alt="Children's activities"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20  text-white bg-[#14649b] hover:bg-[#092f48] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-white ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="px-4 md:px-8 py-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0383d0]">
                            Watch Our Latest
                            <span className="block">Activities</span>
                        </h2>

                        <div className="space-y-4 text-black">
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
                        <button className="mt-8 px-8 py-3 text-white rounded-md bg-[#14649b] hover:bg-[#092f48] transition-transform">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

