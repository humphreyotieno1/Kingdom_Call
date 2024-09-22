import React, { useState, useEffect } from "react";
import Pagination from "../components/pagination";

const ResourcesPage = () => {
  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0);
  const [currentMerchPage, setCurrentMerchPage] = useState(0);
  const testimonialsPerPage = 3;
  const merchandisePerPage = 4;
  const [expanded, setExpanded] = useState(false); // To toggle expanded/collapsed view

  const testimonials = [
    { name: "Adam Smith", image: "./path.jpeg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", designation: "Designation" },
    { name: "Ciara Martin", image: "./path.jpeg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", designation: "Designation" },
    { name: "Edward James", image: "./path.jpeg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", designation: "Designation" },
    { name: "Brian Smith", image: "./path.jpeg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", designation: "Designation" },
    { name: "Leonard Martin", image: "./path.jpeg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", designation: "Designation" },
    { name: "Eric James", image: "./path.jpeg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", designation: "Designation" },
  ];

  const merchandise = [
    { title: "product 1", image: "./path.jpeg" },
    { title: "product 2", image: "./path.jpeg" },
    { title: "product 3", image: "./path.jpeg" },
    { title: "product 4", image: "./path.jpeg" },
    { title: "product 5", image: "./path.jpeg" },
    { title: "product 6", image: "./path.jpeg" },
    { title: "product 7", image: "./path.jpeg" },
    { title: "product 8", image: "./path.jpeg" },
  ];

  const totalPagesTestimonials = Math.ceil(testimonials.length / testimonialsPerPage);
  const totalPagesMerchandise = Math.ceil(merchandise.length / merchandisePerPage);

  const displayedTestimonials = testimonials.slice(
    currentTestimonialPage * testimonialsPerPage,
    currentTestimonialPage * testimonialsPerPage + testimonialsPerPage
  );

  const displayedMerchandise = merchandise.slice(
    currentMerchPage * merchandisePerPage,
    currentMerchPage * merchandisePerPage + merchandisePerPage
  );

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const sermons = [
    { title: "Sermon 1", content: "Detailed explanation of Sermon 1...", file: "sermon1.pdf" },
    { title: "Sermon 2", content: "Detailed explanation of Sermon 2...", file: "sermon2.pdf" },
    { title: "Sermon 3", content: "Detailed explanation of Sermon 3...", file: "sermon3.pdf" },
    { title: "Sermon 4", content: "Detailed explanation of Sermon 4...", file: "sermon4.pdf" },
    { title: "Sermon 5", content: "Detailed explanation of Sermon 5...", file: "sermon5.pdf" },
  ];

  const visibleSermons = expanded ? sermons : sermons.slice(0, 3);

  useEffect(() => {
    const url = new URL(window.location.href);
    const section = url.searchParams.get('section');
    if (section) {
      scrollToSection(section);
    }
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#ebebeb]">
      {/* Resources Header */}
      <div className="w-full bg-gradient-to-b from-[#e48515] to-[#ebebeb] py-10">
        <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">
          Resources
        </h1>
      </div>

      {/* Testimonials Section */}
      <div id="testimonies" className="w-full py-12 px-4 md:px-12">
        <h2 className="text-xl font-bold text-center mb-6">Testimonials</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-6">
          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-lg text-center mb-6 md:mb-0 md:w-1/3">
              <div className="rounded-full border border-gray-300 p-2 flex items-center justify-center">
                <img src={testimonial.image} alt={`${testimonial.name}'s photo`} className="rounded-full object-cover"/>
              </div>
              <div className="text-sm text-gray-600 mt-4">"{testimonial.quote}"</div>
              <div className="mt-4 text-gray-900 font-bold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.designation}</div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <Pagination 
          totalPages={totalPagesTestimonials} 
          currentPage={currentTestimonialPage} 
          onPageChange={setCurrentTestimonialPage} 
          type="radio" // Use radio buttons for testimonials
        />
      </div>
     
      {/* Sermons Section */}
      <div id="sermons" className="w-full py-12 px-4 md:px-12">
        <h2 className="text-xl font-bold text-center mb-6">Sermons</h2>
        <div className="w-full mb-8 mx-auto md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-center md:space-x-8 h-full">
            <div className="bg-gray-300 w-full md:w-1/2 order-1 md:order-1">
              <img src="./sermon.jpg" alt="sermons image" />
            </div>
            <div className="w-full md:w-1/2 order-2 md:order-2 rounded shadow-lg">
              <div className="space-y-2">
                {visibleSermons.map((sermon, index) => (
                  <div key={index} className="border border-gray-200 rounded">
                    <button
                      className="w-full text-left p-4 flex justify-start items-center focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="text-xl mr-4">
                        {openAccordion === index ? "-" : "+"}
                      </span>
                      <span>{sermon.title}</span>
                    </button>
                    {openAccordion === index && (
                      <div className="p-4 bg-gray-50">
                        <p>{sermon.content}</p>
                        <a
                          href={`./files/${sermon.file}`} 
                          download 
                          className="text-blue-500 underline mt-2"
                        >
                          Download PDF
                        </a>
                      </div>
                    )}
                  </div>
                ))}
                {sermons.length > 3 && (
                  <button
                    className="w-full text-center p-4 mt-4 bg-gray-200 rounded"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Merchandise Section */}
      <div id="merch" className="w-full py-12 px-4 md:px-12">
        <h2 className="text-xl font-bold text-center mb-6">Merchandise</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-6">
          {displayedMerchandise.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-lg text-center mb-6 md:mb-0 md:w-1/3">
              <img src={item.image} alt={item.title} className="mb-4" />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
        <Pagination 
          totalPages={totalPagesMerchandise} 
          currentPage={currentMerchPage} 
          onPageChange={setCurrentMerchPage} 
          type="bracketDots" // Use angle brackets with dots for merchandise
        />
      </div>
    </div>
  );
};

export default ResourcesPage;
