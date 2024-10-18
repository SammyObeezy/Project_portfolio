import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is BookWave?",
      answer:
        "BookWave is an interactive platform that connects readers with an extensive library of eBooks and vibrant communities of fellow readers.",
    },
    {
      question: "How can I purchase books on BookWave?",
      answer:
        "You can purchase books through our platform by selecting the book you want and following the secure checkout process.",
    },
    {
      question: "Is there a membership fee?",
      answer:
        "No, BookWave is free to use! You only pay for the books you choose to purchase.",
    },
    {
      question: "Can I download eBooks for offline reading?",
      answer:
        "Yes, you can freely download eBooks to read them offline at your convenience.",
    },
    {
      question: "What types of books are available?",
      answer:
        "We offer a vast selection of genres, including fiction, non-fiction, bestsellers, and local authors.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support through the contact form on our website or by emailing us directly.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl w-full px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer py-3"
              >
                <h2 className="text-lg font-semibold text-gray-700">
                  {faq.question}
                </h2>
                <span className="text-gray-600">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 pl-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
