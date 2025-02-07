import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Departments = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const departments = [
        {
            title: "Music and Dance Ministry",
            content:
                "They help us fulfill our vision through inspiration of songs, sounds, and even dances. We are careful to know that by a holy sound the walls of Jericho fell and the Lord's people overcame!",
        },
        {
            title: "Prayer",
            content:
                "This is the team that strategically leads us in the place of prayer cooperatively. Our vision in itself is an excerpt of the Lord's template of prayer. We understand that men ought always to pray and not to faint. It is imperative that we pray without ceasing in all understanding.",
        },
        {
            title: "Media",
            content:
                "They are responsible for our outreach through social media platforms. They're responsible for our posters, videos, links, sites, pages, and designs when it comes to merchandise. In our generation, social media acts as a great platform for outreach. The young are more on the screen than in the physical.",
        },
        {
            title: "Hospitality",
            content:
                "This comprises ushers and the protocol team. For order in our fellowships and in case someone has a concern, this is the team that's readily available to assist. They're the ones that also take care of us in terms of services like food during our physical meetings. A good team this is!",
        },
        {
            title: "Word",
            content:
                "They make sure we are deep into the study of the word of God. We are careful to understand that man shall not live by bread alone but by every word that comes from the Lord. This is the team responsible for sharing devotions daily and also guiding us through Bible study and teachings.",
        },
        {
            title: "Welfare",
            content:
                "This is a team that comprises men and women that check on our welfare. From emotional to psychological issues, they provide a holistic check on our well-being. We are careful to understand that it is the will of God that we prosper even in good health.",
        },
    ];

    const carouselItems = [
        {
            image: "/worship.jpg",
            title: "Music and Dance Ministry",
        },
        {
            image: "/prayer.jpg",
            title: "Prayer",
        },
        {
            image: "/media.jpg",
            title: "Media",
        },
        {
            image: "/hospitality.jpg",
            title: "Hospitality",
        },
        {
            image: "/word.jpg",
            title: "Word",
        },
        {
            image: "/welfare.jpg",
            title: "Welfare",
        },
        {
            image: "/worship.jpg",
            title: "Worship",
        },
    ];

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <i className="text-gray-700 fas fa-chevron-right"></i>
        </div>
    );

    const PreviousArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <i className="text-gray-700 fas fa-chevron-left"></i>
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
    };

    return (
        <div className="flex flex-col items-center justify-center py-12 bg-[#ebebeb] font-lato">
            {/* Header Section */}
            <div className="w-full bg-[linear-gradient(180deg,#e48515,#ebebeb)]">
                <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">
                    Departments
                </h1>
            </div>

            {/* Departments Section */}
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mt-2 px-4 md:px-8 mb-8">
                {/* Image Section */}
                {/* <div className="w-full md:w-1/2">
          <img
            src="/departments.jpg"
            alt="Departments"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div> */}
            </div>

            {/* Carousel Section */}
            <div className="w-full max-w-5xl mt-8 px-4 mb-8">
                <Slider {...settings}>
                    {carouselItems.map((item, index) => (
                        <div key={index} className="px-2">
                            <img
                                src={item.image}
                                alt={`carousel-item-${index}`}
                                className="w-full h-82 object-cover rounded-lg shadow-md"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Accordion Section */}
            <div className="w-full px-4 md:w-1/2 mx-auto mt-4">
                <div className="space-y-4">
                    {departments.map((department, index) => (
                        <div
                            key={index}
                            className="transition-all duration-200 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
                        >
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg font-semibold text-black">
                                    {department.title}
                                </span>
                                <svg
                                    className={`w-6 h-6 text-gray-400 transition-transform ${openAccordion === index ? "rotate-180" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-[max-height] duration-300 ${openAccordion === index ? "max-h-[200px]" : "max-h-0"
                                    }`}
                            >
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p className="text-gray-600">{department.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Departments;