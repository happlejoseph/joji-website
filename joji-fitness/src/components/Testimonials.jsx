

import { Plus } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { business } from "../data/socials";

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialCard = ({ name, role, location, result, quote, image }) => {
  return (
    <figure className="flex min-h-[340px] flex-col justify-between rounded-2xl bg-white p-6">
      <div>
        {/* Avatar */}
        {image ? (
          <img
            src={image}
            alt={`${name}, Joji Fitness client in ${location}`}
            width="48"
            height="48"
            loading="lazy"
            className="h-12 w-12 rounded object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded bg-gray-200 text-sm font-semibold text-gray-600"
          >
            {getInitials(name)}
          </div>
        )}

        {/* Result headline */}
        {result && (
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-lime-600">
            {result}
          </p>
        )}

        {/* Quote */}
        <blockquote
          className={`max-w-sm text-xl font-medium leading-snug ${
            result ? "mt-3" : "mt-10"
          }`}
        >
          <p>“{quote}”</p>
        </blockquote>
      </div>

      {/* Name, role and place */}
      <figcaption className="mt-8">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">
          {role}
          {location && `, ${location}`}
        </p>
      </figcaption>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#F5F1E8] px-8 py-24 text-black"
    >
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
              Client reviews
            </span>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
              Personal training results in Kadavanthra, Kochi
            </h2>

            <p className="max-w-md leading-relaxed text-gray-500 md:text-right">
              Real feedback from {business.name} clients who followed the
              program and saw measurable results.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>

          {/* Link to Google reviews (shows only once the link is set) */}
          {business.googleReviews && (
            <a
              href={business.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block font-medium underline underline-offset-4 transition hover:text-lime-600"
            >
              Read more reviews on Google
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;