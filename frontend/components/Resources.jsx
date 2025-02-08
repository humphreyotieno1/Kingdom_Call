"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from 'axios';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/fetchResources');
        setResources(response.data);
      } catch (error) {
        console.error("Error fetching resources", error);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const visibleResources = expanded ? resources : resources.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center bg-[#ebebeb]">
      {/* Resources Header */}
      <div className="w-full bg-gradient-to-b from-[#e48515] to-[#ebebeb] py-10">
        <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">
          Kingdom Call Resources
        </h1>
      </div>

      {/* Resources Section */}
      <div className="w-full py-12 px-4 md:px-12 font-lato">
        <h2 className="text-xl font-bold text-center mb-6">Available Resources</h2>
        <div className="w-full mb-8 mx-auto md:px-12 lg:px-20">
          <div className="space-y-2">
            {visibleResources.length > 0 ? (
              visibleResources.map((resource, index) => (
                <div key={resource.id} className="border border-gray-200 rounded">
                  <button
                    className="w-full text-left p-4 flex justify-start items-center focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-xl mr-4">
                      {openAccordion === index ? "-" : "+"}
                    </span>
                    <span>{resource.name}</span>
                  </button>
                  {openAccordion === index && (
                    <div className="p-4 bg-gray-50">
                      <a
                        href={resource.webViewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline mt-2"
                      >
                        View or Download
                      </a>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No resources found in the folder.</p>
            )}
            {resources.length > 3 && (
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

      {/* Merchandise Section */}
      <div className="w-full py-12 px-4 md:px-12 bg-white">
        <h2 className="text-xl font-bold text-center mb-6">Kingdom Call Merchandise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add merchandise items here */}
          <div className="p-6 border rounded-md shadow-sm bg-gray-100">
            <img
              src="https://via.placeholder.com/150"
              alt="Merchandise Item"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">T-Shirt</h3>
            <p className="mb-4">Kingdom Call branded T-shirt, available in multiple colors.</p>
            <button className="bg-[#e48515] text-white px-4 py-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;