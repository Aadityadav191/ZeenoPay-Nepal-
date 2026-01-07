import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cards({ title, content, image, id }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/Blog/${id}`)}
        className="relative flex w-90 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:cursor-pointer mb-5 "
      >
        <div className="relative  -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover object-center transform transition-all duration-500 ease-out hover:scale-105 hover:opacity-90 hover:shadow-lg"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {content.split(" ").slice(0, 15).join(" ")}...
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={() => navigate(`/Blog/${id}`)}
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read More &rarr;
          </button>
        </div>
      </div>
    </>
  );
}
