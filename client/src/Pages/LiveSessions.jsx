import React from 'react';

const LiveSessions = () => {
  return (
    <div className="live-sessions-page">
      <div className="w-full bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-20 mb-2 text-center py-4">
          Live Sessions
        </h1>
      </div>
      <div className="live-sessions-section py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Live Sessions</h2>
          <div className="live-video-embed">
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

export default LiveSessions;
