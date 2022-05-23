import React from "react";

function CategoryFilter({categories, getCategory}) {
  //console.log(categories)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (<button key={category} onClick={() => getCategory(category)}>{category}</button>))}
    </div>
  );
}

export default CategoryFilter;
