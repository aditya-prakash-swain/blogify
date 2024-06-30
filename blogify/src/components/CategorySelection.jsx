import React from "react";

function CategorySelection({
  onSelectCategory,
  selectedCategory,
  activeCategory,
}) {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className="text-xl px-4 mb-8 lg:space-x-16 gap-3 flex flex-wrap  items-center border-b-2 py-5 text-gray-800">
      <button onClick={()=> onSelectCategory(null)} className={`lg:ml-12 ${activeCategory? "":"active-button"}`}>All</button>
      {categories.map((category) => (
        <button
          onClick={() => onSelectCategory(category)}
          className={`mr-2 space-x-16 ${
            activeCategory === category ? "active-button" : ""
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategorySelection;
