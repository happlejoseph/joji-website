

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data/faqs";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="rounded-xl bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-6 text-left text-xl font-medium"
      >
        {question}
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>

      {/* Smooth height animation */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-relaxed text-gray-500">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open at start

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F5F1E8] px-8 py-24 text-black">
      <div className="relative mx-auto max-w-7xl">
        {/* Vertical Lines */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-4">
          <div className="border-l border-gray-300/25"></div>
          <div className="border-l border-gray-300/25"></div>
          <div className="border-l border-gray-300/25"></div>
          <div className="border-l border-r border-gray-300/25"></div>
        </div>

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.8fr]">
          {/* Left: label, heading, description */}
          <div className="self-start lg:sticky lg:top-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-black">
                <Plus size={18} />
              </div>
              <span className="text-sm font-medium uppercase tracking-[3px] text-gray-600">
                FAQ
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-tight">
              Frequently asked questions
            </h2>

            <p className="mt-4 max-w-xs leading-relaxed text-gray-500">
              Everything you need to know before getting started. Clear
              answers, no confusion.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col gap-2">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.question}
                {...item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;