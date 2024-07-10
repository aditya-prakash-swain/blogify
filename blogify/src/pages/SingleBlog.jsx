import React from "react";
import { useLoaderData } from "react-router-dom";
// import {} from "react-icons/fa";
import { FaClock, FaUser } from "react-icons/fa6";
import SideBar from "../components/SideBar";
import { FaCalendar } from "react-icons/fa";


function SingleBlog() {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];

  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single blog page
        </h2>
      </div>

      {/* blog daetails */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded"/>
          </div>
          <h2 className="text-3xl font-bold mb-4 mt-8 text-blue-500 cursor-pointer">{title}</h2>
          <p className="mb-2 text-gray-500"><FaUser className="inline-flex items-center mr-2"/>{author} | <FaCalendar className="inline-flex items-center mx-2"/>{published_date} | <FaClock className="inline-flex items-center mx-2"/>{reading_time}</p>
          {/* <p className="mb-2 text-gray-500"></p> */}
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500 mb-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam id nihil illum autem, perferendis aliquid quod quidem culpa, quos cum. Consequuntur tenetur fugiat non illum at voluptatibus repellat facilis!</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam id nihil illum autem, perferendis aliquid quod quidem culpa, quos cum. Consequuntur tenetur fugiat non illum at voluptatibus repellat facilis!</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam id nihil illum autem, perferendis aliquid quod quidem culpa, quos cum. Consequuntur tenetur fugiat non illum at voluptatibus repellat facilis!</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam id nihil illum autem, perferendis aliquid quod quidem culpa, quos cum. Consequuntur tenetur fugiat non illum at voluptatibus repellat facilis!</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam id nihil illum autem, perferendis aliquid quod quidem culpa, quos cum. Consequuntur tenetur fugiat non illum at voluptatibus repellat facilis!</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam id nihil illum autem, perferendis aliquid quod quidem culpa, quos cum. Consequuntur tenetur fugiat non illum at voluptatibus repellat facilis!</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam id nihil illum autem, perferendis aliquid quod quidem culpa, quos cum. Consequuntur tenetur fugiat non illum at voluptatibus repellat facilis!</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam id nihil illum autem, perferendis aliquid quod quidem culpa, quos cum. Consequuntur tenetur fugiat non illum at voluptatibus repellat facilis!</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam id nihil illum autem, perferendis aliquid quod quidem culpa, quos cum. Consequuntur tenetur fugiat non illum at voluptatibus repellat facilis!</p><br/>

          </div>
        </div>
        <div className="lg:w-1/2">
          <SideBar/>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
