import React, { useState } from "react";

const ServicesPage = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center justify-center py-12 bg-[#ebebeb]">
          <div className="w-full py-4 bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
                <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">
                    Our Services
                </h1>
            </div>
            <hr className="w-24 h-1 mx-auto my-6 bg-gray-100 border-0 rounded dark:bg-gray-700" />

            <div className="flex flex-col gap-6 items-start lg:flex-row lg:items-center px-8 mb-4">
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
                    <div>
                        {/* Prayers */}
                        <h2>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full py-4 lg:py-5 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                onClick={() => toggleAccordion(1)}
                            >
                                <span>Prayers</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform ${activeAccordion === 1 ? "rotate-90" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2 2l6 3-6 3V2z"
                                    />
                                </svg>
                            </button>
                        </h2>
                        {activeAccordion === 1 && (
                            <div className="py-4 lg:py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Join us for our powerful prayer sessions every Monday, Wednesday, and Friday from 11:00 pm to 12:00 midnight. Let's come together in unity and lift our hearts in prayer.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    <strong>Timings:</strong> Monday, Wednesday, Friday 11:00 pm - 12:00 midnight
                                </p>
                            </div>
                        )}

                        {/* Bible Study */}
                        <h2>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full py-4 lg:py-5 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                onClick={() => toggleAccordion(2)}
                            >
                                <span>Bible Study</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform ${activeAccordion === 2 ? "rotate-90" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2 2l6 3-6 3V2z"
                                    />
                                </svg>
                            </button>
                        </h2>
                        {activeAccordion === 2 && (
                            <div className="py-4 lg:py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Dive deep into the Word of God with our weekly Bible Study sessions every Tuesday. Explore the teachings of the Bible and grow in your faith with us.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    <strong>Timings:</strong> Tuesday 9:00 pm - 10:00 pm
                                </p>
                            </div>
                        )}

                        {/* Teachings */}
                        <h2>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full py-4 lg:py-5 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                onClick={() => toggleAccordion(3)}
                            >
                                <span>Teachings</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform ${activeAccordion === 3 ? "rotate-90" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2 2l6 3-6 3V2z"
                                    />
                                </svg>
                            </button>
                        </h2>
                        {activeAccordion === 3 && (
                            <div className="py-4 lg:py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Our teachings are designed to enlighten and empower you in your spiritual journey. Join us every Wednesday to gain deeper insights into God's word.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    <strong>Timings:</strong> Wednesday 9:00 pm - 10:00 pm
                                </p>
                            </div>
                        )}

                        {/* Meetings */}
                        <h2>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full py-4 lg:py-5 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                onClick={() => toggleAccordion(4)}
                            >
                                <span>Meetings</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform ${activeAccordion === 4 ? "rotate-90" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2 2l6 3-6 3V2z"
                                    />
                                </svg>
                            </button>
                        </h2>
                        {activeAccordion === 4 && (
                            <div className="py-4 lg:py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Engage in our weekly meetings where we discuss spiritual growth, share experiences, and plan community activities. Join us every Sunday evening.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    <strong>Timings:</strong> Sunday 9:00 pm
                                </p>
                            </div>
                        )}

                        {/* Ministers' Masterclass */}
                        <h2>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full py-4 lg:py-5 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                onClick={() => toggleAccordion(5)}
                            >
                                <span>Ministers' Masterclass</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform ${activeAccordion === 5 ? "rotate-90" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2 2l6 3-6 3V2z"
                                    />
                                </svg>
                            </button>
                        </h2>
                        {activeAccordion === 5 && (
                            <div className="py-4 lg:py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Elevate your ministry skills with our Ministers' Masterclass every Saturday. Learn from experienced ministers and grow your leadership capabilities.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    <strong>Timings:</strong> Saturday 9:00 pm
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
