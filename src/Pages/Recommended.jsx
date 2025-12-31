import React, { useEffect } from "react";

export default function Recommended() {
  const websites = [
    {
      name: "ZenoShop",
      tag: "Fashion",
      url: "https://iwishbag.com/",
      image: "https://iwishbag.com/_next/image?url=%2Flogo.png&w=384&q=75",
    },
    {
      name: "PayStream",
      tag: "Gaming",
      url: "https://iwishbag.com/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkngrs_m0jCnh0LlTkAKWjooO-rjhx7PA2Q&s",
    },
    {
      name: "CloudHost",
      tag: "Tech",
      url: "https://iwishbag.com/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ584acfWMPuHP7nRm1z5_Yt5zLmKyGrANsQ&s",
    },
    {
      name: "EcoMarket",
      tag: "Groceries",
      url: "https://iwishbag.com/",
      image:
        "https://img.freepik.com/premium-vector/abstract-logo-design-any-corporate-business-company_1253202-70388.jpg",
    },
     {
      name: "ZenoShop",
      tag: "Fashion",
      url: "https://iwishbag.com/",
      image: "https://iwishbag.com/_next/image?url=%2Flogo.png&w=384&q=75",
    },
    {
      name: "PayStream",
      tag: "Gaming",
      url: "https://iwishbag.com/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkngrs_m0jCnh0LlTkAKWjooO-rjhx7PA2Q&s",
    },
    {
      name: "CloudHost",
      tag: "Tech",
      url: "https://iwishbag.com/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ584acfWMPuHP7nRm1z5_Yt5zLmKyGrANsQ&s",
    },
    {
      name: "EcoMarket",
      tag: "Groceries",
      url: "https://iwishbag.com/",
      image:
        "https://gingersauce.co/wp-content/uploads/2020/12/pasted-image-0-2-3-1024x950.png",
    },
     {
      name: "ZenoShop",
      tag: "Fashion",
      url: "https://iwishbag.com/",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/best-logo-design-for-business%2C-brand%2C-company-template-24667e5c1a9cf99ce699bb206f505f81_screen.jpg?ts=1645916704",
    },
    {
      name: "PayStream",
      tag: "Gaming",
      url: "https://iwishbag.com/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkngrs_m0jCnh0LlTkAKWjooO-rjhx7PA2Q&s",
    },
    {
      name: "CloudHost",
      tag: "Tech",
      url: "https://iwishbag.com/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ584acfWMPuHP7nRm1z5_Yt5zLmKyGrANsQ&s",
    },
    {
      name: "EcoMarket",
      tag: "Groceries",
      url: "https://iwishbag.com/",
      image:
        "https://img.freepik.com/premium-vector/abstract-logo-design-any-corporate-business-company_1253202-70388.jpg",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto p-2 ">
       <div className="bg-white border-b mb-10 ">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-[#3e8ff5] mb-4">Recommended Sites</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
             Explore these trusted websites that seamlessly integrate Zeenopay for a secure and convenient shopping experience.
          </p>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {websites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-indigo-100 transition-all border border-transparent hover:border-gray-200"
            >
              <div className="flex items-center gap-4  ">
                <img
                  src={site.image}
                  alt={`${site.name} logo`}
                  className="w-12 h-12 rounded-lg object-cover bg-white shadow-sm"
                />
                <div>
                  <div className="font-bold text-gray-900">{site.name}</div>
                  <div className="text-xs text-blue-600 font-medium uppercase tracking-tight">
                    {site.tag}
                  </div>
                </div>
              </div>

              <div className="text-gray-300 font-bold text-lg">→</div>
            </a>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-[#36b6ff] to-indigo-600 rounded-xl text-white text-center">
          <p className="text-xs opacity-80 uppercase font-bold">Merchant Hub</p>
          <p className="text-sm mt-1 mb-3">Accept Zeenopay on your site.</p>
          <button className="bg-white text-blue-600 text-sm font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
