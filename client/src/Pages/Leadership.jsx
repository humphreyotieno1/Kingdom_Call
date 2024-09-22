import React from "react";

const LeadershipPage = () => {
  const leaders = [
    {
      title: "Vision Bearer",
      image: "/media3.jpg",
      description: "This is the Founder and vision carrier of the whole ministry. He also operates with a team of 6 executives as follows:",
    },
    {
      title: "Administrator",
      image: "/path-to-leader1-image.jpg",
    },
    {
      title: "Finance Director",
      image: "/path-to-leader2-image.jpg",
    },
    {
      title: "General Secretary",
      image: "/path-to-leader3-image.jpg",
    },
    {
      title: "Organizing Secretary",
      image: "/path-to-leader4-image.jpg",
    },
    {
      title: "Overall Departments Head",
      image: "/path-to-leader5-image.jpg",
    },
    {
      title: "Overall Cell Groups Head",
      image: "/path-to-leader6-image.jpg",
    },
  ];

  const otherLeaders = leaders.slice(1);

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-[#ebebeb]">
      <div className="w-full py-4 bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
        <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">Leadership</h1>
      </div>

      {/* Flex container for Vision Bearer and other leaders */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl px-4 sm:px-0 justify-between gap-8">

        {/* Vision Bearer Card */}
        <div className="w-full lg:w-1/3 mb-8 border-2 border-[#E48515] p-8 rounded-lg bg-[#e7e2d9]">
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img src={leaders[0].image} alt={leaders[0].title} className="w-full h-auto" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">{leaders[0].title}</h3>
              <p className="text-gray-700">{leaders[0].description}</p>
            </div>
          </div>
        </div>

        {/* Other Leaders Cards */}
        <div className="w-full lg:w-2/3 border-2 border-[#E48515] p-8 rounded-lg bg-[#e7e2d9]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherLeaders.map((leader, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                <img src={leader.image} alt={leader.title} className="w-full h-auto" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{leader.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeadershipPage;
