import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className=" mx-auto mt-5">
          <h1 className="font-bold text-4xl text-center mb-4 ">
            Join <span className="text-green-500"> ShipifyNepal</span>
          </h1>
          <p className="text-center text-gray-600  max-w-md  mb-5">
            Create your account to start shopping from international stores
          </p>
        </div>
        <Outlet />
      </div>
    </>
  );
}
