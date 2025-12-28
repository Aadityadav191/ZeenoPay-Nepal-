import React from 'react';
import { Book, Calculator, Truck, Shield, MessageCircle } from 'lucide-react';

export default function GuidesPage() {
  const guideList = [
    {
      title: "Cost Calculator Guide",
      desc: "Learn to estimate total costs including duties and shipping.",
      icon: <Calculator className="text-blue-500" />,
      tag: "Tools"
    },
    {
      title: "Customs & Taxes",
      desc: "A simple breakdown of Nepal's import tax rules.",
      icon: <Shield className="text-indigo-500" />,
      tag: "Legal"
    },
    {
      title: "Shipping Process",
      desc: "How we move your items from India to your doorstep.",
      icon: <Truck className="text-blue-600" />,
      tag: "Logistics"
    },
    {
      title: "Payment Help",
      desc: "Step-by-step guide to paying via eSewa, Khalti, or Bank.",
      icon: <Book className="text-indigo-600" />,
      tag: "Payments"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto  py-5">
     <div className="bg-white border-b mb-5">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-[#3e8ff5] mb-4">User Guides</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Everything you need to know about using ZeenoPay.
          </p>
        </div>
      </div>


      <div className="grid gap-6">
        {guideList.map((guide, i) => (
          <div key={i} className="flex items-center p-5 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group">
            <div className="bg-gray-100 p-3 rounded-xl group-hover:bg-white transition-colors">
              {guide.icon}
            </div>
            
            <div className="ml-5 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[#3e8ff5]">{guide.title}</h3>
                <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full uppercase font-bold tracking-tighter">
                  {guide.tag}
                </span>
              </div>
              <p className="text-sm text-gray-600">{guide.desc}</p>
            </div>

            <div className="text-gray-400 group-hover:text-blue-500 font-bold px-2">
              →
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-indigo-50 rounded-2xl flex items-center justify-between">
        <div>
          <h4 className="font-bold text-indigo-900 text-lg">Still stuck?</h4>
          <p className="text-indigo-700 text-sm">Our team is ready to help you manually.</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition">
          <MessageCircle size={18} />
          Chat Now
        </button>
      </div>
    </div>
  );
}