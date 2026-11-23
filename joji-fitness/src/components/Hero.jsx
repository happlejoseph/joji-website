

import heroImage from "../assets/personal-trainer-kadavanthra.webp";
import SocialLinks from "./SocialLinks";
import { socials } from "../data/socials";

const Hero = () => {
  return (
    <section className="relative flex min-h-svh items-center bg-black text-white">
      <img
        src={heroImage}
        alt="Man doing a dumbbell curl on a gym bench, personal training with Joji Fitness in Kadavanthra, Kochi"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="hero-content relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:px-8 md:py-20">
        <p className="mb-4 text-xs font-medium uppercase tracking-[3px] text-lime-400 md:text-sm md:tracking-[4px]">
          Joji Fitness | Kadavanthra, Kochi, Kerala
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          Personal Trainer in{" "}
          <span className="text-lime-400">Kadavanthra</span>, Kochi
        </h1>

        <p className="mt-4 max-w-3xl text-xl font-medium text-gray-200 md:text-3xl">
          Build Strength ▪ Transform Yourself ▪ Become Your Best
        </p>

        <p className="mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
          One-to-one personal training in Kadavanthra, Kochi for strength,
          weight loss and muscle gain. Every program includes nutrition
          guidance and regular check-ins, and is built around your lifestyle,
          your schedule and your goals, whether you are a complete beginner or
          already training.
        </p>

        <a
          href={socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded bg-white px-8 py-4 font-semibold text-black transition hover:bg-lime-400"
        >
          Book your first session
        </a>

        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;