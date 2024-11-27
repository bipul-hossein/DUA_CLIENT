import { Megaphone, DollarSign, User } from 'lucide-react'

const cards = [
  {
    icon: Megaphone,
    title: "VOLUNTEERING",
    description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
    bgColor: "bg-zinc-800"
  },
  {
    icon: DollarSign,
    title: "DONATING",
    description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
    bgColor: "bg-yellow-400"
  },
  {
    icon: User,
    title: "SUPPORTING",
    description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
    bgColor: "bg-zinc-800"
  }
]

export default function GetInvolved() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-6 md:mb-12">
        <h2 className="text-3xl font-bold mb-2 md:mb-4">GET INVOLVED</h2>
        <p className="max-w-2xl mx-auto">
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
          making this the first true generator on the Internet.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon
          const textColor = card.bgColor === "bg-yellow-400" ? "text-zinc-800" : "text-white"
          return (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg overflow-hidden transition-transform hover:scale-105"
              style={{ backgroundImage: 'radial-gradient(ellipse closest-corner at center, white 30%, #9fbed1 100%)' }}
            >
              <div className="p-4 md:p-8 flex flex-col items-center w-full">
                <Icon className="w-12 h-12 mb-4 text-[#0383d0]" />
                <h3 className="text-base md:text-xl font-bold mb-4 text-[#0383d0]">{card.title}</h3>
              </div>

              <div className={`${card.bgColor} p-6 w-full mt-auto hidden md:inline-flex`}>
                <p className={`text-center ${textColor}`}>
                  {card.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

