import React from "react";
import { Link } from "react-router-dom";

function SignUp({ isOpen, onClose, onNavigateToLogin }) {
  return (
    <div
      className={`fixed inset-0 w-full flex items-center justify-center  ${
        isOpen
          ? "bg-white-500 backdrop-filter backdrop-blur-sm bg-opacity-30 "
          : "hidden"
      }`}
    >
      <div className="modal-container ">
        <div
          className="bg-orange-500 rounded bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 
text-center p-5 h-100 lg:w-[500px]  shadow-md"
        >
          {/* modal content */}
          <h2 className="text-xl font-semibold mb-5 mt-6 uppercase">
            Sign Up Here
          </h2>
          <hr className="mb-4 w-1/2 bg-center mx-auto" />
          <form className="px-4">
            {/* email */}
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280 outline-none focus:border-[#6a64f1] focus:shadow-md]"
              />
            </div>
            {/* password */}
            <div className="mb-5">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280 outline-none focus:border-[#6a64f1] focus:shadow-md]"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                name="checkPassword"
                id="checkPassword"
                placeholder="Enter your password again"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280 outline-none focus:border-[#6a64f1] focus:shadow-md]"
              />
            </div>
            <div>
              <button
                type="button"
                className="hover:shadow-md rounded-md shadow-lg hover:bg-orange-900 bg-orange-300  hover:text-white py-3 px-8 text-base font-semibold  text-black outline-none"
              >
                Register
              </button>
              <br />
              <span>
                Already have an account?
                <button
                  type="button"
                  className="hover:text-black font-bold text-purple-900 mx-1"
                  onClick={onNavigateToLogin}
                >
                  {" "}
                  Sign In ...
                </button>
              </span>
            </div>
          </form>
          {/* modal close btn */}
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-5 shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
