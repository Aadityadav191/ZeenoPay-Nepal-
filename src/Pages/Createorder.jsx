import React, { useState } from "react";
import { Plus, Info, HelpCircle } from "lucide-react"; 

const Createorder = () => {
  const maxChars = 500;
  const [products, setProducts] = useState([{
    id: 1, 
    notes: "", 
    location: "India (INR)", 
    productLink: "", 
    title: "", 
    quantity: 1, 
    unitPrice: "", 
    unitWeight: ""
  }]);
  
  const handleInputChange = (id, field, value) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, [field]: value } : product
    ));
  };
  
  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      notes: "",
      location: "India (INR)",
      productLink: "",
      title: "",
      quantity: 1,
      unitPrice: "",
      unitWeight: ""
    };
    setProducts([...products, newProduct]);
  };

  return (
    <>
      <div className="bg-white border-b mb-10 ">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-[#3e8ff5] mb-4">Create a concierge order </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your item links or prices and we'll purchase, ship, and deliver to Nepal. You'll see a quote before paying.
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-600">
        <div className="max-w-7xl mx-auto space-y-6">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-8 mb-6">
              <header className="mb-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-600 uppercase">
                  Item {index + 1}
                </span>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">Product location</label>
                  <select
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:[#38b5fe] outline-none transition-all"
                    value={product.location}
                    onChange={(e) => handleInputChange(product.id, "location", e.target.value)}
                  >
                    <option>India (INR)</option>
                    <option>USA (USD)</option>
                    <option>Nepali (NPR)</option>

                  </select>
                </div>


                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">Product link</label>
                  <input
                    type="text"
                    placeholder="https://www.daraj.com/product"
                    value={product.productLink}
                    onChange={(e) => handleInputChange(product.id, "productLink", e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:[#38b5fe] outline-none"
                  />
                </div>


                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-700">Product title (optional)</label>
                  <input
                    type="text"
                    placeholder="Optional product name"
                    value={product.title}
                    onChange={(e) => handleInputChange(product.id, "title", e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:[#38b5fe] outline-none"
                  />
                </div>


                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">Quantity</label>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleInputChange(product.id, "quantity", parseInt(e.target.value, 10))}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:[#38b5fe] outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700">Unit price (INR)</label>
                    <input
                      type="text"
                      value={product.unitPrice}
                      onChange={(e) => handleInputChange(product.id, "unitPrice", e.target.value)}
                      placeholder="0.00"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700">Unit weight (kg)</label>
                    <input
                      type="text"
                      value={product.unitWeight}
                      onChange={(e) => handleInputChange(product.id, "unitWeight", e.target.value)}
                      placeholder="0.0"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-700">Notes for our team (optional)</label>
                  <textarea
                    value={product.notes}
                    onChange={(e) => handleInputChange(product.id, "notes", e.target.value.slice(0, maxChars))}
                    placeholder="Colour, size, special instructions"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-3xl min-h-[120px] focus:ring-2 focus:[#38b5fe] outline-none resize-none"
                  />
                  <div className="text-[11px] text-slate-400 font-medium">
                    {product.notes.length}/{maxChars} characters
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-white rounded-full shadow-sm border border-slate-100 p-3 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <span className="text-[10px] font-bold text-slate-700 uppercase">
                  {products.length} Item{products.length > 1 ? 's' : ''} in quote
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                Add separate
                <span className="text-slate-700 font-semibold">
                  a single quote for all products
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={addProduct} 
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 text-[11px] font-bold uppercase text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <Plus size={16} /> Add Product
              </button>
              <div className="relative group">
                <button className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white px-8 py-2.5 rounded-full text-[11px] font-bold uppercase transition-all shadow-lg shadow-indigo-100">
                  Submit order request
                </button>
                <span className="absolute -bottom-6 right-0 w-max text-[10px] text-amber-500 font-medium opacity-80">
                  Add at least two products to create a combined quote.
                </span> 
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Createorder;
