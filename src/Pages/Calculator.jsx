import React, { useState } from "react";

const EXCHANGE_RATE = 1.65;
const SHIPPING_PER_KG = 298.32;
const DUTY_RATE = 0.72;

export default function Calculator() {
  const [showEstimate, setShowEstimate] = useState(false);
  const [formData, setFormData] = useState({
    itemPrice: 0,
    weight: 0,
    quantity: 0,
    category: "Computer casing",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "category" ? value : Number(value),
    }));
  };

  const totalWeight = formData.weight * formData.quantity;
  const itemValueNPR = formData.itemPrice * formData.quantity * EXCHANGE_RATE;
  const shippingNPR = totalWeight * SHIPPING_PER_KG;
  const dutiesNPR = itemValueNPR * DUTY_RATE;
  const totalNPR = itemValueNPR + shippingNPR + dutiesNPR;
  const roundedTotal = Math.floor(totalNPR / 10) * 10;

  const formatNPR = (num) =>
    `NPR ${num.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  return (
    <main className=" min-h-screen bg-gray-50 ">
      <div className="bg-white border-b mb-10 ">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-[#3e8ff5] mb-4">Estimate Your Landed Cost </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Enter your item details to see duties, shipping, and fees before you
          order.
          </p>
        </div>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* LEFT — Calculator */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border">
          <h2 className="text-2xl font-bold mb-6">Cost Calculator</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Ship from
              </label>
              <select className="w-full p-3 bg-gray-50 border rounded-xl">
                <option>India (INR)</option>
                <option>United State (USD)</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <InputField
                label="Item price (₹)"
                name="itemPrice"
                value={formData.itemPrice}
                onChange={handleChange}
              />
              <InputField
                label="Weight (kg)"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
              />
              <InputField
                label="Quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Product category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 border rounded-xl"
              >
                <option>Computer casing</option>
                <option>Motherboard</option>
                <option>Processor (CPU)</option>
                <option>Graphics Card (GPU)</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowEstimate(true)}
                className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
              >
                Get estimate
              </button>
            </div>
          </div>
        </div>
         {/* Right — Calculator */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border space-y-6">
          <h2 className="text-2xl font-bold">Estimate</h2>

          {!showEstimate ? (
            <div className="bg-indigo-50 p-5 rounded-xl text-center border">
              <p className="text-gray-500 text-sm ">
                Calculate to see the delivered total in NPR.
              </p>
            </div>
          ) : (
            <>
              <div className="bg-[#bbcef5] p-6 rounded-2xl text-center">
                <p className="text-xs font-bold text-indigo-600 mb-2">
                  ESTIMATED TOTAL
                </p>
                <h1 className="text-4xl font-extrabold">
                  {formatNPR(roundedTotal)}
                </h1>
              </div>

              <div className="space-y-2 text-sm">
                <ResultRow label="Item Value" value={formatNPR(itemValueNPR)} />
                <ResultRow label="Shipping" value={formatNPR(shippingNPR)} />
                <ResultRow label="Duties" value={formatNPR(dutiesNPR)} />
                <hr />
                <ResultRow label="Total" value={formatNPR(totalNPR)} bold />
              </div>

              <div className="bg-gray-50 p-4 rounded-xl text-xs space-y-1">
                <ResultRow label="Weight" value={`${totalWeight} kg`} />
                <ResultRow label="Exchange Rate" value={EXCHANGE_RATE} />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-sm font-semibold mb-2">{label}</label>
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-gray-50 border rounded-xl"
    />
  </div>
);

const ResultRow = ({ label, value, bold }) => (
  <div className={`flex justify-between ${bold ? "font-bold" : ""}`}>
    <span>{label}</span>
    <span>{value}</span>
  </div>
);
