import React from "react";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0, 
      left: 0, 
      behavior: "smooth", 
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white  items-center justify-center ">
      <div className="bg-white border-b mb-10 ">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-extrabold text-[#3e8ff5] mb-6">
            About ZeenoPay Nepal 🫰
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We want you to love what you ordered. If you're not completely satisfied, 
            we've made our return process as simple as possible.
          </p>
        </div>
      </div>
       <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
  {/* Mission Card - Left Aligned */}
  <div className="group p-6 bg-white border-l-4 border-[#36b6ff] shadow-sm hover:shadow-md transition-all duration-300 rounded-r-2xl">
    <h3 className="text-[#36b6ff] font-bold uppercase tracking-wider text-sm mb-2">Our Mission</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      At <span className="font-semibold text-gray-900">ZeenoPay Nepal</span>, we are dedicated to providing top-notch
      e-commerce solutions tailored to the unique needs of businesses in
      Nepal. We empower local entrepreneurs by offering a <span className="bg-blue-50 px-1">seamless online shopping experience</span> that connects them with customers across the country.
    </p>
  </div>

  <div className="group p-6 bg-white border-r-4 border-indigo-600 shadow-sm hover:shadow-md transition-all duration-300 rounded-l-2xl text-right md:ml-20">
    <h3 className="text-[#3e8ff5] font-bold uppercase tracking-wider text-sm mb-2">Our Story</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      Founded in <span className="font-bold">2020</span>, ZeenoPay Nepal has quickly grown into a 
      trusted name. We pride ourselves on our <span className="italic">secure payment gateways</span> and 
      exceptional customer service, providing the tools businesses need to succeed in the digital age.
    </p>
  </div>

  <div className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl hover:border-indigo-200 transition-colors duration-500">
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      Whether you're a small business owner looking to expand your reach
      or a large enterprise seeking to enhance your online presence,
      ZeenoPay Nepal is here to help. Join us on our journey to
      <span className="text-[#3e8ff5] font-semibold"> revolutionize e-commerce in Nepal</span> and take your business to new heights.
    </p>
    
    <div className="inline-block w-full text-center md:text-left">
      <p className="inline-flex items-center gap-2 text-lg font-medium text-[#3e8ff5] bg-indigo-50 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all cursor-default shadow-sm">
        <span>✨</span>
        Thank you for choosing ZeenoPay Nepal – where your business meets endless possibilities!
      </p>
    </div>
  </div>
</div>
      </div>
    </>
  );
}
