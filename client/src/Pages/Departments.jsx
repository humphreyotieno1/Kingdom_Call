import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const DepartmentsPage = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const departments = [
        {
          title: "Music and Dance Ministry",
          content: " They help us fulfill our vision through inspiration of songs, sounds and even dances. We are careful to know that by a holy sound the walls of Jericho fell and the Lord's people overcame!",
        },
        {
          title: "Prayer",
          content: "This is the team that strategically leads us in the place of prayer cooperately. Our vision in itself is an excerpt of the Lord's template of prayer. We understand that men ough always to pray and not to faint. It is imperative that we pray without ceasing in  all understanding.",
        },
        {
          title: "Media",
          content: "They are responsible for our outreach through social media platform. They're responsible for our posters, videos, links, sites, pages and designs when it comes to merchandise. In our generation social media acts as a great platform for outreach. The young are more on the screen than in the physical.",
        },
        {
          title: "Hospitality ",
          content: "This comprises of ushers and protocol team. For order in our fellowships and in case someone has a concern , this is the team that's readily available to assist. They're the ones that also take care of us in terms of services like food during our physical Meetings. A good team this is!",
        },
        {
          title: "Word",
          content: "They make sure we are deep into the study of the word of God. We are careful to understand that man shall not live by bread alone but by every word that comes from the Lord. This is the team responsible for sharing devotions daily and also guiding us through Bible study and teachings.",
        },
        {
          title: "Welfare",
          content: "This is a team that comprises of men and women that check on our welfare. Way from emotional to psychological issues. They provide a wholistic over check on our well being. We are careful to understand that it is the will of God that we prosper even in good health.",
        },
    ];

    const cellgroups = [
        {
            title: "cell 1",
            content: "lorem ipsum",
        },
        {
            title: "cell2",
            content: "lorem ipsum",
        },
    ]

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };
    


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
            image: 'worship.jpg',
            title: 'Worship',
        }
    ];

    const NextArrow = ({onClick}) => (
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
        nextArrow: <NextArrow/>,
        prevArrow: <PreviousArrow/>,
    };


    return(
        <div className="flex flex-col items-center justify-center py-12 bg-[#ebebeb]">
            <div className="w-full py-4 bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
                <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">Departments</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl mt-8 px-4 md:px-0 mb-8">
                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <img src="/departments.jpg" alt="Departments image" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-3/4 order-1 md:order-2">
                    <div className="space-y-2">
                        {departments.map((department, index) => (
                        <div key={index} className="border border-gray-200 rounded">
                            <button
                            className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                            >
                            <span>{department.title}</span>
                            <span className="text-xl">
                                {openAccordion === index ? "-" : "+"}
                            </span>
                            </button>
                            {openAccordion === index && (
                            <div className="p-4 bg-gray-50">{department.content}</div>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl mt-8 px-2 md:px-0 mb-8">
                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <img src="/cell.jpg" alt="CellGroups image" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-3/4 order-1 md:order-2">
                    <div className="space-y-2">
                        {cellgroups.map((cellgroup, index) => (
                        <div key={index} className="border border-gray-200 rounded">
                            <button
                            className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                            >
                            <span>{cellgroup.title}</span>
                            <span className="text-xl">
                                {openAccordion === index ? "-" : "+"}
                            </span>
                            </button>
                            {openAccordion === index && (
                            <div className="p-4 bg-gray-50">{cellgroup.content}</div>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Carousel Component */}
            <div className="w-full md:max-w-5xl mt-8 px-4 mb-8">
                <Slider {...settings}>
                    {carouselItems.map((item, index) => (
                        <div key={index} className="px-2">
                            <img src={item.image} alt={`carousel-item-${index}`} className="w-full h-82 object-cover rounded" />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
      </div>
    )
}

export default DepartmentsPage;