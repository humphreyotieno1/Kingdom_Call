import React from 'react';

const PrayerRequestPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#ebebeb]">
      <div className="w-full bg-gradient-to-b from-[#e48515] to-[#ebebeb] py-10">
        <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">
          Prayer Request
        </h1>
      </div>
      <div className="w-full py-20 mb-8 px-4 md:px-16 lg:px-32 mx-4 md:mx-20 lg:mx-40">
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 h-full">
          <div className="bg-gray-300 w-full h-80 md:h-96 flex justify-center">
            <img src="./path.jpeg" alt="prayer request image" className="w-full h-full object-cover" />
          </div>
          <div className="w-full p-6 rounded shadow-lg h-full md:h-96 flex flex-col justify-between"> {/* Adjusted height */}
            <form className="flex flex-col h-full justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Full Name" className="border border-[#E48515] p-2 rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"/>
                <input type="text" placeholder="Phone number" className="border border-[#E48515] p-2 rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"/>
              </div>
              <input type="email" placeholder="Email" className="border border-[#E48515] p-2 w-full rounded mb-4 focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"/>
              <textarea placeholder="Your Message..." className="border border-[#E48515] p-2 w-full rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm h-20 md:h-32 lg:h-40"></textarea> {/* Increased height */}
              <button type="submit" className="bg-gray-700 hover:bg-black hover:text-white transition text-white p-2 rounded w-full mt-4 mb-2">Submit</button> {/* Adjusted margin */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrayerRequestPage;