import React from "react";
import BlogPage from "../components/BlogPage";

function Blog() {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to our blog{" "}
        </h1>
      </div>
       {/* all blogs container */}
       <div className="max-w-7xl mx-auto">
        <BlogPage/>
      </div>
    </div>
  );
}

export default Blog;
