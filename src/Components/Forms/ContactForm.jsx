import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,15}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = {};

    // 1. Check Name
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required*";
      isValid = false;
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    // 2. Check Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required*";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // 3. Check Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required*";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number (10 digits Required)";
      isValid = false;
    }

    
    setErrors(newErrors);

    // 4. Final Decision
    if (isValid) {
      alert("Form submitted successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const getInputClass = (fieldName) => {
    if (errors[fieldName]) {
      return "border rounded-lg px-5 py-3 mt-1 text-sm w-full bg-[#f7fafc] outline-none transition-all border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200";
    }
    return "border rounded-lg px-5 py-3 mt-1 text-sm w-full bg-[#f7fafc] outline-none transition-all border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-blue-500";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative mx-auto max-w-lg sm:max-w-3xl text-left rounded-lg">
          <div className="relative md:mx-0 rounded-3xl sm:p-2">
            <div className="max-w-full">
              <div className="sm:grid-cols-2 gap-x-6 gap-y-4">
                {/* Full Name Field */}
                <div className="col-span-1 mb-2">
                  <label
                    className="font-semibold text-sm text-gray-600 pb-1"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className={getInputClass("name")}
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-left text-red-500 text-xs mt-1 ml-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="col-span-1 mb-2">
                  <label
                    className="font-semibold text-sm text-gray-600 pb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className={getInputClass("email")}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Youremail@gmail.com"
                  />
                  {errors.email && (
                    <p className="text-left text-red-500 text-xs mt-1 ml-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number Field */}
                <div className="col-span-1 mb-2">
                  <label
                    className="font-semibold text-sm text-gray-600 pb-1 w-full"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <div className="w-full">
                    <input
                      className={getInputClass("phone")}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+977 984XXXXXXXX"
                    />
                    {errors.phone && (
                      <p className="text-left text-red-500 text-xs mt-1 ml-2">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="hidden sm:block"></div>
              </div>

              {/* Message/Textarea */}
              <div className="flex flex-col text-left justify-center mt-4">
                <h1 className="font-semibold text-sm text-gray-600 mb-2">
                  How can we help?
                </h1>
                <textarea
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 bg-[#f7fafc] outline-none"
                  name="message"
                  rows="7"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="m-4">
                <button
                  className="py-3 px-4 bg-[#20c55e] hover:bg-green-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}