

import { Plus } from "lucide-react"

import personalImage from "../assets/personal-training-session-optimized.webp"
import groupImage from "../assets/group-training-kadavanthra-optimized.webp"
import dietImage from "../assets/nutrition-coaching-optimized.webp"

const services = [
  {
    title: "Personal Training",
    image: personalImage,
    alt: "Personal training session with Joji Fitness in Kadavanthra, Kochi",
    description:
      "Personalized online and offline personal training designed around your fitness goals, schedule and experience level. Offline sessions are available within approximately 5 km of Kadavanthra, Kochi.",
  },
  {
    title: "Group & Functional Training",
    image: groupImage,
    alt: "Group and functional training session in Kadavanthra, Kochi",
    description:
      "Group and functional training that builds strength, endurance and everyday fitness, with the motivation of training together.",
  },
  {
    title: "Nutrition & Diet Guidance",
    image: dietImage,
    alt: "Healthy meal for nutrition and diet guidance with Joji Fitness",
    description:
      "Practical nutrition and supplement guidance that supports your training and fits your lifestyle.",
  },
]

const Services = () => {
  return (
    <section
      id="service"
      className="bg-[#F5F1E8] px-6 py-24 text-black md:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Vertical Lines */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-4">
          <div className="border-l border-gray-300/25"></div>
          <div className="border-l border-gray-300/25"></div>
          <div className="border-l border-gray-300/25"></div>
          <div className="border-l border-r border-gray-300/25"></div>
        </div>

        {/* Services Content */}
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-3">
            {/* Plus Icon */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-black">
              <Plus size={18} />
            </div>
            <span className="text-sm font-medium uppercase tracking-[3px] text-gray-600">
              Services
            </span>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
              Personal training services in Kadavanthra, Kochi
            </h2>

            <p className="max-w-md leading-relaxed text-gray-600">
              Strength training, weight loss and nutrition coaching, with
              clear coaching and real results.
            </p>
          </div>

          {/* Service Cards */}
          <ul className="mt-16 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <li key={service.title} className="group min-w-0">
                {/* Image */}
                <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-3xl font-medium">{service.title}</h3>

                {/* Description */}
                <p className="mt-3 text-gray-600">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services