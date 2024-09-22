import React from 'react';

const Videos = () => {
  const videoData = [
    { id: 1, src: "https://www.youtube.com/embed/tx_dMT4vaWI?si=dkVLEhSwIKIEHxi6" },
    { id: 2, src: "https://www.youtube.com/embed/zU4gUUTJUVs?si=nYHwhKNbI1Nadhmt" },
    { id: 3, src: "https://www.youtube.com/embed/6YKY9LGqSYw?si=R5ZYb0wYufZgoCYM" },
    { id: 4, src: "https://www.youtube.com/embed/x-FzcPftJ9A?si=Rl0hYL--Al2CPHor" },
    { id: 5, src: "https://www.youtube.com/embed/VpBMRXUwXIk?si=uAB0j_YPnOPIesBX" },
    { id: 6, src: "https://www.youtube.com/embed/n5cdXPmnf8w?si=UYW95MHfp24JO7FH" }
  ];

  return (
    <div className="videos-page">
      <div className="w-full bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-20 mb-2 text-center py-4">
          Videos
        </h1>
      </div>
      <div className="videos-section py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videoData.map((video) => (
              <iframe 
                key={video.id}
                src={video.src}
                title={`YouTube video ${video.id}`}
                className="w-full h-64 md:h-80 lg:h-96"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://www.youtube.com/@WeareKingdomCall" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-2 bg-[#E48515] text-white font-bold rounded-full"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
