import { useState } from 'react'
import OpinionCard from './OpinionCard'


const testimonials = [
  {
    text: "Thanks to the donor of Uplift You for gifting my family with tins, muds, woods, and labor to complete my incomplete home. I was struggling in my old one bedroom home with 5 kids, I just moved to my new home.",
    avatarUrl: "/placeholder.svg?height=50&width=50"
  },
  {
    text: "Due to the lack of a dough mixer machine, I was unable to profit from my business. Thanks to the donor of Uplift You for saving my business by gifting me a dough mixer machine & delivery van. Today, I profit approximately $400 monthly.",
    avatarUrl: "/placeholder.svg?height=50&width=50"
  },
  {
    text: "Due to the lack of Car, I was paying about $500 on uber rides to travel to work. Thanks to the donor of Uplift You for helping me purchase a car. I can finally drive to work and I save about $500 on uber rides and drive my kids to doctor.",
    avatarUrl: "/placeholder.svg?height=50&width=50"
  }
]

export default function PeopleOpinionSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">Happy People</p>
          <h2 className="text-4xl font-bold">What They Say</h2>
        </div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <OpinionCard
                key={index}
                {...testimonial}
                isActive={true}
              />
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <OpinionCard
              {...testimonials[activeIndex]}
              isActive={true}
            />

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex ? 'bg-orange-400' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

