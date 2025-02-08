"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  EffectFlip,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// Dynamically import components
const Hero = dynamic(() => import("../components/Hero"));
const About = dynamic(() => import('../components/About'));
const Services = dynamic(() => import('../components/Services'));
const Contact = dynamic(() => import('../components/Contact'));
const Leadership = dynamic(() => import('../components/Leadership'));

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const overlayTexts = [
    "Thy Kingdom come,\nThy will be done on earth,\nAs it is in heaven",
    "Seek first the Kingdom of God,\nand His righteousness,\nand all these things shall be added unto you.",
    "For the Kingdom of God\nis not a matter of talk but of power.",
    "The Lord reigns,\nlet the earth be glad;\nlet the distant shores rejoice.",
    "For thine is the kingdom,\nand the power, and the glory,\nforever and ever.",
  ];

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.scrollToTop}
          title="Go to Top"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      )}
      <div className={styles.container}>
        {/* Carousel */}
        <section className={styles.carouselSection}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade, EffectFlip]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            effect="fade"
            className={styles.swiper}
            speed={2000}
          >
            {overlayTexts.map((text, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.imageContainer}>
                  <Image
                    src={`/carousel/pic${index + 1}.jpg`}
                    alt={`Carousel ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                  />
                  <div className={styles.overlay}>
                    <h2 className={styles.overlayText}>{text}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <hr className="w-48 h-1 mx-auto mt-12 bg-gray-100 border-0 rounded dark:bg-gray-700" />
        </section>
        <Hero />
        <About />
        <Services />
        <Leadership />
        <Contact />
      </div>
    </>
  );
};

export default Home;
