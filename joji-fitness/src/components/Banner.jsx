

import { useEffect, useRef, useState } from "react";
import bannerImage from "../assets/achieving-success-together-banner-optimized.webp";
const Banner = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const words = "Achieving success together".split(" ");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // reveal only once
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-screen items-center justify-center bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text that takes its colour from the image behind it */}
      <h2 className="relative z-10 flex max-w-5xl flex-wrap justify-center gap-x-5 px-8 text-center text-5xl font-medium text-white mix-blend-overlay md:text-7xl">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block [-webkit-text-stroke:2px_white] transition duration-1000 ease-out ${
              visible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-6 opacity-0 blur-sm"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {word}
          </span>
        ))}
      </h2>
    </section>
  );
};

export default Banner;