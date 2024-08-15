import React from "react";

const WhoWeArePage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 bg-[#ebebeb]">
            <div className="max-w-3xl mb-8 mt-20 border-2 border-[#E48515] p-6 rounded-lg">
                <h1 className="text-3xl font-bold text-center text-black mb-4">Our Vision</h1>
                <p className="text-lg text-gray-700 text-center">
                    "Your kingdom come. Your will be done on earth as it is in heaven." 
                    <span className="italic"> - Matthew 6:10</span>
                </p>
            </div>

            <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mt-4 border-2 border-[#E48515] p-8 rounded-lg mb-8">
                <h1 className="text-3xl font-bold text-center text-black mb-6">Our Mission</h1>
                <p className="text-lg text-gray-700 mb-4">
                    To raise:
                </p>
                <ul className="list-decimal list-inside space-y-6">
                    <li>
                        A generation that is genuinely on fire for God in all seasons.
                        <p className="mt-2">
                            <span className="italic">Acts 2:3</span> - "Then, what looked like flames or tongues of fire appeared and settled on each of them."
                        </p>
                        <p>
                            The Holy Ghost came upon the disciples of Jesus and settled on each of them. He didn't come for a while and left; He settled on them. 
                            It is our prayer that the generation we raise shall therefore not be a seasonal generation on fire for God but a generation burning for God until Christ returns.
                        </p>
                    </li>
                    <li>
                        A generation that not only knows the TRUTH but also walks in this TRUTH.
                        <p className="mt-2">
                            <span className="italic">John 14:6</span> - "Jesus told him, 'I am the way, the truth, and the life. No one can come to the Father except through me.'"
                        </p>
                        <p>
                            Jesus is the truth that we are talking about. Opinions are many, ideas are many, facts are all over, but the Truth is one; Jesus Christ.
                            We don't just want to know Jesus Christ, but we also want to walk in Him. We want to live a life that is worthy of His calling.
                        </p>
                    </li>
                    <li>
                        A generation that is ready to reach out and witness to the world about the risen King that they have encountered.
                        <p className="mt-2">
                            <span className="italic">Mark 16:15</span> - "And then he told them, 'Go into all the world and preach the Good News to everyone, everywhere.'"
                        </p>
                        <p>
                            We are not ashamed of Jesus Christ. We are not ashamed of the Gospel because it's the power of God unto salvation. We are more than delighted to witness to the world the Light that we've seen and handled.
                        </p>
                    </li>
                    <li>
                        A generation that embraces intimacy with God through intimate avenues of the spiritual realm like worship, prayer, and deep meditation of the word.
                        <p className="mt-2">
                            <span className="italic">Luke 18:1</span> - "Then Jesus told his disciples a parable to show them that they should always pray and not give up."
                        </p>
                        <p className="italic">
                            John 4:24 - "God is spirit, and his worshipers must worship in spirit and in truth."
                        </p>
                        <p className="italic">
                            Joshua 1:8 - "Do not let this Book of the Law depart from your mouth; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful."
                        </p>
                        <p>
                            Prayer, worship, and meditation are therefore our biggest tools of intimacy among many others.
                        </p>
                    </li>
                    <li>
                        A new breed of leaders with an unstoppable tenacity to impact, influence, and empower others through different mountains of influence.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WhoWeArePage;
