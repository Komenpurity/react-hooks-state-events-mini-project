import React from "react";

function CategoryFilter({categories}) {  
  const list = categories.map((category,index) =>{
      return (<button  key={index}>{category}</button>)
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {list} 
    </div>
  );
}

export default CategoryFilter;
