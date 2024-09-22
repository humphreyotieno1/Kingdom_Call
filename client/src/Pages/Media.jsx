import React from 'react';
import { NavLink } from 'react-router-dom';

const Media = () => {
  // Sample data for sneak peeks
  const sampleVideos = [
    {
      title: 'THY WILL BE DONE',
      description: 'The will of God in our lives.',
      thumbnail: '/audience2.jpg'
    },
    {
      title: 'Leaders Retreat',
      description: 'A retreat for leaders in the ministry.',
      thumbnail: 'retreat.jpg'
    },
    {
      title: 'The Love of a Father',
      description: 'A message on the love of God.',
      thumbnail: '/services.jpg'
    },
    {
      title: 'AS IT IS IN HEAVEN',
      description: 'The kingdom of God.',
      thumbnail: 'team.jpg'
    }
  ];

  const sampleGallery = [
    {
      title: 'Gallery Image 1',
      src: 'session1.jpg'
    },
    {
      title: 'Gallery Image 2',
      src: 'meeting.jpg'
    },
    {
      title: 'Gallery Image 3',
      src: 'audience3.jpg'
    },
    {
      title: 'Gallery Image 4',
      src: 'prayer.jpg'
    }
  ];

  const sampleLiveSessions = [
    {
      title: 'Holy Ghost Encounter',
      description: 'A live session on the Holy Ghost.',
      date: 'March 4, 2023'
    },
    {
      title: 'Beauty of Holiness',
      description: 'A session on the beauty of holiness.',
      date: 'July 28, 2023'
    },
    {
      title: 'THY WILL BE DONE',
      description: 'A session on the will of God.',
      date: 'March 4, 2024'
    },
    {
      title: 'AS IT IS IN HEAVEN',
      description: 'A session on the kingdom of God.',
      date: 'July 28, 2024'
    }
  ];

  return (
    <div className="media-page">

      {/* Heading Section */}
      <div className="w-full bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-20 mb-2 text-center py-4">
          Media
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="text-center py-4 bg-gray-100">
        <NavLink
          to="/media/videos"
          className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full hover:bg-[#d37712] transition-colors"
        >
          Videos
        </NavLink>
        <NavLink
          to="/media/gallery"
          className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full hover:bg-[#d37712] transition-colors"
        >
          Gallery
        </NavLink>
        <NavLink
          to="/media/live-sessions"
          className="px-4 py-2 mx-2 bg-[#E48515] text-white font-bold rounded-full hover:bg-[#d37712] transition-colors"
        >
          Live Sessions
        </NavLink>
      </div>

      {/* Sneak Peek Section */}
      <div className="container mx-auto py-10 px-4 lg:px-0">

        {/* Videos Preview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Videos Preview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sampleVideos.map((video, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Preview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Gallery Preview</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {sampleGallery.map((image, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Live Sessions Preview */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Live Sessions Preview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sampleLiveSessions.map((session, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold">{session.title}</h3>
                <p className="text-gray-600">{session.description}</p>
                <p className="text-sm text-gray-500 mt-2">{session.date}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Media;
