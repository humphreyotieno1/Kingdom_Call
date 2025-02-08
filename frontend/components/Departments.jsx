"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import styles from "../styles/Home.module.css";

const Departments = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const departments = [
        {
            title: "Music and Dance Ministry",
            content: "They help us fulfill our vision through inspiration of songs, sounds, and even dances. We are careful to know that by a holy sound the walls of Jericho fell and the Lord's people overcame!",
        },
        {
            title: "Prayer",
            content: "This is the team that strategically leads us in the place of prayer cooperatively. Our vision in itself is an excerpt of the Lord's template of prayer. We understand that men ought always to pray and not to faint. It is imperative that we pray without ceasing in all understanding.",
        },
        {
            title: "Media",
            content: "They are responsible for our outreach through social media platforms. They're responsible for our posters, videos, links, sites, pages, and designs when it comes to merchandise. In our generation, social media acts as a great platform for outreach. The young are more on the screen than in the physical.",
        },
        {
            title: "Hospitality",
            content: "This comprises ushers and the protocol team. For order in our fellowships and in case someone has a concern, this is the team that's readily available to assist. They're the ones that also take care of us in terms of services like food during our physical meetings. A good team this is!",
        },
        {
            title: "Word",
            content: "They make sure we are deep into the study of the word of God. We are careful to understand that man shall not live by bread alone but by every word that comes from the Lord. This is the team responsible for sharing devotions daily and also guiding us through Bible study and teachings.",
        },
        {
            title: "Welfare",
            content: "This is a team that comprises men and women that check on our welfare. From emotional to psychological issues, they provide a holistic check on our well-being. We are careful to understand that it is the will of God that we prosper even in good health.",
        },
    ];

    const carouselItems = [
        { image: "/worship.jpg", title: "Music and Dance Ministry" },
        { image: "/prayer.jpg", title: "Prayer" },
        { image: "/media.jpg", title: "Media" },
        { image: "/hospitality.jpg", title: "Hospitality" },
        { image: "/word.jpg", title: "Word" },
        { image: "/welfare.jpg", title: "Welfare" },
    ];

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center justify-center py-12 bg-[#ebebeb] font-lato">
            <div className="w-full bg-[linear-gradient(180deg,#e48515,#ebebeb)]">
                <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">Departments</h1>
            </div>

            <div className="w-full rounded-lg max-w-5xl mt-8 px-4 mb-8">
                <section className={styles.carouselSection}>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation, EffectFlip]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation
                        loop
                        effect="flip"
                        className={styles.swiper}
                        speed={2000}
                    >
                        {carouselItems.map((item, index) => (
                            <SwiperSlide key={index} className={styles.slide}>
                                <div className={`${styles.imageContainer} rounded-lg`}>
                                    <Image
                                        src={item.image}
                                        alt={`Department: ${item.title}`}
                                        layout="fill"
                                        objectFit="cover"
                                        priority={index === 0}
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold text-black">{item.title}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>

            <div className="w-full px-4 md:w-1/2 mx-auto mt-10">
                <div className="space-y-4">
                    {departments.map((department, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openAccordion === index}
                                aria-controls={`accordion-content-${index}`}
                            >
                                <span className="text-lg font-semibold text-black">{department.title}</span>
                                <svg
                                    className={`w-6 h-6 text-gray-400 transition-transform ${openAccordion === index ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                id={`accordion-content-${index}`}
                                className={`overflow-hidden transition-[max-height] duration-300 ${openAccordion === index ? "max-h-[200px]" : "max-h-0"}`}
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