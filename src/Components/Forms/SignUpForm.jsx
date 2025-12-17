import React, { useState } from "react";
import { Link } from "react-router-dom";
import viteLogo from "../../assets/vite.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });

    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = {};

    // Full Name Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required*";
      isValid = false;
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
      isValid = false;
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required*";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password Validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required*";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    // Confirm Password Validation
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required*";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
       toast.success(`Account Created Successfully ${formData.fullName}`);
    }
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      newsletter: false,
    });
  };

  const getInputClass = (fieldName) => {
    return `border rounded-full px-4 py-3 mt-1 mb-1 text-sm w-full focus:ring-2 bg-[#f7fafc] outline-none transition-all ${
      errors[fieldName]
        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
        : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
    }`;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <img
            className="mx-auto w-16 h-auto mb-5 rounded-full"
            src={viteLogo}
            alt="Zeenopay Logo"
          />
          <div className="relative px-4 py-5 bg-[#f7fafc] mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className=" mx-auto">
              <h1 className="font-bold text-3xl text-indigo-500">
                Sign Up for Zeenopay
              </h1>
            </div>
            <div>
              <div className="mt-5">
                <label
                  className="font-semibold text-l text-gray-600 pb-1 block text-left"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className={getInputClass("fullName")}
                  type="text"
                  placeholder="Pramit Bakhrel"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="text-left text-red-500 text-xs mt-1 ml-2 mb-4">
                    {errors.fullName}
                  </p>
                )}

                <label
                  className="font-semibold text-l text-gray-600 pb-1 block text-left"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className={getInputClass("email")}
                  type="text"
                  placeholder="Pramitbakhrel@gmail.com"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-left text-red-500 text-xs mt-1 ml-2 mb-4">
                    {errors.email}
                  </p>
                )}

                <label
                  className="font-semibold text-l text-gray-600 pb-1 block text-left"
                  htmlFor="password"
                >
                  Create Password
                </label>
                <input
                  className={getInputClass("password")}
                  type="password"
                  placeholder="*******"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-left text-red-500 text-xs mt-1 ml-2 mb-4">
                    {errors.password}
                  </p>
                )}

                <label
                  className="font-semibold text-l text-gray-600 pb-1 block text-left"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className={getInputClass("confirmPassword")}
                  type="password"
                  placeholder="*******"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="text-left text-red-500 text-xs mt-1 ml-2 mb-4">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="text-left mb-4 ">
                <input
                  type="checkbox"
                  className="mr-2"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
                <label className="text-sm " htmlFor="newsletter">
                  Send me product updates, offers, and shipping tips.
                </label>
              </div>

              <div className="mt-1 mb-4">
                <button
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                  type="submit"
                >
                  Create Account
                </button>
              </div>

              <div className="flex items-center justify-center  mt-4">
                <span className="text-md text-gray-600 text-center text-sm">
                  Already a member ?
                </span>
                <Link to="/login">
                  <a className="text-m text-indigo-500 font-bold px-2  hover:underline text-center">
                    Sign in here
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/">
            <button className="mt-4 py-2 px-4 bg-indigo-300 hover:bg-gray-400 focus:ring-indigo-800 focus:ring-offset-gray-200 text-black  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              Go to home
            </button>
          </Link>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}