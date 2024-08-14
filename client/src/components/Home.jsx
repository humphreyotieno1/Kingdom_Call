import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    // Carousel settings
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const overlayText = (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-xl md:text-3xl font-bold text-white text-center px-4">
                Thy Kingdom come,<br />
                Thy will be done on earth,<br />
                As it is in heaven
            </h2>
        </div>
    );

    return (
        <div className="w-full overflow-hidden font-montserrat">
            {/* Carousel */}
            <section className="relative w-full h-[75vh] bg-cover bg-center animate-fadeIn">
                <Slider {...carouselSettings} className="w-full h-full">
                    <div className="relative w-full h-[75vh]">
                        <img src="./carousel/img1.jpg" alt="Cover" className="w-full h-full object-cover" />
                        {overlayText}
                    </div>
                    <div className="relative w-full h-[75vh]">
                        <img src="./carousel/img2.jpg" alt="Carousel 1" className="w-full h-full object-cover" />
                        {overlayText}
                    </div>
                    <div className="relative w-full h-[75vh]">
                        <img src="./carousel/img3.jpg" alt="Carousel 2" className="w-full h-full object-cover" />
                        {overlayText}
                    </div>
                    <div className="relative w-full h-[75vh]">
                        <img src="./carousel/img4.jpg" alt="Carousel 3" className="w-full h-full object-cover" />
                        {overlayText}
                    </div>
                    <div className="relative w-full h-[75vh]">
                        <img src="./carousel/img5.jpg" alt="Carousel 3" className="w-full h-full object-cover" />
                        {overlayText}
                    </div>
                </Slider>
            </section>
        </div>
    );
};

export default Home;