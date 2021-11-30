import React from "react";

function CategoryFilter({categories, cat, onSelectCategory}) {
  const categoryButton = categories.map((category) => {
        const className= category === cat ? "selected" :null; 
    return(
      <button 
      key={category}
      className={className}
      onClick={() => onSelectCategory(category)}>
        {category}
      </button>
    )    
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
