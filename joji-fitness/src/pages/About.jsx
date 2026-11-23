

import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/personal-fitness-training-banner.webp";
import portraitImage from "../assets/joji-personal-trainer-kadavanthra.webp";
import useCountUp from "../hooks/useCountUp";
import usePageMeta from "../hooks/usePageMeta";
import { qualifications } from "../data/qualifications";
import Cta from "../components/Cta";

const helpAreas = [
  {
    title: "Strength training",
    text: "Structured strength programs that build muscle, power and confidence, whether you are starting out or already lifting.",
  },
  {
    title: "Body composition and weight loss",
    text: "Training and habits that help you lose fat and gain lean muscle in a way you can sustain.",
  },
  {
    title: "Functional and group training",
    text: "Movement-based sessions that improve mobility, balance and everyday fitness, alone or with friends.",
  },
  {
    title: "Nutrition and supplement guidance",
    text: "Clear, practical advice on eating and supplements that fits your goals and your lifestyle.",
  },
];

const Lines = () => (
  <div className="pointer-events-none absolute inset-0 grid grid-cols-4">
    <div className="border-l border-gray-300/25"></div>
    <div className="border-l border-gray-300/25"></div>
    <div className="border-l border-gray-300/25"></div>
    <div className="border-l border-r border-gray-300/25"></div>
  </div>
);

const Label = ({ children }) => (
  <div className="mb-6 flex items-center gap-3">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-black">
      <Plus size={18} />
    </div>
    <span className="text-sm font-medium uppercase tracking-[3px] text-gray-600">
      {children}
    </span>
  </div>
);

const InfoCard = ({ value, suffix = "", title, text }) => {
  const [ref, count] = useCountUp(value, 2000);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-end rounded-2xl bg-white p-6 pt-12"
    >
      <p className="text-6xl font-medium tracking-tight text-lime-600">
        {count}
        {suffix}
      </p>
      <h3 className="mt-3 text-xl font-medium">{title}</h3>
      <p className="mt-1 text-gray-500">{text}</p>
    </div>
  );
};

const About = () => {
  usePageMeta(
    "About Joji | Personal Trainer in Kadavanthra, Kochi",
    "Meet Joji, a REPS Level 3 personal trainer in Kadavanthra, Kochi with 5+ years of coaching experience in strength training, body composition and nutrition guidance."
  );

  return (
    <>
      {/* Page hero */}
      <section className="relative flex h-[60svh] min-h-[420px] items-end bg-black text-white">
        <img
          src={heroImage}
          alt="Personal fitness training session with Joji Fitness in Kadavanthra, Kochi"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 md:px-8">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            About Joji, personal trainer in{" "}
            <span className="text-lime-400">Kadavanthra</span>, Kochi
          </h1>
        </div>
      </section>

      {/* Intro and portrait */}
      <section className="bg-[#F5F1E8] px-6 py-24 text-black md:px-8">
        <div className="relative mx-auto max-w-7xl">
          <Lines />

          <div className="relative z-10">
            <Label>About me</Label>

            <h2 className="max-w-5xl text-3xl font-bold leading-tight md:text-5xl">
              Joji helps individuals in Kadavanthra, Kochi build strength,
              stay consistent and achieve real, lasting results through a
              structured and personalized approach.
            </h2>

            <div className="mt-12 grid gap-2 md:grid-cols-[1.1fr_1fr]">
              <img
                src={portraitImage}
                alt="Joji, personal trainer in Kadavanthra, Kochi"
                loading="lazy"
                className="h-full min-h-[380px] w-full rounded-2xl object-cover"
              />

              <div className="flex flex-col gap-2">
                <div className="rounded-2xl bg-white p-6">
                  <h3 className="text-xl font-medium">Built for real results</h3>
                  <p className="mt-3 leading-relaxed text-gray-500">
                    My coaching combines structured strength training, smart
                    nutrition guidance and accountability to help clients in
                    Kadavanthra, Kochi build strength and stay consistent over
                    time. I have over five years of experience helping people
                    improve their fitness and overall well-being, and I train
                    every client with a plan built around their goals and
                    routine.
                  </p>
                </div>

                <div className="grid flex-1 gap-2 sm:grid-cols-2">
                  <InfoCard
                    value={5}
                    suffix="+"
                    title="Years of coaching"
                    text="Hands-on experience coaching clients in strength, fitness and body composition."
                  />
                  <InfoCard
                    value={3}
                    title="Languages"
                    text="Coaching in Malayalam, English and Tamil."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-[#F5F1E8] px-6 pb-24 text-black md:px-8">
        <div className="relative mx-auto max-w-7xl">
          <Lines />

          <div className="relative z-10">
            <Label>Qualifications</Label>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
                Qualifications and experience
              </h2>

              <p className="max-w-md leading-relaxed text-gray-500 md:text-right">
                Trained through Leaders Fitness Academy, with more than five
                years of coaching experience in gyms across Kerala.
              </p>
            </div>

            <ul className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {qualifications.map((item) => (
                <li
                  key={item.title}
                  className="flex min-h-[200px] flex-col justify-between rounded-2xl bg-white p-6"
                >
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <div>
                    <p className="text-gray-500">{item.issuer}</p>
                    <p className="mt-1 text-sm font-semibold text-lime-600">
                      {item.year}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What I help with */}
      <section className="bg-[#F5F1E8] px-6 pb-24 text-black md:px-8">
        <div className="relative mx-auto max-w-7xl">
          <Lines />

          <div className="relative z-10">
            <Label>How I help</Label>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
                What I help with in Kadavanthra, Kochi
              </h2>

              <Link
                to="/#service"
                className="font-medium underline underline-offset-4 transition hover:text-lime-600"
              >
                See all services
              </Link>
            </div>

            <ul className="mt-12 grid gap-2 md:grid-cols-2">
              {helpAreas.map((area) => (
                <li key={area.title} className="rounded-2xl bg-white p-6">
                  <h3 className="text-xl font-medium">{area.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-500">
                    {area.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* Add nearby areas here only if Joji really trains clients there */}
            <p className="mt-6 max-w-2xl text-gray-500">
              Based in Kadavanthra, Kochi, Kerala. Message Joji on WhatsApp to
              talk through your goals and find the right program.
            </p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default About;