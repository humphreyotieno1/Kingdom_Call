import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cardDetails = [
  {
    id: "ourValues",
    title: "Our Values",
    description: "Our values are the guiding principles that help us to fulfill our mission and vision as a ministry. They include integrity, compassion, and excellence in all that we do.",
    path: "/values",
    buttonText: "Learn More",
  },
  {
    id: "ourStory",
    title: "Our Story",
    description: "Learn about our journey so far and how we have grown to become who we are today. Discover the milestones and achievements that have shaped our ministry.",
    path: "/our-story",
    buttonText: "Read More",
  },
  {
    id: "departments",
    title: "Departments",
    description: "Learn about our departments and meet our wonderful department heads. Each department plays a crucial role in our ministry's operations and outreach.",
    path: "/departments",
    buttonText: "Learn More",
  },
  {
    id: "leadership",
    title: "Leadership",
    description: "Meet our leaders who are dedicated to guiding and nurturing our community. Their vision and commitment drive our mission forward.",
    path: "#leadership",
    buttonText: "View Team",
  },
];

const About = () => {
  const navigate = useNavigate();
  const [loadingStates, setLoadingStates] = useState(
    cardDetails.reduce((acc, card) => ({ ...acc, [card.id]: false }), {})
  );

  const handleNavigation = (path, cardId) => {
    setLoadingStates((prev) => ({ ...prev, [cardId]: true }));

    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [cardId]: false }));

      if (path.startsWith("#")) {
        const sectionId = path.slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.hash = path;
        }
      } else {
        navigate(path);
      }
    }, 2000);
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center" id="about">
        {/* Header Section */}
        <div className="w-full">
          <h1 className="text-4xl font-bold text-black mt-20 mb-2 text-center py-2">About Us</h1>
        </div>

        {/* Introduction Paragraph */}
        <p className="text-center text-lg text-gray-700 max-w-md mb-8">
          We are an international and interdenominational ministry majorly of the youth thoroughly invested in seeing the Kingdom of God established in the hearts of men and women on earth. We also welcome even the old.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 px-4 md:px-8 lg:px-16 mx-4 md:mx-8 lg:mx-16">
          {cardDetails.map((card) => (
            <div
              key={card.id}
              className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 border-2 hover:bg-orange-200 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3
      w-3/4 max-w-2xl h-80 mx-auto"
            >
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 h-full flex flex-col justify-between">
                <h3>
                  <a
                    href={card.path}
                    className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                  >
                    {card.title}
                  </a>
                </h3>
                <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                  {card.description}
                </p>
                <button
                  onClick={() => handleNavigation(card.path, card.id)}
                  className="inline-block rounded-full border border-gray-900 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-orange-500 dark:border-dark-3 dark:text-dark-6"
                >
                  {loadingStates[card.id] ? (
                    <div className="flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="title-04a desc-04a"
                        aria-live="polite"
                        aria-busy="true"
                        className="animate h-5 w-5 animate-spin"
                      >
                        <title id="title-04a">Loading</title>
                        <desc id="desc-04a">Loading spinner</desc>
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          className="stroke-slate-200"
                          strokeWidth="4"
                        />
                        <path
                          d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
                          className="stroke-black"
                          strokeWidth="4"
                        />
                      </svg>
                    </div>
                  ) : (
                    card.buttonText
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
