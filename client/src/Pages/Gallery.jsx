import React, { useState } from 'react';

const Gallery = () => {
  const baseLink = "https://drive.google.com/uc?id=";

  // Define your actual file IDs here
  const allImagesIds = [
    "YOUR_ALL_IMAGES_FILE_ID", // Replace with actual file ID
  ];

  const hangoutsIds = [
    "YOUR_HANGOUTS_FILE_ID" // Replace with actual file ID
  ];

  const sessionsIds = [
    "YOUR_SESSIONS_FILE_ID" // Replace with actual file ID
  ];

  const generateImageLinks = (ids) => {
    return ids.map((id) => `${baseLink}${id}`);
  };

  // State for the selected category and pagination
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  const getImages = () => {
    switch (selectedCategory) {
      case 'hangouts':
        return generateImageLinks(hangoutsIds);
      case 'sessions':
        return generateImageLinks(sessionsIds);
      default:
        return generateImageLinks(allImagesIds);
    }
  };

  const images = getImages(); // Get images based on the selected category
  const totalImages = images.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  // Calculate the images to display for the current page
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="gallery-page">
      <div className="w-full bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-20 mb-2 text-center py-4">
          Gallery
        </h1>
      </div>
      <div className="gallery-section py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Gallery</h2>
          <div className="filter-options text-center mb-6">
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setCurrentPage(1);
              }}
              className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full"
            >
              All
            </button>
            <button 
              onClick={() => {
                setSelectedCategory('hangouts');
                setCurrentPage(1);
              }}
              className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full"
            >
              Hangouts
            </button>
            <button 
              onClick={() => {
                setSelectedCategory('sessions');
                setCurrentPage(1);
              }}
              className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full"
            >
              Sessions
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentImages.map((src, index) => (
              <div key={index} className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56">
                <img src={src} alt={`Gallery Image ${startIndex + index + 1}`} className="object-cover h-full w-full" />
              </div>
            ))}
          </div>
          <div className="pagination mt-8 text-center">
            <button 
              onClick={() => handlePageChange('prev')}
              className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button 
              onClick={() => handlePageChange('next')}
              className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
