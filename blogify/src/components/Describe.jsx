import React, { useState } from "react";

function Describe() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const handleMouseOver1 = () => {
    setHover1(true);
    setHover2(false);
    setHover3(false);
  };

  const handleMouseOut1 = () => {
    setHover1(false);
  };

  const handleMouseOver2 = () => {
    setHover2(true);
    setHover1(false);
    setHover3(false);
  };

  const handleMouseOut2 = () => {
    setHover2(false);
  };

  const handleMouseOver3 = () => {
    setHover3(true);
    setHover1(false);
    setHover2(false);
  };

  const handleMouseOut3 = () => {
    setHover3(false);
  };

  return (
    <div className="flex flex-3 gap-4 mx-auto my-4 p-5">
      <div
        className="relative flex-1 w-48 h-100 p-2 bg-gray-900 font-semibold rounded-lg overflow-hidden"
        onMouseOver={handleMouseOver1}
        onMouseOut={handleMouseOut1}
      >
        <img
          src="https://images.unsplash.com/photo-1579781354186-012d7e850ad7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww"
          alt="Image"
          className={`w-full h-full object-cover ${hover1 ? "blur" : ""}`}
        />
        {hover1 && (
          <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-lg text-white bg-black bg-opacity-50 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi
            eligendi voluptate, magnam neque odit, placeat quibusdam laudantium
            fugit modi numquam rerum dolorum repudiandae hic cum vel. Assumenda,
            dolorum sint.
          </p>
        )}
        {!hover1 && (
          <p className="absolute bottom-1/4 left-1 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
            Learn More
          </p>
        )}
      </div>
      <div
        className="relative flex-1 w-48 h-100 p-2 bg-gray-900 font-semibold rounded-lg overflow-hidden"
        onMouseOver={handleMouseOver3}
        onMouseOut={handleMouseOut3}
      >
        <img
          src="https://images.unsplash.com/photo-1579781354186-012d7e850ad7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww"
          alt="Image"
          className={`w-full h-full object-cover ${hover3 ? "blur" : ""}`}
        />
        {hover3 && (
          <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-lg text-white bg-black bg-opacity-50 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            sapiente eius velit officiis, repellat corporis porro incidunt
            inventore consectetur nostrum quibusdam totam labore quod maiores,
            culpa quam? Adipisci, quae ducimus.
          </p>
        )}
        {!hover3 && (
          <p className="absolute bottom-1/4 left-1 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
            Learn More
          </p>
        )}
      </div>
      <div
        className="relative flex-1 w-48 h-100 p-2 bg-gray-900 font-semibold rounded-lg overflow-hidden"
        onMouseOver={handleMouseOver2}
        onMouseOut={handleMouseOut2}
      >
        <img
          src="https://images.unsplash.com/photo-1579781354186-012d7e850ad7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww"
          alt="Image"
          className={`w-full h-full object-cover ${hover2 ? "blur" : ""}`}
        />
        {hover2 && (
          <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-lg text-white bg-black bg-opacity-50 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            sapiente eius velit officiis, repellat corporis porro incidunt
            inventore consectetur nostrum quibusdam totam labore quod maiores,
            culpa quam? Adipisci, quae ducimus.
          </p>
        )}
        {!hover2 && (
          <p className="absolute bottom-1/4 left-1 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
            Learn More
          </p>
        )}
      </div>
    </div>
  );
}

export default Describe;
