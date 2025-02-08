import React from "react";

const Values = () => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 font-lato lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-orange-600 to-black">
                        <p className="text-xs font-semibold tracking-widest text-white uppercase">Our Core Values</p>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Mission & Vision</h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                        Empowering generations through God’s word, worship, and witness.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:mt-20 lg:gap-x-12">
                    {/* Vision Section */}
                    <div className="transition-all duration-200 bg-white hover:shadow-xl">
                        <div className="py-10 px-9">
                            <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <h3 className="mt-8 text-lg font-semibold text-black">Our Vision</h3>
                            <p className="mt-4 text-base text-gray-600 text-center">
                                "Your kingdom come. Your will be done on earth as it is in heaven."
                                <span className="italic"> - Matthew 6:10</span>
                            </p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="transition-all duration-200 bg-white hover:shadow-xl">
                        <div className="py-10 px-9">
                            <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            <h3 className="mt-8 text-lg font-semibold text-black">Our Mission</h3>
                            <ul className="mt-4 list-decimal list-inside space-y-4 text-base text-gray-600">
                                {missionStatements.map((statement, index) => (
                                    <li key={index}>
                                        {statement.text}
                                        <p className="mt-2 italic">{statement.verse}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const missionStatements = [
    {
        text: "A generation on fire for God in all seasons.",
        verse: "Acts 2:3 - 'Then, what looked like flames or tongues of fire appeared and settled on each of them.'"
    },
    {
        text: "A generation walking in the Truth.",
        verse: "John 14:6 - 'Jesus told him, 'I am the way, the truth, and the life. No one can come to the Father except through me.'"
    },
    {
        text: "A generation reaching out to witness about the risen King.",
        verse: "Mark 16:15 - 'And then he told them, 'Go into all the world and preach the Good News to everyone, everywhere.'"
    },
    {
        text: "A generation embracing intimacy with God through worship, prayer, and meditation.",
        verse: "Luke 18:1 - 'Then Jesus told his disciples a parable to show them that they should always pray and not give up.'"
    },
];

export default Values;