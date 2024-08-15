import React, { useState } from "react";

const WhatWeBelievePage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const beliefs = [
    {
      title: "Belief 1",
      content: "Detailed explanation of Belief 1...",
    },
    {
      title: "Belief 2",
      content: "Detailed explanation of Belief 2...",
    },
    {
      title: "Belief 3",
      content: "Detailed explanation of Belief 3...",
    },
    {
      title: "Belief 4",
      content: "Detailed explanation of Belief 4...",
    },
    {
      title: "Belief 5",
      content: "Detailed explanation of Belief 5...",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full py-4 bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
        <h1 className="mt-20 text-2xl font-bold mb-8 text-center py-4">Beliefs</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl mt-8 px-4 md:px-0 mb-8">
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img src="/path-to-your-image.jpg" alt="What We Believe Image" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-3/4 order-1 md:order-2">
          <div className="space-y-2">
            {beliefs.map((belief, index) => (
              <div key={index} className="border border-gray-200 rounded">
                <button
                  className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{belief.title}</span>
                  <span className="text-xl">
                    {openAccordion === index ? "-" : "+"}
                  </span>
                </button>
                {openAccordion === index && (
                  <div className="p-4 bg-gray-50">{belief.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBelievePage;