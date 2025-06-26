"use client";
import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const sectionHeaderData = {
    sectionHeader : "No header",
    sectionTitle: "Frequently Asked Questions",
    sectionDescription:
      "No description",
    isCentered: true,
  };

  const [openIndex, setOpenIndex] = useState<number | null>(-1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer full refunds within 30 days of purchase.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "How do I change my password?",
      answer:
        "Go to account settings and click on 'Change Password'.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Do you offer support?",
      answer:
        "Yes, we provide 24/7 customer support via chat and email.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Do you offer support?",
      answer:
        "Yes, we provide 24/7 customer support via chat and email.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className="my-32 md:my-32 lg:my-20">
      <SectionHeader sectionHeaderData={sectionHeaderData} />

      <div className="w-full flex">
        <div className="max-w-4xl mx-auto mt-20 .space-y-4 flex-grow">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=".border border-gray-300 rounded-lg bg-white text-blue-950"
            >
              <hr />
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between duration-300 transition-transform w-full px-4 py-5 text-left"
              >
                    <span className="font-medium text-xl">{faq.question}</span>
                    <ChevronRight className={`text-blue-950 transform transition-transform duration-300 w-4 h-4 ${openIndex === index ? "rotate-90" : ""}`} />
                </button>
                <div className={`px-4 text-lg text-blue-950 overflow-hidden transition-all ease-in-out duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'
                }`}>
                  <p>{faq.answer}</p>
                </div>
            <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
