"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this training conducted online or offline?",
    answer:
      "This is a completely online training program. All sessions are conducted live through Google Meet and Zoom platforms.",
  },
  {
    question: "Is this training conducted online or offline?",
    answer:
      "This is a completely online training program. All sessions are conducted live through Google Meet and Zoom platforms.",
  },
  {
    question: "In which language is the training conducted?",
    answer:
      "Training is available in both Hindi and English. You can choose your preferred language.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No. Our online courses start from basics and guide you step-by-step through live interactive sessions.",
  },
  {
    question: "How do I attend the live online sessions?",
    answer:
      "We conduct live interactive sessions via Google Meet and Zoom. You'll receive joining links and schedule in advance.",
  },
  {
    question: "Will I receive a course completion certificate?",
    answer:
      "Yes. Upon successful completion of the online course, you'll receive a digital industry-recognized certificate.",
  },
  {
    question: "Do you provide internship opportunities?",
    answer:
      "Yes. We offer remote internship opportunities that you can complete online to gain real-world experience.",
  },
  {
    question: "What kind of placement support do you offer?",
    answer:
      "We provide online placement support including virtual interview preparation, resume building, and connections with companies hiring remotely.",
  },
  {
    question: "Will I get study materials and notes online?",
    answer:
      "Absolutely. All study materials, notes, and resources are provided digitally through our online learning platform.",
  },
  {
    question: "Do you help with online interview preparation?",
    answer:
      "Yes. We conduct virtual mock interviews and prepare you for online technical interviews and remote hiring processes.",
  },
  {
    question: "Do you offer EMI support for online courses?",
    answer:
      "Yes. We provide flexible EMI options for all our online courses to make them accessible to everyone.",
  },
  {
    question: "What kind of live projects will I work on?",
    answer:
      "You'll work on industry-relevant live projects that can be completed remotely, giving you practical online development experience.",
  },
  {
    question: "How do you provide doubt support online?",
    answer:
      "We provide comprehensive online doubt support through live Q&A sessions, dedicated chat groups, discussion forums, and one-on-one virtual mentoring.",
  },
  {
    question: "Will I get lifetime access to online course materials?",
    answer:
      "Yes. You get lifetime access to all digital course content, including video recordings, notes, and future updates.",
  },
  {
    question: "Are the mentors available for online interaction?",
    answer:
      "Yes. Our highly experienced mentors are available for live online sessions, virtual doubt-solving, and guidance throughout your learning journey.",
  },
  {
    question:
      "Do I need to be available at specific times for online sessions?",
    answer:
      "Yes, we have scheduled live online sessions, but all classes are recorded and available for lifetime access if you miss any session.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto lg:px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Everything you need to know about our{" "}
          <strong>online training program</strong>
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-400 transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
