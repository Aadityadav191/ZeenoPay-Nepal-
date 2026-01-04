import React from "react";
import { Search, Globe, CheckCircle2 } from "lucide-react";

const OrderCard = () => {
  const platforms = [
    { name: "Amazon US", icon: "a",color: "bg-blue-600" },
    { name: "Amazon UK", icon: "a" ,color: "bg-green-600"},
    { name: "Amazon Japan", icon: "a" ,color: "bg-red-600"},
    { name: "eBay", icon: "e", color: "bg-red-600" },
    { name: "AliExpress", icon: "A", color: "bg-red-500" },
    { name: "Walmart", icon: "W", color: "bg-blue-600" },
    { name: "Target", icon: "O", color: "bg-red-700" },
    { name: "Best Buy", icon: "B", color: "bg-blue-700" },
  ];

  return (
    <div className="min-h-20 bg-gray-50 flex items-center justify-center p-4 ">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 ">
        {/* Header */}
        <div className="mb-5 text-left">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">
            Start Your Order
          </h1>
          <p className="text-gray-500 text-sm">
            Paste any international product link
          </p>
        </div>

        {/* Search Input Area */}
        <div className="relative w-full mb-8 group">
          <div className="relative flex items-center">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="https://www.amazon.com/product"
              className="w-full pl-14 pr-44 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-gray-600 placeholder:text-gray-300 shadow-sm"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-600 text-white px-4 rounded-2xl  font-small flex items-center gap-2 transition-all active:scale-95 shadow-lg text-sm">
              Get Quote
              <span className="text-xl font-light">→</span>
            </button>
          </div>
        </div>

        {/* Supported Platforms Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-slate-600">
            <Globe size={16} className="text-gray-400" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Supported Platforms
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-2 py-2 border border-gray-100 rounded-lg hover:shadow-md transition-shadow hover:border-emerald-400 cursor-pointer bg-white text-"
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center text-white text-[10px] font-bold ${
                    platform.color || "bg-black"
                  }`}
                >
                  {platform.icon}
                </div>
                <span className="text-sm font-small text-slate-700 whitespace-nowrap">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Features */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 pt-3 border-t border-gray-50">
          <FeatureItem label="No Hidden Fees" />
          <FeatureItem label="Real-time Tracking" />
          <FeatureItem label="24/7 Support" />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ label }) => (
  <div className="flex items-center gap-2">
    <div className="bg-emerald-100 p-0.5 rounded-full">
      <CheckCircle2 className="w-4 h-4 text-emerald-500" strokeWidth={3} />
    </div>
    <span className="text-sm font-medium text-slate-600">{label}</span>
  </div>
);

export default OrderCard;
