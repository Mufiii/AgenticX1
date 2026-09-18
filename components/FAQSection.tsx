"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/section-label";

const faqs = [
  {
    question: "What is AgenticX?",
    answer:
      "AgenticX is an intelligence platform that connects people, knowledge, AI agents, and digital systems into coordinated intelligence. It is designed to help individuals and organizations move beyond disconnected AI tools toward systems that understand context, coordinate tasks, and support action.",
  },
  {
    question: "What is an AI Digital Twin?",
    answer:
      "An AI Digital Twin is a continuously developing digital representation of an individual built from authorized information such as knowledge, experience, goals, preferences, and connected data. It provides context that AI agents can use to deliver more personalized intelligence.",
  },
  {
    question: "What is an Agentic Brain?",
    answer:
      "The Agentic Brain is the coordination layer that connects specialized AI agents, knowledge, context, and systems. Instead of relying on one general-purpose AI, it coordinates different forms of intelligence around specific goals and workflows.",
  },
  {
    question: "How is AgenticX different from traditional AI tools?",
    answer:
      "Traditional AI tools often operate as individual applications or assistants. AgenticX focuses on connecting intelligence across people, knowledge, agents, and existing systems, creating an architecture where specialized AI can work together under human direction.",
  },
  {
    question: "Is AgenticX designed to replace humans?",
    answer:
      "No. AgenticX is designed around human-directed intelligence. AI agents can assist with analysis, coordination, repetitive workflows, and approved actions while people retain oversight, authority, and control over important decisions.",
  },
  {
    question: "What can AgenticX become over time?",
    answer:
      "AgenticX is being developed toward a broader ecosystem connecting AI agents, Digital Twins, knowledge, connected systems, and emerging computational technologies. The long-term vision is personalized and organizational intelligence that can continuously learn, coordinate, and evolve.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-[#050711] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">

          {/* LEFT — STICKY */}
          <div className="lg:sticky top-0 lg:self-start ">
            <SectionLabel>LEARN MORE</SectionLabel>

            <h2 className=" max-w-xl font-normal leading-[1.05] tracking-[-0.035em] text-white text-[clamp(40px,4.2vw,64px)]">
              Frequently
              <br />
              asked questions
            </h2>
          </div>

          {/* RIGHT — SCROLLING FAQS */}
          <div className="w-full min-w-0">
            <div className="divide-y divide-white/10 border-t border-white/10">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={faq.question} className="group">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-8 py-7 text-left"
                    >
                      <span
                        className={`text-[24px] font-semibold leading-[1.45] tracking-[-0.02em] transition-colors duration-300 sm:text-[18px] ${
                          isOpen
                            ? "text-white"
                            : "text-white group-hover:text-[#8B5CF6]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Chevron */}
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center text-[#A1A1AA] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <path
                            d="m6 9 6 6 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Animated Answer */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-8 pr-10 text-[15px] font-normal leading-[1.7] text-[#A1A1AA]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}