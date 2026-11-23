

import ctaImage from "../assets/cta-training-optimized.webp";
import { socials } from "../data/socials";

const Cta = () => {
  return (
    <section className="relative flex min-h-svh bg-black text-white">
      <img
        src={ctaImage}
        alt="Client training hard with a personal trainer in Alappuzha"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between px-6 py-16 md:px-8 md:py-20">
        <h2 className="text-5xl font-bold uppercase leading-[0.95] sm:text-6xl md:text-8xl">
          Ready for
          <span className="block text-lime-400">real results?</span>
        </h2>

        <div>
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-white px-8 py-4 font-semibold text-black transition hover:bg-lime-400"
          >
            Book your first session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;