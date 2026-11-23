

import { Plus, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import useCountUp from "../hooks/useCountUp";
import { stats } from "../data/stats";
import { credentials } from "../data/credentials";
import { socials } from "../data/socials";
import portraitImage from "../assets/joji-personal-trainer-kadavanthra.webp";

const StatCard = ({ value, suffix, label }) => {
  const [ref, count] = useCountUp(value, 2000);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-end rounded-2xl bg-white p-6 pt-16"
    >
      <p className="text-6xl font-medium tracking-tight text-lime-600 md:text-7xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-gray-500">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-[#F5F1E8] px-8 py-24 text-black">
      <div className="relative mx-auto max-w-7xl">
        {/* Vertical Lines */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-4">
          <div className="border-l border-gray-300/25"></div>
          <div className="border-l border-gray-300/25"></div>
          <div className="border-l border-gray-300/25"></div>
          <div className="border-l border-r border-gray-300/25"></div>
        </div>

        <div className="relative z-10">
          {/* Label */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-black">
              <Plus size={18} />
            </div>
            <span className="text-sm font-medium uppercase tracking-[3px] text-gray-600">
              About me
            </span>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
              Meet Joji, your personal trainer in Kadavanthra, Kochi
            </h2>
            

            <p className="max-w-md leading-relaxed text-gray-500 md:text-right">
              Strength training, smart nutrition and accountability, built
              around you for lasting results.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-2 md:grid-cols-3">
            {/* Image slot - put your own image here */}
            <div className="min-h-[420px] overflow-hidden rounded-2xl bg-gray-300 md:row-span-2">
              
                <img
                  src={portraitImage}
                  alt="Joji, personal trainer in Kadavanthra, Kochi"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
             
            </div>

            {/* Bio card */}
            <div className="flex flex-col justify-between rounded-2xl bg-white p-6 md:col-span-2 md:min-h-[300px]">
              <div>
                <Quote
                  size={28}
                  aria-hidden="true"
                  className="fill-gray-400 text-gray-400"
                />

                <p className="mt-6 max-w-xl text-xl font-medium leading-snug">
                  I’m Joji, a REPS Level 3 personal trainer in Kadavanthra,
                  Kochi with over five years of coaching experience and a
                  Diploma in Personal Training. I help clients build strength,
                  improve body composition and stay consistent through clear,
                  structured programs: strength training, functional and group
                  training, and supplement guidance, built around your routine,
                  not against it.
                </p>

                {/* Credentials */}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {credentials.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-lime-100 px-3 py-1 text-sm font-medium text-lime-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/about"
                  className="mt-4 inline-block font-medium underline underline-offset-4 transition hover:text-lime-600"
                >
                  More about Joji
                </Link>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <p className="font-medium">Joji</p>
                  <p className="text-sm text-gray-500">
                    Personal Trainer, Kadavanthra, Kochi
                  </p>
                </div>

                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-black px-5 py-3 font-semibold text-white transition hover:bg-lime-400 hover:text-black"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-2 sm:grid-cols-3 md:col-span-2">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;