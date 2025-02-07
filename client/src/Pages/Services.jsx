import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrayingHands,
  faBookBible,
  faChalkboardTeacher,
  faHandshake,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      id: 1,
      title: "Prayers",
      icon: <FontAwesomeIcon icon={faPrayingHands} className="w-6 h-6 text-black" />,
      content: (
        <p className="mt-4 text-slate-500 font-lato">
          Join us for our powerful prayer sessions every Monday, Wednesday, and Friday from 11:00 pm to 12:00 midnight. Let's come together in unity and lift our hearts in prayer.
        </p>
      ),
    },
    {
      id: 2,
      title: "Bible Study",
      icon: <FontAwesomeIcon icon={faBookBible} className="w-6 h-6 text-black" />,
      content: (
        <p className="mt-4 text-slate-500">
          Dive deep into the Word of God with our weekly Bible Study sessions every Tuesday. Explore the teachings of the Bible and grow in your faith with us.
        </p>
      ),
    },
    {
      id: 3,
      title: "Teachings",
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} className="w-6 h-6 text-black" />,
      content: (
        <p className="mt-4 text-slate-500">
          Our teachings are designed to enlighten and empower you in your spiritual journey. Join us every Wednesday to gain deeper insights into God's word.
        </p>
      ),
    },
    {
      id: 4,
      title: "Meetings",
      icon: <FontAwesomeIcon icon={faHandshake} className="w-6 h-6 text-black" />,
      content: (
        <p className="mt-4 text-slate-500">
          Engage in our weekly meetings where we discuss spiritual growth, share experiences, and plan community activities. Join us every Sunday evening.
        </p>
      ),
    },
    {
      id: 5,
      title: "Ministers' Masterclass",
      icon: <FontAwesomeIcon icon={faUserTie} className="w-6 h-6 text-black" />,
      content: (
        <p className="mt-4 text-slate-500">
          Elevate your ministry skills with our Ministers' Masterclass every Saturday. Learn from experienced ministers and grow your leadership capabilities.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col font-lato items-center justify-center py-2" id="services">
      {/* Header Section */}
      <div className="w-full py-2">
        <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-2">
          Our Services
        </h1>
      </div>

      <div className="flex flex-col gap-6 items-start lg:flex-row lg:items-center px-8 py-8 mb-4">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/services.jpg"
            alt="Service Image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Accordion Section */}
        <div className="w-full lg:w-1/2">
          <div className="w-full bg-white border divide-y rounded divide-slate-200 border-slate-200">
            {accordionData.map((item, index) => (
              <div
                key={item.id}
                className="p-4 group"
              >
                <summary
                  className="[&::-webkit-details-marker]:hidden relative flex gap-4 pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.icon}
                  {item.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 ${activeAccordion === index ? "rotate-45" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ${activeAccordion === index ? "max-h-[200px]" : "max-h-0"
                    }`}
                >
                  {activeAccordion === index && (
                    <div className="mt-4">{item.content}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;