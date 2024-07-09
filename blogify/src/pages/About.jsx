import React from "react";
import BlogPage from "../components/BlogPage";
import Describe from "../components/Describe";

function About() {
  return (
    <div className="">
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          About Us
        </h1>
      </div>
      <div className="max-w-7xl mx-auto ">
        <Describe/>
      </div>
     
    </div>
  );
}

export default About;
