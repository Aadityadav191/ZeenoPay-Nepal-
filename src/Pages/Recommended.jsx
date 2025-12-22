import React from 'react'

export default function Recommended() {
    const websites = [
  { name: "ZenoShop", tag: "Fashion", url: "zenoshop.com" },
  { name: "PayStream", tag: "Gaming", url: "paystream.io" },
  { name: "CloudHost", tag: "Tech", url: "chost.net" },
  { name: "EcoMarket", tag: "Groceries", url: "ecomarket.com" }
];
  return (
    <>
      <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-1">Recommended Sites</h1>
      <p className="text-sm text-gray-500 mb-6">Securely spend your Zeenopay balance.</p>

      <div className="grid gap-3">
        {websites.map((site) => (
          <a key={site.name} href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
            <div>
              <div className="font-bold text-gray-900">{site.name}</div>
              <div className="text-xs text-blue-600 font-medium uppercase tracking-tight">{site.tag}</div>
            </div>
            <div className="text-gray-300">→</div>
          </a>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-600 rounded-xl text-white text-center">
        <p className="text-xs opacity-80 uppercase font-bold">Merchant Hub</p>
        <p className="text-sm mt-1 mb-3">Accept Zeenopay on your site.</p>
        <button className="bg-white text-blue-600 text-sm font-bold px-4 py-2 rounded-lg">Get Started</button>
      </div>
    </div>

    </>
  )
}
