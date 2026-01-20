import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForms() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showpassword, hidepassword] = useState(false);

  const [errors, setErrors] = useState({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = {};

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required*";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    //Password Validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required*";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    setErrors(newErrors);
    if (isValid) {
      toast.success(`Welcome ${formData.email}`);
    }
    setFormData({ email: "", password: "" });
  };

  const getInputClass = (fieldName) => {
    return `border rounded-lg px-4 py-3 mt-1 mb-1 text-sm w-full focus:ring-2 bg-[#f7fafc] outline-none transition-all ${
      errors[fieldName]
        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
        : "border-gray-200 focus:border-green-500 focus:ring-green-500"
    }`;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-5 bg-[#f7fafc] mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div>
              <div className="text-left">
                <label
                  className="font-semibold text-l text-gray-600 pb-1 block text-left "
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className={getInputClass("email")}
                  type="text"
                  placeholder="YourMail@gmail.com"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <p className="text-left text-red-500 text-xs  ml-2 mb-4">
                    {errors.email}
                  </p>
                )}

                <label
                  className="font-semibold text-l text-gray-600 pb-1 block text-left mb"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative mb-1">
                  <input
                    className={`${getInputClass("password")} pr-16`}
                    type={showpassword ? "text" : "password"}
                    placeholder="*******"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <button
                    type="button"
                    onClick={() => hidepassword(!showpassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-green-500"
                  >
                    {showpassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-left text-red-500 text-xs  ml-2">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="text-right mb-7">
                <a
                  className="text-l font-display font-semibold text-gray-500 hover:text-green-600 cursor-pointer"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="mt-1 mb-5">
                <button
                  className="py-2 px-4 bg-gradient-to-r from-[#20c55e] to-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
              <span className="text-center block p-3">------ OR ------</span>
              <div className="flex justify-center w-full items-center mt-2">
                <div>
                  <button className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-green-500 focus:ring-offset-green-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                    <FcGoogle size={25} />
                    <span className="ml-2">Sign in with Google</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center  mt-4">
                <span className="text-md text-gray-600 text-center text-sm">
                  Don't have an account ?
                </span>
                <Link to="/signup">
                  <a className="text-m font-bold px-2 text-green-500   hover:underline text-center">
                    Register
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-green-500 hover:text-green-700 font-medium transition-colors"
            >
              &larr; Return to Homepage
            </a>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
