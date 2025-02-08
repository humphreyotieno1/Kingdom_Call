import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    path: "/story",
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
  const router = useRouter();
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
        router.push(path);
      }
    }, 2000);
  };

  return (
    <section className="py-10 bg-gray-900 bg-gradient-to-b from-[#e5e6e3] to-[#c07716] sm:py-16 lg:py-24 font-lato" id="about">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            About Us
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg leading-relaxed text-black">
            We are an international and interdenominational ministry majorly of the youth thoroughly invested in seeing the Kingdom of God established in the hearts of men and women on earth. We also welcome even the old.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-2 lg:max-w-full lg:gap-14">
          {cardDetails.map((card) => (
            <div
              key={card.id}
              className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col justify-between flex-1 px-5 py-6">
                <div className="flex-shrink-0">
                  <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                    {card.title}
                  </span>
                </div>

                <div className="flex-1 mt-4">
                  <p className="text-2xl font-semibold text-black">
                    {card.title}
                  </p>
                  <p className="mt-4 text-base text-gray-600">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <div className="flex">
                  <button
                    onClick={() => handleNavigation(card.path, card.id)}
                    className="inline-flex items-center justify-center w-full px-4 py-5 text-base font-semibold transition-all duration-200 bg-white hover:bg-orange-500 hover:text-white"
                  >
                    {loadingStates[card.id] ? (
                      <div className="flex justify-center items-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-labelledby="loading-title loading-desc"
                          aria-live="polite"
                          aria-busy="true"
                          className="h-5 w-5 animate-spin"
                        >
                          <title id="loading-title">Loading</title>
                          <desc id="loading-desc">Loading spinner</desc>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;