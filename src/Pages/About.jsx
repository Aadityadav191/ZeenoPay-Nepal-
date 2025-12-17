import React from 'react'
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-extrabold text-indigo-500 mb-6">About ZeenoPay Nepal 🫰</h1>
          <p className="text-lg text-gray-700 mb-4">
            At ZeenoPay Nepal, we are dedicated to providing top-notch e-commerce solutions tailored to the unique needs of businesses in Nepal. Our mission is to empower local entrepreneurs and businesses by offering a seamless online shopping experience that connects them with customers across the country.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 2020, ZeenoPay Nepal has quickly grown to become a trusted name in the e-commerce industry. We pride ourselves on our user-friendly platform, secure payment gateways, and exceptional customer service. Our team is passionate about helping businesses thrive in the digital age by providing them with the tools and support they need to succeed online.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Whether you're a small business owner looking to expand your reach or a large enterprise seeking to enhance your online presence, ZeenoPay Nepal is here to help. Join us on our journey to revolutionize e-commerce in Nepal and take your business to new heights.
          </p>
          <p className="text-lg text-gray-700 bg-indigo-100 p-4 rounded-lg hover:bg-indigo-300 transition">
            Thank you for choosing ZeenoPay Nepal – where your business meets endless possibilities!
          </p>
        </div>
      </div>

    </>
  )
}
