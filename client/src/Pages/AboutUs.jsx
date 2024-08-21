import React from "react";
import { useNavigate } from "react-router-dom";


const AboutUsPage = () => {
    const navigate = useNavigate();


  return (
    <div className="flex flex-col items-center justify-center py-12 bg-[#ebebeb]">
        <div className="w-full py-4 bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
            <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">About Us</h1>
        </div>
      
      <p className="text-center text-gray-700 max-w-md mb-8">
       We are an international and interdenominational ministry majorly of the youth thoroughly invested in seeing the Kingdom of God established in the hearts of men and women on earth. We also welcome even the old.
      </p>
      <div className="flex justify-center">
        <button 
         onClick={() => navigate("/about-us/who-we-are")}
         className="text-black border border-[#E48515] px-4 py-2 rounded-lg hover:bg-[#E48515] hover:text-white transition mb-4">
         Learn More <span className="text-3xl"> → </span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4 md:px-8">
        <div className="border border-[#E48515] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-black mb-2 text-center">What we believe</h2>
          <p className="text-gray-700 mb-4 text-center">We believe in God. We believe in the Dominion of Christ given to us to occupy until He comes!</p>
          <div className="flex justify-center">
          <button 
            onClick={() => navigate("/about-us/what-we-believe")}
            className="text-black border border-[#E48515] px-4 py-2 rounded-lg hover:bg-[#E48515] hover:text-white transition">
            Discover
          </button>
          </div>
          
        </div>

        <div className="border border-[#E48515] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-black mb-2 text-center">Our Values</h2>
          <p className="text-gray-700 mb-4 text-center">Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nec ut commodo</p>
          <div className="flex justify-center">
            <button 
             onClick={()=> navigate("/about-us/values")}
             className="text-black border border-[#E48515] px-4 py-2 rounded-lg hover:bg-[#E48515] hover:text-white transition">
             Learn More
            </button>
          </div>
        </div>

        <div className="border border-[#E48515] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-black mb-2 text-center">Purpose</h2>
          <p className="text-gray-700 mb-4 text-center">Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nec ut commodo</p>
          <div className="flex justify-center">
            <button 
             onClick={()=> navigate("/about-us/purpose")}
             className="text-black border border-[#E48515] px-4 py-2 rounded-lg hover:bg-[#E48515] hover:text-white transition">
             Read More
            </button>
          </div>
        </div>

        <div className="border border-[#E48515] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-black mb-2 text-center">Our Story</h2>
          <p className="text-gray-700 mb-4 text-center">Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nec ut commodo</p>
          <div className="flex justify-center">
            <button 
             onClick={() => navigate("/about-us/our-story")}
             className="text-black border border-[#E48515] px-4 py-2 rounded-lg hover:bg-[#E48515] hover:text-white transition">
             Read More
            </button>
          </div>
        </div>

        <div className="border border-[#E48515] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-black mb-2 text-center">Departments</h2>
          <p className="text-gray-700 mb-4 text-center">Learn about our departments and meet our wonderful department heads. </p>
          <div className="flex justify-center">
            <button
             onClick={() => navigate("/departments")} 
             className="text-black border border-[#E48515] px-4 py-2 rounded-lg hover:bg-[#E48515] hover:text-white transition">
             Learn More
            </button>
          </div>
        </div>

        <div className="border border-[#E48515] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-black mb-2 text-center">Leadership</h2>
          <p className="text-gray-700 mb-4 text-center">Meet our leaders...</p>
          <div className="flex justify-center">
            <button 
             onClick={() => navigate("/about-us/leadership")}
             className="text-black border border-[#E48515] px-4 py-2 rounded-lg hover:bg-[#E48515] hover:text-white transition">
             View Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
