import ProgramCard from "./ProgramCard"

const programs = [
    {
        title: "Uplift Wash",
        description: "According to UNICEF 2.2 billion people around the World still lack access to clean drinking",
        imageUrl: "/placeholder.svg?height=200&width=300"
    },
    {
        title: "Uplift Home",
        description: "Millions of people in South Asia like Bangladesh, Pakistan, India, etc. impacted by one",
        imageUrl: "/placeholder.svg?height=200&width=300"
    },
    {
        title: "Uplifting Livelihoods",
        description: "Uplift You was founded on the foundation of sustainable Livelihoods. Our main mission is to",
        imageUrl: "/placeholder.svg?height=200&width=300"
    },
    {
        title: "Uplifting Orphans And Disabled",
        description: "Every child entitles to basic human rights. Uplifting Orphans",
        imageUrl: "/placeholder.svg?height=200&width=300"
    }
]

export default function ProgramsSection() {
    const handleDonate = () => {
        // Handle donation logic
        console.log("Donate clicked")
    }

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-medium mb-2">Donate Now</p>
                    <h2 className="text-4xl font-bold">Our Programs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, index) => (
                        <ProgramCard
                            key={index}
                            {...program}
                            onDonate={handleDonate}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

