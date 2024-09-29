import React, { useEffect, useState } from "react";
import Pagination from "../components/pagination";
import { gapi } from "gapi-script";

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [expanded, setExpanded] = useState(false); // To toggle expanded/collapsed view
  const [openAccordion, setOpenAccordion] = useState(null);

  // Google API Client ID and API key from your project
  const CLIENT_ID = "860488847873-c5q3ob6qgjqmq8bg6lhglg1idsc09nj5.apps.googleusercontent.com";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const FOLDER_ID = "14nCYghkuChp1dqT7c3WvcGdkfyBTmAhb";
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/drive.readonly";

  useEffect(() => {
    const fetchData = async () => {
      function start() {
        gapi.client
          .init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
          .then(() => {
            return gapi.client.drive.files.list({
              q: `'${FOLDER_ID}' in parents`,
              fields: "nextPageToken, files(id, name, mimeType, webViewLink, webContentLink)",
            });
          })
          .then((response) => {
            const files = response.result.files;
            setResources(files);
          })
          .catch((error) => {
            console.error("Error fetching files", error);
          });
      }
      gapi.load("client:auth2", start);
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
      <div id="resources" className="w-full py-12 px-4 md:px-12">
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
      <div id="merchandise" className="w-full py-12 px-4 md:px-12 bg-white">
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
          {/* Repeat the above block for other merchandise items */}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
