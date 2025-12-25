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
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-xl font-bold mb-1">Recommended Sites</h1>
        <p className="text-sm text-gray-500 mb-6">
          Securely spend your Zeenopay balance.
        </p>

        <div className="grid gap-3">
          {websites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-indigo-100 transition-all border border-transparent hover:border-gray-200"
            >
              <div className="flex items-center gap-4">
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
