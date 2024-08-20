import React from 'react';

const MediaPage = () => {
  return (
    <div className="media-page">
      
      {/* Heading Section */}
      <div className="w-full bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-20 mb-2 text-center py-4">
          Media
        </h1>
      </div>

      {/* Videos Section */}
      <div className="videos-section py-10">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Embedding the same video in each iframe */}
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/tx_dMT4vaWI?si=dkVLEhSwIKIEHxi6" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-64 md:h-80 lg:h-96"
            ></iframe>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/zU4gUUTJUVs?si=nYHwhKNbI1Nadhmt" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-64 md:h-80 lg:h-96"
            ></iframe>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/6YKY9LGqSYw?si=R5ZYb0wYufZgoCYM" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-64 md:h-80 lg:h-96"
            ></iframe>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/x-FzcPftJ9A?si=Rl0hYL--Al2CPHor" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-64 md:h-80 lg:h-96"
            ></iframe>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/VpBMRXUwXIk?si=uAB0j_YPnOPIesBX" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-64 md:h-80 lg:h-96"
            ></iframe>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/n5cdXPmnf8w?si=UYW95MHfp24JO7FH" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-64 md:h-80 lg:h-96"
            ></iframe>
          </div>
          <div className="text-center mt-8">
            <a href="https://www.youtube.com/@WeareKingdomCall" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#E48515] text-white font-bold rounded-full">
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Gallery</h2>
          <div className="filter-options text-center mb-6">
            <button className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full">All</button>
            <button className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full">Sessions</button>
            <button className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full">Hangouts</button>
            {/* Add more filter buttons as needed */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Replace these divs with actual image components */}
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
            <div className="gallery-image bg-gray-300 h-40 md:h-48 lg:h-56"></div>
          </div>
          {/* Pagination buttons or component */}
          <div className="pagination mt-8 text-center">
            <button className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full">Previous</button>
            <button className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full">Next</button>
          </div>
        </div>
      </div>

      {/* Live Sessions Section */}
      <div className="live-sessions-section py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Live Sessions</h2>
          <div className="live-video-embed">
            {/* Embed the specific YouTube video */}
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/dlcu04ghbC4?si=-5TX7uW2uKt-ZD7a" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-64 md:h-80 lg:h-96"
            ></iframe>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MediaPage;
