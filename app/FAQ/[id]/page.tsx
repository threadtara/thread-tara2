"use client";

import { StdioNull } from "node:child_process";
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What types of fabrics do you offer?",
    answer:
      "We offer a wide range of premium fabrics including brocade, organza, silk, georgette, embroidered, sequence, mirror work, and many more. Our collection is updated regularly to bring you the latest designs.",
  },
  {
    question: "Where is your store located?",
    answer:
      "We are located at A-20, Lajpat Nagar Part-2, opposite Lajpat Nagar Metro Station, Gate No. 2, New Delhi – 110024. You can easily reach us by metro or road.",
  },
  {
    question: "What are your store timings?",
    answer:
      "Our store is open Monday to Saturday from 10:00 AM to 8:00 PM and Sunday from 11:00 AM to 6:00 PM. We welcome walk-ins anytime during working hours.",
  },
  {
    question: "Can I contact you before visiting?",
    answer:
      "Absolutely! You can reach us on +91 8750503536 or +91 9999056556. You can also WhatsApp us to enquire about specific fabrics, availability, or pricing before visiting.",
  },
  {
    question: "Do you sell fabrics in small quantities?",
    answer:
      "Yes, we sell fabrics by the metre so you can buy exactly as much as you need — whether it's for a single outfit or a bulk designer order.",
  },
  {
    question: "Is your store suitable for bridal shopping?",
    answer:
      "Definitely! We are a trusted destination for brides and bridal designers. Our collection includes exclusive bridal fabrics like heavy embroidery, mirror work, sequence, and brocade — perfect for lehengas, sarees, and suits.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) {
      setHeight(isOpen ? answerRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-t border-neutral-200 transition-colors duration-200 hover:border-neutral-300">
      <button
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        className="group flex w-full items-center gap-4 py-5 text-left"
      >
        {/* + icon that rotates to x when open */}
        <span className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>

        <span
          style={{ transition: "color 0.2s ease" }}
          className={`text-base font-medium md:text-lg ${
            isOpen
              ? "text-blue-600"
              : "text-neutral-800 group-hover:text-blue-500"
          }`}
        >
          {faq.question}
        </span>
      </button>

      {/* Smooth height animation */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div ref={answerRef} className="pb-5 pl-10 pr-2">
          <p className="text-sm leading-relaxed text-neutral-500 md:text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">

          {/* Left — Heading */}
          <div className="lg:w-[38%] lg:shrink-0">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-neutral-800 md:text-5xl lg:text-6xl">
              Frequently
              <br />
              asked
              <br />
              questions
            </h2>
            <p className="mt-4 text-sm text-neutral-400 md:text-base">
              {"Can't find your answer? Call us at "}
              <a
                href="tel:+918750503536"
                className="text-blue-500 underline underline-offset-2 transition-colors hover:text-blue-700"
              >
                +91 8750503536
              </a>
            </p>
          </div>

          {/* Right — Accordion */}
          <div className="flex-1">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={toggle}
              />
            ))}
            <div className="border-t border-neutral-200" />
          </div>

        </div>
      </div>
    </section>
  );
}
