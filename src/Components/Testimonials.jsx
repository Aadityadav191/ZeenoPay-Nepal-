import React from "react";
import { Star, Quote, Box, MapPin } from "lucide-react";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Mr. Aadit Yadav ",
      location: "Kathmandu",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFSR3fAsFZFzA/profile-displayphoto-crop_800_800/B56ZtaGxDuKEAI-/0/1766743282571?e=1769040000&v=beta&t=QTfdB4VS6Dy1DpGI98P9BGQho2dOIWPJB7Qx4ydfYw8",
      product: 'MacBook Pro 16"',
      text: "I purchased a MacBook Pro through their service. The process was seamless, and the laptop arrived in perfect condition. Highly recommend!",
    },
    {
      name: "Miss. Sita Gurung",
      location: "Pokhara",
      image:
        "https://i.pravatar.cc/150?u=rajesh",
      product: "Cosmetics Bulk Order",
      text: "I ordered a bulk of cosmetics for my salon. The team was very helpful, and the products were authentic and delivered on time. Will order again!",
    },
    {
      name: "Rajesh Kumar",
      location: "Chitwan",
      image: "https://i.pravatar.cc/150?u=rajesh",
      product: "Camera & Lenses",
      text: "First time ordering from abroad. The team guided me through every step. My camera gear arrived safely and quickly. Will use again!",
    },
    {
      name: "Rajesh Kumar",
      location: "Chitwan",
      image: "https://i.pravatar.cc/150?u=rajesh",
      product: "Camera & Lenses",
      text: "First time ordering from abroad. The team guided me through every step. My camera gear arrived safely and quickly. Will use again!",
    },
    {
      name: "Mr.Rajesh Kumar",
      location: "Chitwan",
      image: "https://i.pravatar.cc/150?u=rajesh",
      product: "Camera & Lenses",
      text: "First time ordering from abroad. The team guided me through every step. My camera gear arrived safely and quickly. Will use again!",
    },
    {
      name: "Rajesh Kumar",
      location: "Chitwan",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFSR3fAsFZFzA/profile-displayphoto-crop_800_800/B56ZtaGxDuKEAI-/0/1766743282571?e=1769040000&v=beta&t=QTfdB4VS6Dy1DpGI98P9BGQho2dOIWPJB7Qx4ydfYw8",
      product: "Camera & Lenses",
      text: "First time ordering from abroad. The team guided me through every step. My camera gear arrived safely and quickly. Will use again!",
    },
  ];
  return (
    <>
      <section className="px-4">
        <div className=" max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-center mb-3 text-gray-800">
            Loved by <span className="text-green-500">Thousands</span> of
            Shoppers
          </h2>
          <p className=" text-gray-800">
            See what our customers say about their shopping experience
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#fefefe] to-[#f9fbfc] p-8 rounded-[24px] shadow-sm border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <Quote
                className="text-emerald-100 mb-2 rotate-180 transition-transform group-hover:scale-110"
                size={32}
                strokeWidth={3}
              />

              <p className="text-slate-700 font-medium leading-relaxed mb-6 italic text-[15px]">
                {item.text}
              </p>

              <div className="mt-auto mb-6">
                <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-[11px] font-bold px-3 py-1.5 rounded-lg border border-emerald-100/50">
                  <Box size={12} />
                  Ordered: {item.product}
                </span>
              </div>

              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin size={10} className="text-gray-300" />{" "}
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
