import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="pt-10 bg-orange-400 2xl:py-24 2xl:bg-white sm:pt-16 md:pt-0 font-lato">
            <div className="px-4 pb-4 pt-4 mx-auto rounded-md bg-gradient-to-b from-[#ee942e] to-[#ebebeb] max-w-7xl sm:px-6 lg:px-8">
                <div className="2xl:pl-24">
                    <div className="grid grid-cols-1 md:mt-2 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                        <div className="text-center md:py-16 xl:py-24 md:text-left">
                            <blockquote>
                                <p className="text-2xl font-semibold leading-relaxed text-gray-900">
                                    “Greetings and Praise the Lord! A good welcome to this space as we inform you about Kingdom Call, a ministry primarily for the young but also welcoming all ages. Our desire is to see the Kingdom of Heaven established on earth and in the hearts of men and women.”
                                </p>
                            </blockquote>
                            <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                                <p className="text-base font-semibold text-gray-900">Ap. Rehoboth Fanaka</p>
                                <p className="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">Founder & Leader</p>
                            </div>
                            <p className="mt-12 text-base text-gray-900 lg:mt-20">You are highly welcome to join us</p>
                            <a href="/contact" title="" className="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80" role="button">
                                Get Started
                            </a>
                        </div>

                        <div className="relative md:mt-6">
                            <Image
                                src="/welcome.jpg"
                                alt="Leader"
                                layout="responsive"
                                width={800}
                                height={800}
                                className="md:absolute pb-2 md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20 rounded-lg"
                                priority
                                srcSet="/welcome-small.jpg 480w, /welcome-medium.jpg 800w, /welcome.jpg 1200w"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;