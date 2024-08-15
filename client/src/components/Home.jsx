import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonPraying, faHandshake, faBook, faFire, faEarListen } from '@fortawesome/free-solid-svg-icons';


// Custom Next Arrow
const NextArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
    >
        <i className="text-white text-3xl fas fa-chevron-right"></i>
    </div>
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
    >
        <i className="text-white text-3xl fas fa-chevron-left"></i>
    </div>
);

const Home = () => {
    // Carousel settings
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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

    // Overlay text for each image
    const overlayTexts = [
        "Thy Kingdom come,\nThy will be done on earth,\nAs it is in heaven",
        "Seek first the Kingdom of God,\nand His righteousness,\nand all these things shall be added unto you.",
        "For the Kingdom of God\nis not a matter of talk but of power.",
        "The Lord reigns,\nlet the earth be glad;\nlet the distant shores rejoice.",
        "For thine is the kingdom,\nand the power, and the glory,\nforever and ever."
    ];

    return (
        <div className="w-full overflow-hidden font-montserrat">
            {/* Carousel */}
            <section className="relative w-full h-[95vh] bg-cover bg-center animate-fadeIn">
                <Slider {...carouselSettings} className="w-full h-full">
                    {overlayTexts.map((text, index) => (
                        <div key={index} className="relative w-full h-[95vh]">
                            <img src={`./carousel/pic${index + 1}.jpg`} alt={`Carousel ${index + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <h2 className="text-xl md:text-3xlHumphrey font-bold text-white text-center px-4 whitespace-pre-line">
                                    {text}
                                </h2>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            {/* Divider */}
            <hr className="w-48 h-1 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-700" />

            {/* Section 2 */}
            <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center p-8 bg-gradient-to-r from-gray-200 to-gray-400">
                <div className="w-full md:w-[40%] p-6 bg-gradient-to-b from-gray-800 to-gray-600 text-white rounded-lg border-2 border-gray-400 shadow-md md:h-[60vh] flex flex-col justify-center">
                    <h5 className="mb-4 text-5xl font-bold tracking-tight">Welcome To Kingdom Call</h5>
                    <blockquote className="mb-5 text-gray-300 text-base">
                        Greetings and Praise the Lord!
                        <br /><br />
                        A good welcome to this space as we inform you about Kingdom Call, a ministry of majorly the young but also welcomes all from different ages. Our desire is to see the Kingdom of Heaven being established here on earth and in the hearts of men and women. A supernatural propensity governed by the Holy Spirit into establishing and prospering us in the land even as we occupy till He comes! We are determined to see that the kingdom come assignment shall be fulfilled to the best of its potential.
                    </blockquote>
                    <p className="font-bold text-lg">
                        <span className="italic">Ap. Rehoboth Fanaka</span>
                    </p>
                </div>
                <aside className="w-full md:w-[40%] p-4 md:h-[90vh]">
                    <img src="/welcome.jpg" alt="Leader" className="w-full h-full object-cover rounded-lg animate-fadeInUp" />
                </aside>
            </section>

            <hr className="w-48 h-1 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-700" />

            {/* Section 3 */}
            <section className="relative z-10 p-8 animate-slideIn">
                <div className="w-full max-w-4xl mx-auto p-6 bg-[#E48515] rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
                        <div>
                            <FontAwesomeIcon icon={faPersonPraying} className="text-4xl text-gray-700" />
                            <h3 className="mt-2 text-xl font-semibold text-gray-700">Prayers</h3>
                            <p className="mt-1 text-sm text-gray-600"><strong>Every</strong><br />Monday, Wednesday, Friday 11:00pm - 12midnight</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBook} className="text-4xl text-blue-600" />
                            <h3 className="mt-2 text-xl font-semibold text-blue-600">Bible Study</h3>
                            <p className="mt-1 text-sm text-gray-600"><strong>Every</strong><br /> Tuesday 9:00pm - 10:00pm</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faFire} className="text-4xl text-yellow-600" />
                            <h3 className="mt-2 text-xl font-semibold text-yellow-600">Teachings</h3>
                            <p className="mt-1 text-sm text-gray-600"><strong>Every</strong>< br/>Wednesday 9:00pm - 10:00pm</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHandshake} className="text-4xl text-green-600" />
                            <h3 className="mt-2 text-xl font-semibold text-green-600">Meetings</h3>
                            <p className="mt-1 text-sm text-gray-600"><strong>Every</strong><br />Sunday 9:00pm</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEarListen} className="text-4xl text-purple-600" />
                            <h3 className="mt-2 text-xl font-semibold text-purple-600">Ministers' Masterclass</h3>
                            <p className="mt-1 text-sm text-gray-600"><strong>Every</strong><br />Wednesday 9:00pm - 10:00pm</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
