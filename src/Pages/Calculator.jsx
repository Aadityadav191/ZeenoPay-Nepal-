import React, { useState } from "react";

export default function Calculator() {
  const [showEstimate, setShowEstimate] = useState(false);
  const [formData, setFormData] = useState({
    itemPrice: 0,
    weight: 1,
    quantity: 1,
    category: "Computer casing",
  });

  const EXCHANGE_RATE = 1.65;
  const SHIPPING_PER_KG = 298.32;
  const DUTY_RATE = 0.72;

  const calculateResults = () => {
    const totalWeight = formData.weight * formData.quantity;
    const itemValueINR = formData.itemPrice * formData.quantity;
    const itemValueNPR = itemValueINR * EXCHANGE_RATE;
    const shippingNPR = totalWeight * SHIPPING_PER_KG;
    const dutiesNPR = itemValueNPR * DUTY_RATE;
    const totalNPR = itemValueNPR + shippingNPR + dutiesNPR;

    return {
      itemValueNPR,
      shippingNPR,
      dutiesNPR,
      totalNPR,
      totalWeight,
      roundedTotal: Math.floor(totalNPR / 10) * 10,
    };
  };

  const results = calculateResults();

  return (
    <main className="p-10 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-4xl font-semibold text-[#3f88f4] mb-2">
          Estimate your landed cost to Nepal
        </h1>
        <p className="text-gray-600">
          Enter your item details to see duties, shipping, and fees before you
          order.
        </p>
      </section>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* LEFT — Calculator */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border">
          <h2 className="text-2xl font-bold mb-6">Cost Calculator</h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Ship from
              </label>
              <select className="w-full p-3 bg-gray-50 border rounded-xl">
                <option>United State (USD)</option>
                <option>India (INR)</option>
                <option>Nepal (NPR)</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Item price (₹)
                </label>
                <input
                  type="number"
                  value={formData.itemPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, weight: +e.target.value })
                  }
                  className="w-full p-3 bg-gray-50 border rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Weight (lbs)
                </label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: +e.target.value })
                  }
                  className="w-full p-3 bg-gray-50 border rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: +e.target.value })
                  }
                  className="w-full p-3 bg-gray-50 border rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Product category
              </label>
              <select className="w-full p-3 bg-gray-50 border rounded-xl">
                <option>Select your product</option>
                <option>Computer casing</option>
                <option>Motherboard</option>
                <option>Processor (CPU)</option>
                <option>Graphics Card (GPU)</option>
                <option>RAM</option>
                <option>SSD</option>
                <option>Monitor</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowEstimate(true)}
                className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
              >
                Get estimate
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT — Estimate (ALWAYS VISIBLE) */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border space-y-6">
          <h2 className="text-2xl font-bold">Estimate</h2>

          {/* Placeholder */}
          <div className="bg-gray-50 p-5 rounded-xl text-center border">
            <p className="text-gray-500 text-sm">
              Calculate to see the delivered total in NPR.
            </p>
          </div>

          {/* Results */}
          {showEstimate && (
            <>
              <div className="bg-[#bbcef5] p-6 rounded-2xl text-center">
                <p className="text-xs font-bold text-indigo-600 mb-2">
                  ESTIMATED TOTAL
                </p>
                <h1 className="text-4xl font-extrabold">
                  NPR {results.roundedTotal.toLocaleString()}
                </h1>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Item Value</span>
                  <span>NPR {results.itemValueNPR.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>NPR {results.shippingNPR.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duties</span>
                  <span>NPR {results.dutiesNPR.toLocaleString()}</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>NPR {results.totalNPR.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl text-xs">
                <div className="flex justify-between">
                  <span>Weight</span>
                  <span>{results.totalWeight} kg</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Exchange Rate</span>
                  <span>{EXCHANGE_RATE}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
