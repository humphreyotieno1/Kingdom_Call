import React from "react";

const Leadership = () => {
  const leaders = [
    {
      name: "Vision Bearer",
      position: "This is the founder of the whole ministry. He also operates with a team of 6 executives.",
      imageSrc: "/media3.jpg",
    },
    {
      name: "Administrator",
      position: "In charge of the day-to-day running of the ministry.",
      imageSrc: "/med",
    },
    {
      name: "General Secretary",
      position: "In charge of all the secretarial duties of the ministry.",
      imageSrc: "/med",
    },
    {
      name: "Organising Secretary",
      position: "In charge of all the organizing duties of the ministry.",
      imageSrc: "/med",
    },
    {
      name: "Finance Director",
      position: "In charge of all the financial duties of the ministry.",
      imageSrc: "/med",
    },
    {
      name: "Overall Dept. Head",
      position: "In charge of all the departments in the ministry.",
      imageSrc: "/med",
    },
    {
      name: "Overall Cell Groups Head",
      position: "In charge of all the cell groups in the ministry.",
      imageSrc: "/med",
    },
  ];

  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[80px] font-lato" id="leadership">
      <div className="container mx-auto">
        <Header />
        <div className="-mx-4 flex flex-wrap justify-center">
          {leaders.map((leader, index) => (
            <LeadershipCard
              key={index}
              name={leader.name}
              position={leader.position}
              imageSrc={leader.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Header = () => (
  <div className="-mx-4 flex flex-wrap">
    <div className="w-full px-4">
      <div className="mx-auto mb-[60px] max-w-[510px] text-center">
        <h2 className="mb-3 lg:text-5xl text-4xl font-bold leading-[1.2] text-dark dark:text-black sm:text-2xl md:text-[40px]">
          Meet Our Leaders
        </h2>
        <p className="text-base text-body-color dark:text-dark-6">
          Our leadership team is dedicated to driving innovation and delivering exceptional results.
        </p>
      </div>
    </div>
  </div>
);

const LeadershipCard = ({ imageSrc, name, position }) => (
  <div className="w-full px-4 md:w-1/2 xl:w-1/4">
    <div className="mx-auto mb-10 w-full h-80 max-w-[370px] overflow-hidden rounded-lg shadow-lg bg-white dark:bg-dark-2 transition-transform duration-300 hover:scale-105">
      <div className="relative overflow-hidden">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="text-center text-white">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm">{position}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Leadership;